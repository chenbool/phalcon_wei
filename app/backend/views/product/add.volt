{% extends "layouts/_base.volt" %}

{% block title %} 产品列表 {% endblock %}

{% block head %}
    <style type="text/css">
    </style>
{% endblock %}

{# main content #}
{% block content %}

<div class="page-title">
	<!-- <h3 class="hidden-xs">产品添加</h3>  -->
	<div class="page-breadcrumb">
		<ol class="breadcrumb">
			<li><a href="{{static_url('/admin/product/index')}}">产品列表</a></li> 
			<li><a href="{{static_url('/admin/product/add')}}">产品添加</a></li>
		</ol>
	</div>
</div>

<!-- main -->
<div class="row">
              
    <div class="col-md-12">
        <section class="panel">

            <div class="row">
                <div class="col-lg-12">
                    <section class="panel">
                        <header class="panel-heading"> 
                        产品添加 
                        <a class="pull-right" href="{{static_url('/admin/product/index')}}" > 返回列表 </a>
                        </header>
                        <div class="panel-body">

                            <form class="form-horizontal bordered-group form" role="form" action="/tp/admin.php/Role/add" method="post">

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">分类</label>
                                    <div class="col-sm-6">
                                        <select class="form-control" name="pid">

                                        {% for vo in menu %}    
                                            <option value="{{vo.id}}" > {{vo.name}} </option> 
                                        {% endfor %}

                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">名称</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control name" placeholder="名称" name="name">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 col-xs-12 control-label">接口</label>
                                    <div class="col-sm-2 col-xs-6">
                                        <select class="form-control api_type" name="api">
                                        {% for vo in api %}  
                                            <option value="{{vo.type}}" > {{vo.name}} </option>  
                                        {% endfor %}   

                                        </select>
                                    </div>
                                    <div class="col-sm-2 col-xs-6">
                                        <select class="form-control api-list" name="pcode">
                                            {# <option value="0" > 比特币 </option>  #}   
                                        </select>
                                    </div>
                                    <div class="alert alert-danger col-md-2 hidden-xs hidden-sm no-pading no-margin pull-right" role="alert">  产品数据选择 </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 col-xs-12 control-label">玩法</label>
                                    <div class="col-sm-2 col-xs-6">
                                        <select class="form-control" name="game_rule">
                                            <option value="0" > 默认 </option>    
                                            <option value="1" > 点位 </option>       
                                            <option value="2" > 竞猜 </option>    
                                        </select>
                                    </div>
                                    <div class="col-sm-3 col-xs-6">
                                        <input type="text" class="form-control" placeholder="时间: 1,2,3,4" name="time_rule">
                                    </div>
                                    <div class="alert alert-danger col-md-2 hidden-xs hidden-sm no-pading no-margin pull-right" role="alert"> 时间玩法间隔,以分钟为单位 </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 col-xs-12 control-label">波动幅度</label>
                                    <div class="col-sm-2">
                                        <input type="text" class="form-control name" placeholder="波动幅度" name="rand">
                                    </div>
                                    <div class="alert alert-danger col-md-2 hidden-xs hidden-sm no-pading no-margin pull-right" role="alert"> 取数值正负,例如 5 ~ -5 </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">盈亏比例</label>
                                    <div class="col-sm-2 col-xs-9">
                                        <div class="input-group ">
                                            <input type="text" class="form-control" placeholder="盈亏比例" name="income" value="5">
                                            <span class="input-group-addon">%</span>
                                        </div>
                                    </div>
                                    <div class="alert alert-danger col-md-2 hidden-xs hidden-sm no-pading no-margin pull-right" role="alert"> 设置盈亏比例,以百分比计算  </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 col-xs-12 control-label">开市时间</label>
                                    <div class="col-sm-3 col-xs-6">
                                        <div class="input-group mg-b-md">
                                                <span class="input-group-addon">周一 ~ 周五</span>
                                                <input type="text" class="form-control" placeholder="例如:0:00-23:59" name="day_time" value="0:00-23:59">
                                        </div>
                                    </div>

                                    <div class="col-sm-3 col-xs-6">
                                        <div class="input-group mg-b-md">
                                                <span class="input-group-addon">周末</span>
                                                <input type="text" class="form-control" placeholder="例如:8:00-11:00|13:00-16:00" name="week_time">
                                        </div>
                                    </div>                                    
                                    <div class="alert alert-danger col-md-2 hidden-xs hidden-sm no-pading no-margin pull-right" role="alert"> 设置开市时间,为空不开启  </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">状态</label>
                                    <div class="col-sm-6">
                                        <input type="radio" name="state" value="0" checked="checked"> 使用 &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="radio" name="state" value="1"> 禁用
                                    </div>
                                </div>



                                <div class="form-group">
                                    <label class="col-sm-2 control-label">备注</label>
                                    <div class="col-sm-6">
                                        <textarea class="form-control" rows="3" name="desc"></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class=" col-sm-offset-2 col-sm-6">
                                        <button type="button" class="btn btn-primary btn-sm submit">提交</button> &nbsp;&nbsp;
                                        <button type="reset" class="btn btn-success btn-sm">重置</button>
                                    </div>
                                </div>                                                    

                            </form>

                        </div>
                    </section>
                </div>
            </div>


        </section>
    </div>
</div>


{% endblock %}



{# js content #}
{% block js %}

<script type="text/javascript" src="{{static_url('/admin/js/underscore-min.js')}}"></script>
<script type="text/javascript">

$(function(){
    apiList();
    $('.api_type').change(function(){
        apiList();
    });

});

//list
function apiList(){
    var api_type = $('.api_type').val();
    // console.log(api_type);
    $.post('{{static_url('/admin/product/apilist')}}',{type:api_type},function(res){

        var template = _.template("<% _.each(res, function(code,name) { %> <option value='<%= code %>' ><%= name %></option>  <% }); %>");  
        var html = template( { res: res } );
        $('.api-list').html( html  );
        
    },'json');
}


//提交
$('.submit').click(function(){
    var data = $('.form').serializeArray();

    $.post('{{static_url('/admin/product/add')}}',data,function(res){

        if( res.status > 0 ){
            layer.msg( res.info[0] );
        }else{
            //成功
            layer.msg( res.info[0] )
            setTimeout(function(){
                location.href = '{{static_url('/admin/product/index')}}';
            },1500);
        }
        
    },'json');
});



</script>
{% endblock %}  