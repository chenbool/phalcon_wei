// var socket = io("http://localhost:2345");
//***********************qq:30024167**************************** */
socket.on('connect', function(){
    console.log('socket链接成功！');
});

socket.on('ajaxpro', function(msg){
    eachPro(msg);
    // console.log(msg);

});

//遍历
function eachPro(data){

    $.each(data,function(k,v){
        // if( typeof(v) == 'string' ){
        //     v=JSON.parse(v);
        // }
        //  console.log(v);

        $('#pid'+v.pid+' .prtitle').html(v.ptitle);
        $('#pid'+v.pid+' .now-value').html(v.Price);
        $('#pid'+v.pid+' .rise-low').html(v.Low);
        $('#pid'+v.pid+' .rise-high').html(v.High);
        
        if(v.isup == 1){

            $('#pid'+v.pid+' .now-value').addClass('rise-value');
            $('#pid'+v.pid+' .now-value').removeClass('fall-value');

            $('#pid'+v.pid+' .rise-low').addClass('rise');
            $('#pid'+v.pid+' .rise-low').removeClass('fall');

            $('#pid'+v.pid+' .rise-high').addClass('rise');
            $('#pid'+v.pid+' .rise-high').removeClass('fall');

        }else if(v.isup == 0){
            $('#pid'+v.pid+' .now-value').removeClass('rise-value');
            $('#pid'+v.pid+' .now-value').addClass('fall-value');

            $('#pid'+v.pid+' .rise-low').removeClass('rise');
            $('#pid'+v.pid+' .rise-low').addClass('fall');

            $('#pid'+v.pid+' .rise-high').removeClass('rise');
            $('#pid'+v.pid+' .rise-high').addClass('fall');
        }
        

    });    
}

   