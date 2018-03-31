

function show_user_modal(classname) {

  $('body').addClass('modal-open');
  $('.'+classname).removeClass('hide')
  $('.'+classname).addClass('active')
  // $('.modal-bank .slide-in-up').attr('class','order-modal bank-info-modal modal slide-in-up ng-enter active ng-enter-active')
  $('.'+classname+' .slide-in-up').css('transition-duration','300ms');
  $('.'+classname+' .slide-in-up').css('transform','translate(0px, 0px) translateZ(0px)');

}

function hide_user_modal(classname) {
  $('body').removeClass('modal-open');
  $('.'+classname).addClass('hide')
  $('.'+classname).removeClass('active')
  // $('.modal-bank .slide-in-up').attr('class','order-modal bank-info-modal modal slide-in-up ng-enter active ng-enter-active')
  $('.'+classname+' .slide-in-up').css('transition-duration','300ms');
  $('.'+classname+' .slide-in-up').css('transform','translate3d(0, 100%, 0)');
}
function go_add_bank() {
  hide_user_modal('modal-withdraw');
  show_user_modal('modal-bank');
}






function toggle_order_close_panel(){
  $('.pro_mengban').removeClass('glass_mask');
  $('.order-confirm-panel').removeClass('open');
}


/**
 * 倒计时
 * @author lukui  2017-06-30
 * @param  {[type]} nS 倒计时时间
 * @return {[type]}    [description]
 */
function getLocalTime(nS) {     
   var newDate = new Date();
  newDate.setTime(nS * 1000);

  Date.prototype.format = function(format) {
         var date = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
         };
         if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
         }
         for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                  if(RegExp.$1.length  == 1 && date[k] < 10){
                      date[k] = '0'+date[k];
                  }
                       format = format.replace(RegExp.$1, RegExp.$1.length == 1
                              ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
         }
         return format;
  }
  return newDate.format('yyyy-MM-dd h:m:s')    
}


/**
 * 秒转时间格式  
 * @author lukui  2017-06-30
 * @param  {[type]} a 秒数
 * @return {[type]}   时间格式
 */
function formatSeconds2(a) {   
  var hh = parseInt(a/3600);  
  if(hh<10) hh = "0" + hh;  
  var mm = parseInt((a-hh*3600)/60);  
  if(mm<10) mm = "0" + mm;  
  var ss = parseInt((a-hh*3600)%60);  
  if(ss<10) ss = "0" + ss;  
  var length = hh + ":" + mm + ":" + ss;  
  if(a>0){  
    return length;  
  }else{  
    return "NaN";  
  }  
}  



function app_exit() {
    
    location.href = '/index/login/logout';
}