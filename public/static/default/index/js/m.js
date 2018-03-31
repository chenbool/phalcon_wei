$(document).ready(function(e) {
	
	
});
var ctype = "k";
var ccout;
function getkl(){
	if($(".trade-chart-type.stock").hasClass("active")){
		ctype="k";
	}
	if($(".trade-chart-type.line").hasClass("active")){
		ctype="l";
	}
}
$(function () {
	ccout=setTimeout("getonedata()",800);
	setInterval("getMaindata(ctype)",60000);
    autoHeight();
	getMaindata(ctype);
	
})
//cc=function(){
//	ccout=setTimeout("getonedata()",500);
//}
var obj={
		start:0,
		end:100
	}
var minQiya,maxQiya;
$(window).resize(function(e){
	autoHeight();
})
$(window).load(function(e) {
   // autoHeight();
});

//时间戳转成时：分：00形式   1700以来的秒数（非毫秒）
function getDateHM(tm){
	NWh=new Date(parseInt(tm) * 1000).getHours(tm);
	NWm=new Date(parseInt(tm) * 1000).getMinutes(tm);
	if(NWh<10){
		NWh="0"+NWh;
	}
	if(NWm<10){
		NWm="0"+NWm;
	}
  var tt=NWh+":"+NWm
  return tt;
}
//alert(getDateHM('1499096200'))

//自动高度
function autoHeight(){
	var headerbarH=$(".headerbar").height();
	var headerH=$("header").height();
	var NavH=$("nav").height();
	var tradebarH=$(".trade_bar").height();
	var ecBarH=$("#ecBar").height();
	var WinHss=$(window).height();
	$("footer").height(WinHss-headerbarH-headerH-NavH-tradebarH-ecBarH);
	$("#ecKx").height(WinHss-headerbarH-headerH-NavH-tradebarH-ecBarH);
}

function change_chart_period(type){
	$(".trade-chart-period").each(function(i,e){
		if($(this).hasClass(type)){
			$(this).siblings(".trade-chart-period").removeClass("active");
			$(this).addClass("active");
		}
	})

	getMaindata(ctype);
}
//点击切换K先跟走势
function change_chart_type (type) {
	if (type == "stock") {
		ctype = "k";
	} else{
		ctype = "l";
	}
	getMaindata(ctype);
}



function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(getDateHM(rawData[i].splice(0, 1)[0]));
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += Number(data0.values[i - j][1]);
        }
        result.push(sum / dayCount);
    }
	//alert(result)
    return result;
}

function kTl(KDS){
	K2line=new Array();
	for(p=0;p<KDS.length;p++){
		K2line.push(KDS[p][3])
		if (p == KDS.length-1) {
			K2line[p] = KDS[p][1];
		}
	}
	//alert(JSON.stringify(K2line))
	return K2line;
}

function calculateMA2(numb,dts) {
    var result2 = [];
    for (var y= 0, len = dts.length;y < len;y++) {
        if (y < numb) {
            result2.push('-');
            continue;
        }
        var sum = 0;
        for (var jj = 0; jj < numb; jj++) {
            sum += Number(dts[y - jj]);
        }
        result2.push(sum / numb);
    }
	//alert(result)
    return result2;
}
function funPoor(ds){
	fPoor=new Array();
	for(x=0;x<ds.length;x++){
		fPoor.push(ds[x][1])
	}
	return fPoor;
}
//求数的差
function getPoor(d){
	nPoor=new Array();
	nPoor.push("-");
	for(i=0;i<d.length;i++){
		if(i>0){
			nPoor.push((d[i]-d[i-1]).toString())
		}
	}
	return nPoor;
}
 
var  cldata;

//AJAX请求
function getMaindata(ctype){
	
	if(ctype=="k"){
		$(".trade-chart-type.stock").addClass("active");
		$(".trade-chart-type.line").removeClass("active");
	}
	if(ctype=="l"){
		$(".trade-chart-type.stock").removeClass("active");
		$(".trade-chart-type.line").addClass("active");
	}
	Vtype=$(".trade-chart-period.active").text();
	
	switch (Vtype){
		case "1M":
		  interval="1";
		  break;
		case "5M":
		  interval="5";
		  break;
		case "15M":
		  interval="15";
		  break;
		case "30M":
		  interval="30";
		  break;
		case "1H":
		  interval="60";
		  break;
		case "1D":
		  interval="d";
		  break;
	}

	//ajax    
	// clearTimeout(ccout);
	var datas = {"pid":order_pid,"num":60,"interval":interval};

	//socket***************qq:30024167******************************************

	socket.on('ajaxpro', function(msg){
		// console.log(msg);
		// console.log(product_id);

		var jdatadata ={};
		msg.forEach(function(v) {
			if( product_id == v.pid ){
				var jdatadata = {};
				jdatadata.topdata = {"topdata":"1506407633","now":"1.69915","open":"1.697","lowest":"1.69566","highest":"1.70085","close":"1.69693"};
				jdatadata.items = new Array();
				jdatadata.items[0] = ['1.69459','1.69458','1.69456','1.69459'];
				jdatadata.items[1] = ['1.69459','1.69458','1.69456','1.69459'];
				jdatadata.items[2] = ['1.69459','1.69458','1.69456','1.69459'];
				jdatadata.items[3] = ['1.69459','1.69458','1.69456','1.69459'];
				jdatadata.items[4] = ['1.69459','1.69458','1.69456','1.69459'];
				// console.log( jdatadata );

				localStorage.setItem("data",'');
				localStorage.setItem("data",JSON.stringify(jdatadata));
				gotoecharts(jdatadata)
				ccout=setTimeout("getonedata()",1000);
				getonedata();
				minQiya = jdatadata.items[jdatadata.items.length-1][2];
				maxQiya = jdatadata.items[jdatadata.items.length-1][3];
			}
			// console.log(res);
		}, this);


		// var jdatadata =msg;
		// console.log(jdatadata);
		// localStorage.setItem("data",'');
		// localStorage.setItem("data",JSON.stringify(jdatadata));
		// gotoecharts(jdatadata)
		// ccout=setTimeout("getonedata()",1000);
		// getonedata();
		// minQiya = jdatadata.items[jdatadata.items.length-1][2];
		// maxQiya = jdatadata.items[jdatadata.items.length-1][3];


	});

	socket.on('getkdata', function(msg){
		var jdatadata =JSON.parse(msg);

		console.log(jdatadata);

		localStorage.setItem("data",'');
		localStorage.setItem("data",JSON.stringify(jdatadata));
		gotoecharts(jdatadata)
		ccout=setTimeout("getonedata()",1000);
		getonedata();
		minQiya = jdatadata.items[jdatadata.items.length-1][2];
		maxQiya = jdatadata.items[jdatadata.items.length-1][3];
	});
	
}

//socket*********************************************************

//
function getonedata(){
	var data=JSON.parse(localStorage.getItem("data"));
	
	clearTimeout(ccout);

	//socket**********************qq:30024167***********************************
	
	socket.on('ajaxpro', function(msg){
		// console.log(product_id);
		var onedata ={};
		msg.forEach(function(v) {
			if( product_id == v.pid ){
				var onedata = v.topdata
				var a = tempmy(onedata,data);
					a = null;
			}
		}, this);

	});

	// var temp =socket.emit('getprodata', order_pid);
	// socket.on('getprodata', function(msg){
	// 	var onedata =JSON.parse(msg);
	// 	// console.log(onedata);
	// 	var a = tempmy(onedata,data);
	// 	a = null;
	// });

	//********************************************************************** */







/*
 */


//calculateMA2(5,)


    // var temp = $.ajax({
    //     url:"/index/api/getprodata",
    //     type: "get",
    //     cache:false,
    //     dataType: "json",
    //     async:true,

    //     data:{
    //         "pid":order_pid
    //     },
    //     success: function(onedata) {
    //         // $("#container .txt1 span.a").text(data.topdata.topdata);
	// 		console.log(onedata);
    //         //	alert(NDAT.topdata.now)
    //         var a = tempmy(onedata,data);
    //         a = null;

    //     },
    //     error:function(XHR){
    //         XHR = null
    //     },
    //     complete: function (jqXHR , TS) { jqXHR=null;
    //          }

	// })
	

    //temp.destroy();
    delete temp;
    ccout=setTimeout("getonedata()",1000);
}



build_diff_data = function (m_short, m_long, data) {
	var result = [];
	var pre_emashort = 0;
	var pre_emalong = 0;
	for (var i = 0, len = data.length; i < len; i++) {
		var ema_short = data[i][1];
		var ema_long = data[i][1];
		
		if (i != 0) {
			ema_short = (1.0 / m_short) * data[i][1] + (1 - 1.0 / m_short) * pre_emashort;
			ema_long = (1.0 / m_long) * data[i][1] + (1 - 1.0 / m_long) * pre_emalong;
		}

		pre_emashort = ema_short;
		pre_emalong = ema_long;
		var diff = ema_short - ema_long;

		result.push(diff);
	}

	return result;
}

build_dea_data = function (m, diff) {
	var result = [];
	var pre_ema_diff = 0;
	for (var i = 0, len = diff.length; i < len; i++) {
		var ema_diff = diff[i];
		
		if (i != 0) {
			ema_diff = (1.0 / m) * diff[i] + (1 - 1.0 / m) * pre_ema_diff;
		}
		pre_ema_diff = ema_diff;

		result.push(ema_diff);
	}

	return result;
}

build_macd_data = function (data, diff, dea) {
	var result = [];
	
	for (var i = 0, len = data.length; i < len; i++) {
		var macd = 2 * (diff[i] - dea[i]);
		result.push(macd);
	}

	return result;
}


/*
*/

function gotoecharts(data){

var ecKxId = document.getElementById("ecKx");
//var ecKx = echarts.init(ecKxId);
var ecKx = echarts.getInstanceByDom(ecKxId);
if (ecKx === undefined) {
	ecKx = echarts.init(ecKxId);
}


//$(".header-item").text(JSON.stringify(data.items[data.items.length-1]))
$("header .now").text(data.topdata.now);

cldata=data.topdata.now;

$("footer").data("nowk",cldata);

$("header .open").text(data.topdata.open);
$("header .lowest").text(data.topdata.lowest);
$("header .highest").text(data.topdata.highest);
$("#container .txt1 span.a").text(getDateHM(data.topdata.topdata)+":00");
$("#container .txt1 span.b").text(data.topdata.now);
$("#container .txt1 span.c").text(data.topdata.open);
$("#container .txt1 span.d").text(data.topdata.lowest);
$("#container .txt1 span.e").text(data.topdata.highest);



var diff =build_diff_data(12, 26, data.items);
	var dea =build_dea_data(9, diff);
	var macd =build_macd_data(data.items, diff, dea);
diffL=diff.length-1;
deaL=dea.length-1;
macdL=macd.length-1;
$("#container .txt2 span.a i").text(diff[diffL].toFixed(4));
$("#container .txt2 span.b i").text(dea[deaL].toFixed(4));
$("#container .txt2 span.c i").text(macd[macdL].toFixed(4));


 if(data.topdata.state=="up"){
	 $("header .ng-binding").removeClass("fall").addClass("rise")
 }
 if(data.topdata.state=="down"){
	  $("header .ng-binding").addClass("fall").removeClass("rise")
 }
 data0 = splitData(data.items);	
  var ecKdata = {
	  legend: {
			//data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
		},
		/*
		tooltip: {
			trigger: 'axis'
		},
*/
		grid: [
				 {
					   left: 20,
						right:70,
						top:'5%',
						bottom:180
					},
					{
						left: 20,
						right:70,
						bottom:'9%',
						height: 60
					}
		   ],
		xAxis:[{
				type: 'category',
				data: data0.categoryData,
				scale: true,
				boundaryGap : true,
				splitLine: {show: false},
				axisTick: {show: false},
					splitLine: {show: false},
				axisLine:{
					show:false,
					lineStyle:{
						color:'#5f5f5f'
					}
				},
				min: 'dataMin',
				max: 'dataMax',
				//show:false
			},
			{   gridIndex: 1,
					type: 'category',
					data: data0.categoryData,
					scale: true,
					boundaryGap : true,
					//axisLine: {onZero: false},
						axisTick: {show: false},
						splitLine: {show: false},
						axisLabel: {show: false},
					min: 'dataMin',
					max: 'dataMax',
					show:false
				}
			],
		yAxis:[
		 {   type:'value',
			position:"right",
			scale: true,
			splitNumber:6,
			boundaryGap : false,
			splitLine: {
				show: true,
				lineStyle:{
					color:'#292929'
				}
				},
			axisLine:{
				show:false,
				lineStyle:{
					color:'#5f5f5f'
				}
			},
			axisTick:{
			  show:false  
			},
			axisLabel:{
				show:true,
				formatter: function (value, index) {
					return value.toFixed(5)
				}
			},
			max:'dataMax',
			min:'dataMin'
		   
		},
		{   gridIndex: 1,
			position:"right",
			scale: true,
			splitNumber:3,
			boundaryGap : false,
			splitLine: {show: false},
			axisLine:{
			   show:false,
				onZero: true,
				lineStyle:{
					color:'#5f5f5f'
				}
			},
			axisTick:{
			  show:false  
			},
			axisLabel:{
				show:true,
				formatter: function (value, index) {
					
					if(value>0){
						return "+"+value.toFixed(5)
					}
					if(value<0){
						return value.toFixed(5)
					}
					if(value==0){
						return '-'+value.toFixed(5)
					}
				}
			},
			max:'dataMax',
			min:'dataMin'
		  }
		],
		dataZoom:[
				{
						type: 'inside',
						xAxisIndex: [0, 1],
						start: obj.start,
						end: obj.end
					},
					{
						show: false,
						xAxisIndex: [0, 1],
						type: 'slider',
						top: '1%',
						start: 0,
						end: 50
					}
			],
		series: [
			{
				name: '日K',
				type: 'candlestick',
				data: data0.values,
				
				markLine: {
					data: [
						{yAxis:data.topdata.now}
					],
					symbol:'',
					lineStyle:{
						normal:{
							color:'#c23531',
						}
						
					},
					label:{
						normal:{
						formatter: '{c}'
						}
					},
				animationDuration:0
				},
				itemStyle:{
					normal:{
						color:'#19191a',
						color0:'rgba(19,233,236,1)',
						borderColor:'#c23531',
						borderColor0:'rgba(19,233,236,1)'
					}
				},
				animationDuration:0
				
			},
			{
				name: 'MA5',
				type: 'line',
				data: calculateMA(5),
				smooth: true,
				lineStyle: {
					normal: {opacity: 0.5}
				},
				animationDuration:0,
						itemStyle:{
							normal:{
								opacity:0
							}
						}
			},
			{
				name: 'MA10',
				type: 'line',
				data: calculateMA(10),
				smooth: true,
				lineStyle: {
					normal: {opacity: 0.5}
				},
				animationDuration:0,
						itemStyle:{
							normal:{
								opacity:0
							}
						}
			},
			{
				name: 'MA20',
				type: 'line',
				data: calculateMA(20),
				smooth: true,
				lineStyle: {
					normal: {opacity: 0.5}
				},
				animationDuration:0,
						itemStyle:{
							normal:{
								opacity:0
							}
						}
			},
			{
				name: 'MA30',
				type: 'line',
				data: calculateMA(30),
				smooth: true,
				lineStyle: {
					normal: {opacity: 0.5}
				},
				animationDuration:0,
						itemStyle:{
							normal:{
								opacity:0
							}
						}
			},
			 {
				xAxisIndex: 1,
				yAxisIndex: 1,
				name: 'MACD', 
				type: 'bar',
				data:macd,//
				smooth: true,
				symbolSize:1,
				animationDuration:0,
				itemStyle:{
					normal:{
						color:'rgba(31,198,98,1)'
					}
				}
			},
				{
					xAxisIndex: 1,
					yAxisIndex: 1,
					name: 'diff',//快
					type: 'line',
					data: diff,
					smooth: true,
					animationDuration:0,
					symbolSize:1,
					lineStyle:{
						normal:{
							color:"#13E9EC"
						}
					}
				},
				{
					xAxisIndex: 1,
					yAxisIndex: 1,
					name: 'dea',
					type: 'line',
					data: dea,//慢
					smooth: true,
					animationDuration:0,
					symbolSize:1,
					lineStyle:{
						normal:{
							color:"#FA2E42"
						}
					}
				}
			
		]
	};
  var ecKdata2 = {
	  legend: {
			//data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
		},
		/*
		tooltip: {
			trigger: 'axis'
		},
*/
		grid: [
				 {
					   left: 20,
						right:70,
						top:'5%',
						bottom:180
					},
					{
						left: 20,
						right:70,
						bottom:60,
						height: 60
					}
		   ],
		xAxis:[{
				type: 'category',
				data: data0.categoryData,
				scale: true,
				boundaryGap : true,
				splitLine: {show: false},
				axisTick: {show: false},
					splitLine: {show: false},
				axisLine:{
					show:false,
					lineStyle:{
						color:'#5f5f5f'
					}
				},
				min: 'dataMin',
				max: 'dataMax',
				//show:false
			},
			{   gridIndex: 1,
					type: 'category',
					data: data0.categoryData,
					scale: true,
					boundaryGap : true,
					//axisLine: {onZero: false},
						axisTick: {show: false},
						splitLine: {show: false},
						axisLabel: {show: false},
					min: 'dataMin',
					max: 'dataMax',
					show:false
				}
			],
		yAxis:[
		 {   type:'value',
			position:"right",
			scale: true,
			splitNumber:6,
			boundaryGap : false,
			splitLine: {
				show: true,
				lineStyle:{
					color:'#292929'
				}
				},
			axisLine:{
				show:false,
				lineStyle:{
					color:'#5f5f5f'
				}
			},
			axisTick:{
			  show:false  
			},
			axisLabel:{
				show:true,
				formatter: function (value, index) {
					return value.toFixed(5)
				}
			},
			max:'dataMax',
			min:'dataMin'
		   
		},
		{   gridIndex: 1,
			position:"right",
			scale: true,
			splitNumber:3,
			boundaryGap : false,
			splitLine: {show: false},
			axisLine:{
			   show:false,
				onZero: true,
				lineStyle:{
					color:'#5f5f5f'
				}
			},
			axisTick:{
			  show:false  
			},
			axisLabel:{
				show:true,
				formatter: function (value, index) {
					
					if(value>0){
						return "+"+value.toFixed(5)
					}
					if(value<0){
						return value.toFixed(5)
					}
					if(value==0){
						return '-'+value.toFixed(5)
					}
				}
			},
			max:'dataMax',
			min:'dataMin'
		  }
		],
		dataZoom:[
				{
						type: 'inside',
						xAxisIndex: [0, 1],
						start: obj.start,
						end: obj.end
					},
					{
						show: false,
						xAxisIndex: [0, 1],
						type: 'slider',
						top: '1%',
						start: 0,
						end: 50
					}
			],
		series: [
			{
				name: '日K',
				type: 'line',
				data: kTl(data.items),
				markLine: {
					data: [
						{yAxis:data.topdata.now}
					],
					symbol:'',
					lineStyle:{
						normal:{
							color:'#c23531',
						}
						
					},
					label:{
						normal:{
						formatter: '{c}'
						}
					},
				animationDuration:0
				},
				smooth:false,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					normal: {
						color: 'rgb(255, 70, 131)'
					}
				},
				lineStyle:{
					normal:{
						width:2,
						color:"#d2c01e"
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#474019'
						}, {
							offset: 1,
							color: '#262922'
						}])
					}
				},
				animationDuration:0
				
			},
			 {
				xAxisIndex: 1,
				yAxisIndex: 1,
				name: 'MACD', 
				type: 'bar',
				data:macd,//
				smooth: true,
				symbolSize:1,
				animationDuration:0,
				itemStyle:{
					normal:{
						color:'rgba(31,198,98,1)'
					}
				}
			},
				{
					xAxisIndex: 1,
					yAxisIndex: 1,
					name: 'diff',//快
					type: 'line',
					data: diff,
					smooth: true,
					animationDuration:0,
					symbolSize:1,
					lineStyle:{
						normal:{
							color:"#13E9EC"
						}
					}
				},
				{
					xAxisIndex: 1,
					yAxisIndex: 1,
					name: 'dea',
					type: 'line',
					data: dea,//慢
					smooth: true,
					animationDuration:0,
					symbolSize:1,
					lineStyle:{
						normal:{
							color:"#FA2E42"
						}
					}
				}
			
		]
	};
 ecKx.clear();
  if(ctype=="k"){
	  ecKx.setOption(ecKdata);
  }else{
	   ecKx.setOption(ecKdata2);
  }
  
  ecKx.on("datazoom",function(param){
		obj = param.batch[0];
		// ecKx.setOption(ecKdata);
	})
ecKxId = null;


}







function tempmy(onedata,data){



    if(onedata.now>data.topdata.now){
        data.topdata=onedata;
        data.topdata.state="up"
    }

    if(onedata.now<data.topdata.now){
        data.topdata=onedata;
        data.topdata.state="down"
    }
//			data.items[59] = [data.items[59][0],onedata.now,onedata.now,data.items[59][3],data.items[59][4]];
    data.items[data.items.length-1][2] = onedata.now;
    maxQiya = maxQiya>onedata.now?maxQiya:onedata.now;
    minQiya = minQiya<onedata.now?minQiya:onedata.now;
    data.items[data.items.length-1][3] = minQiya;
    data.items[data.items.length-1][4] = maxQiya;
    if(ctype=="l"){
        K2line[data.items.length-1]=data.topdata.now;
    }

    var gotoechartsNew = new gotoecharts(data);
    // gotoechartsNew();
    gotoechartsNew = null;


    newprice = data.topdata.now;
    var old_price = $('.data-price').html();
    if(old_price*10 < newprice*10){
        $('.data-price').removeClass('fall');
        $('.data-price').addClass('rise');
    }else if(old_price*10 > newprice*10){
        $('.data-price').addClass('fall');
        $('.data-price').removeClass('rise');
    }
    $('.data-price').html(newprice);
    $('.col-nowprice').html(newprice);
    $('.newprice').html(newprice);
    $('.newprice').html(newprice);
    onedata = null ;
    data = null;
}


//setInterval("getMaindata()",60000);