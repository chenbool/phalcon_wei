//active
function menuactice(sub_num,sub_num_son){
	if(!sub_num){
		var sub_num = 0;
	}
	if(!sub_num_son){
		var sub_num_son = 0;
	}
  var childrens = $('.sidebar-menu').children();
  $(childrens[sub_num]).attr('class','active');
  var sub_childrens = $(childrens[sub_num]).children();
  var sub_childrens = $(sub_childrens[1]).children();
  $(sub_childrens[sub_num_son]).attr('class','active');
}

/**
 * WP ajax post
 * @author lukui  2017-02-15
 * @param  {[type]} formurl post url
 * @param  {[type]} data    post data
 * @param  {[type]} locurl  成功后跳转的url
 */
function WPpost(formurl,data,locurl){

    $.post(formurl,data,function(data){
      if (data.type == 1) {

        layer.msg(data.data, {icon: 1,time: 1000},function(){
        	if(locurl){
        		window.location.href=locurl;
        	}else{
        		return true;
        	}
          
        }); 

      }else if(data.type == -1){
        layer.msg(data.data, {icon: 2}); 
      }

    });
}

/**
 * WP ajax get
 * @author lukui  2017-02-16
 * @param  {[type]} geturl [description]
 * @param  {[type]} locurl [description]
 */
function WPget(geturl,locurl){

	$.get(geturl,function(data){
    	if (data.type == 1) {
          layer.msg(data.data, {icon: 1,time: 1000},function(){
          	if (locurl) {
          		window.location.href=locurl;
          	}else{
              return data;
            }
            
          }); 

        }else if(data.type == -1){
          layer.msg(data.data, {icon: 2}); 
        }
    });
}
