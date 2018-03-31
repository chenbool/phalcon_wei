var listionhajax = '';
var is_ajax_list = '';
var page = 2;

function update_user() {
	
	var bankno = $('.bankno').val();
	var province = $('.province').val();
	var city = $('.city').val();
	var address = $('.address').val();
	var accntnm = $('.accntnm').val();
	var accntno = $('.accntno').val();
	var scard = $('.scard').val();
	var phone = $('.phone').val();
	var id = $('.id').val();


	if(!bankno){layer.msg('请选择银行');return false;}
	if(!province){layer.msg('请选择省份');return false;}
	if(!city){layer.msg('请选择城市');return false;}
	if(!address){layer.msg('请输入支行地址');return false;}
	if(!accntnm){layer.msg('请输入开户名称');return false;}
	if(!accntno){layer.msg('请输入卡号');return false;}
	if(!scard){layer.msg('请输入身份证号码');return false;}
	if(!phone){layer.msg('请输入手机号');return false;}


	var postdata = 'bankno='+bankno+"&provinceid="+province+"&cityno="+city+"&address="+address+"&accntnm="+accntnm+"&accntno="+accntno+"&scard="+scard+"&phone="+phone;
	if(id){
		postdata += "&id="+id
	}
	var posturl = "/index/user/dobanks";
	$.post(posturl,postdata,function(resdata){
		layer.msg(resdata.data);

		if(resdata.type == 1){
			setTimeout('gourl()',1000);
		}

	})

	
}



function gourl() {
	
	history.go(0);
}


/**
 * 出金申请
 * @author lukui  2017-07-04
 * @return {[type]} [description]
 */
function out_withdraw() {
	
	var price = $('.cash-price').val();
	var cash_min = $('.cash_min').html();
	var cash_max = $('.cash_min').attr('attrmax');
	if(price*10 < cash_min*10){
		layer.msg('最低提现金额为'+cash_min);
		return false;
	}

	if(price*10 > cash_max*10){
		layer.msg('最高提现金额为'+cash_max);
		return false;
	}

	var postdata = 'price='+price;
	var posturl = '/index/user/cash';
	$.post(posturl,postdata,function(resdata){

		layer.msg(resdata.data);
		if(resdata.type == 1){
			setTimeout('gourl()',1000);
		}

	})

	




}

	/**
	 * 监听输入提现金额
	 * @author lukui  2017-07-05
	 * @param  {[type]} ) {		var       price [description]
	 * @return {[type]}   [description]
	 */
	$('.cash input').bind('input propertychange', function() {
		var price = $('.cash-price').val();
		var reg_par = $('.reg_par').attr('attrdata');
		var true_price = (price*(100-reg_par)/100).toFixed(2);
		$('.true_price').html(true_price);
		$('.true_price').show();

	});


/**
 * 资金流水
 * @author lukui  2017-07-05
 * @param  {[type]} ){	var isshow        [description]
 * @return {[type]}         [description]
 */
$(document).on("click",'.price_list li',function(){

	var isshow = $(this).attr('isshow');
	if(isshow == 0){

		$('.today_list_footer').hide();
		$('.price_list li').attr('isshow',0);
		$('.clickshow').addClass('ion-ios-arrow-up');
		$('.clickshow').removeClass('ion-ios-arrow-down');


		$(this).find('.clickshow').removeClass('ion-ios-arrow-up');
		$(this).find('.clickshow').addClass('ion-ios-arrow-down');

		$(this).find('.today_list_footer').show();
		$(this).attr('isshow',1);

	}else{

		$(this).find('.clickshow').addClass('ion-ios-arrow-up');
		$(this).find('.clickshow').removeClass('ion-ios-arrow-down');

		$(this).find('.today_list_footer').hide();
		$(this).attr('isshow',0);

	}
	

});



listionhajax = setInterval("listionh()",1000);
/**
 * 监听高度
 * @author lukui  2017-07-05
 * @return {[type]} [description]
 */
function listionh() {
    if($(".price_list li:last").attr('ng-repeat')){
        var ScrollTop = $(".price_list li:last").offset().top; 

        if(ScrollTop <1000 ){
        	ajax_price_list();
        }
    }
    
}

/**
 * ajax加载资金流水
 * @author lukui  2017-07-05
 * @return {[type]} [description]
 */
function ajax_price_list() {
	

	var url = "/index/user/ajax_price_list?page="+page;
    var html = '';
    if(is_ajax_list == 1){
        return ;
    }
    is_ajax_list = 1;


    $.get(url,function(resdata){
        
        // console.log(resdata);
        
        var res_list = resdata.data;
        if(res_list.length == 0){
            clearInterval(listionhajax);
            is_ajax_list = 1;
            return;
        }
        $.each(res_list,function(k,v){
        	if(v.type == 2){
        		var other_money = v.account*-1;
        	}else{
        		var other_money = v.account;
        	}
        	html += '<li ng-repeat="c in moneyList" class="" isshow="0">\
                	<div class="money_list_header">\
                		<section class="other_money_bg">\
                		</section><section>\
                			<p class="ng-binding other_money">'+v.title+'</p>\
                			<p>\
                				<i class="iconfont icon--1 "></i>\
                				<i class="iconfont icon-30 ng-hide"></i>\
                				<span class="ng-binding">'+v.nowmoney+'</span></p>\
                			<p>\
                				<i class="iconfont icon--2 pay_blue"></i>\
                				<span class="ng-binding">'+getLocalTime(v.time)+'</span>\
                			</p>\
                		</section><section class="ng-binding other_money">\
                			'+other_money+'                		</section><section class="icon clickshow ion-ios-arrow-up">\
                		</section>\
                	</div>\
                	<article class="today_list_footer" style="display: none;">\
                		<p class="ng-binding">详情：'+v.content+'</p>\
                	</article>\
                </li>';

        
        
    	})
        $('.price_list').append(html);
        page++;
        is_ajax_list = 0;

    })




}


/**
 * 发送验证码
 * @return {[type]} [description]
 */
function get_svg() {
	
	
	var phone = $('.username').val();

	if(!(/^1[34578]\d{9}$/.test(phone))){
        layer.msg("请正确输入手机号！");
        return false;
    }

	
	var url = "/index/login/sendmsm/phone/"+phone;
	$.get(url,function(resdata){
		// console.log(resdata);
		layer.msg(resdata.data);
		if(resdata.type == 1){
			$(".code_btn").attr('onclick',"return false;");
			listion_sendmsm();
		}
	})
	return false;
}

function listion_sendmsm(){

	 var time= 61;
    setTime=setInterval(function(){
        if(time<=1){
            clearInterval(setTime);
            $(".code_btn").text("再发一次");
            $(".code_btn").attr('onclick',"return get_svg();");
            return;
        }
        time--;
        $(".code_btn").text(time+"s");

    },1000);
}



/**
 * 充值
 * @return {[type]} [description]
 */
function submit_deposit() {
	
	can_balance(0)
	
	if(pay_type == ''){
		layer.msg('请选择支付类型');
		return false;
	}

	var bpprice = $('.bpprice').val();
	if(!bpprice || isNaN(bpprice)){
		layer.msg('请输入充值金额');
		return false;
	}

	var posturl = "/index/user/addbalance";
	var postdata = "pay_type="+pay_type+"&bpprice="+bpprice;

	if(pay_type == 'zitopay') {
		$.ajax({
			type : 'POST',
			url : posturl,
			dataType : 'json',
			data: postdata,
			success : function(data, status) {
				if (status) {
					location.href = data;
				} else {
					alert("请求失败请重试!", 4);
				}
			},
			error:function(xhr, msg, error){
				delayMsg("请求错误请重试!", 4);
			}
		});
		return false;
	}

	$.post(posturl,postdata,function(res){
		if(res.type == -1){
			layer.msg(res.data);
		}else{
			// console.log( pay_type );

			if(pay_type == 'wxpay'){
				wxpay_info = JSON.parse(res);
				callpay(wxpay_info);
			}
			if(pay_type.indexOf('zypay') == 0){
				$('#zypay_post').html(res);				
			}
			if(pay_type == 'zitopay'){
				location.href = res;
			}

			//钱宝通
			if(pay_type == 'qbt_pay_wxpay'){
				location.href = res;
			}			

			if(pay_type == 'alipay'){
				$('#zypay_post').html(res);
			}
			if(pay_type == 'qtb_alipay'){
				location.href = res;
			}
			if(pay_type == 'qtb_yinlian'){
				location.href = res;
			}

			//乘勢支付
			if(pay_type == 'cs_wxPub'){
				location.href = res;
			}
			if(pay_type == 'cs_wxPubQR'){
				location.href = res;
			}
			if(pay_type == 'cs_wxMicro'){
				location.href = res;
			}
			if(pay_type == 'cs_alipayQR'){
				location.href = res;
			}
			if(pay_type == 'cs_jdPay'){
				location.href = res;
			}
			if(pay_type == 'cs_jdQR'){
				location.href = res;
			}

			//爱贝支付
			if( pay_type == 'ipay'){
				location.href = res;
			}

			if( pay_type == 'izpay_wx' || pay_type == 'izpay_alipay' ){
				
				var objs = JSON.parse(res);
				// console.log(objs);
				if(objs.status == 0){
					location.href = objs.code_url;
				}else{
					layer.msg('请稍后重试')
				}
				//
			}

			if( pay_type == 'qbt_pay_qqpay' ){	
				var objs = JSON.parse(res);
				if(objs.tranStatus == 0){
					location.href = objs.codeUrl;
				}else{
					layer.msg('请稍后重试')
				}
				//
			}
			
			if(pay_type == 'WeixinBERL' || pay_type == 'Weixin' || pay_type == 'AlipayCS' || pay_type == 'AlipayPAZH'){
				
				if(res.errcode == 0){
					var jsapi_pay_url = res.data.jsapi_pay_url;

					var qrcode = jsapi_pay_url;
		 			sQrcode(qrcode,'pay_code_img');
		 			pay_code_area(1);
		 			can_balance(1);

					//location.href = jsapi_pay_url;
				}
				// console.log(res);

			}
			

			
		}
		

	});
	return false;
}

function check_payid(id) {
	pay_type = id;

}


//调用微信JS api 支付
function jsApiCall(obj)
{
	
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        obj,
        function(res){
            WeixinJSBridge.log(res.err_msg);
            //alert(res.err_code+'|'+res.err_desc+'|'+res.err_msg);
            if(res.err_msg.indexOf('ok')>0){
            	layer.msg('充值成功！');
                window.location.href=returnrul;
            }
        }
    );
}

function callpay(obj)
{
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    }else{
        jsApiCall(obj);
    }
}


function sQrcode(qdata,classname){
	console.log(qdata);
	$("."+classname).empty().qrcode({		// 调用qQcode生成二维码
			render : "canvas",    			// 设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
			text : qdata,    				// 扫描了二维码后的内容显示,在这里也可以直接填一个网址或支付链接
			width : "165",              	// 二维码的宽度
			height : "165",             	// 二维码的高度
			background : "#ffffff",     	// 二维码的后景色
			foreground : "#000000",     	// 二维码的前景色
			src: ""    						// 二维码中间的图片
		});	
		
}	


/**
 * 扫码支付区域
 * @return {[type]} [description]
 */
function pay_code_area(type) {
	if(type == 0){
		$('.pay_code_area').hide();
	}else if(type == 1){
		$('.pay_code_area').show();
		can_balance(1);
	}
}


function can_balance(type) {
	if(type == 0){
		$('.reg_btn').attr('onclick',' ');
		$('.reg_btn').html('请稍后');
		$('.reg_btn').addClass('rise-bg');
		var time = 3;
		var i = setInterval(function(){
			if( time <= 0){
				can_balance(1);
				$('.reg_btn').removeClass('rise-bg');
				clearInterval(i);
			}else{
				$('.reg_btn').html(time+'秒后');
				time--;				
			}

		},1000);
	}else if(type == 1){
		$('.reg_btn').attr('onclick','submit_deposit()');
		$('.reg_btn').html('确认充值');
	}
}