{% extends "layouts/_base.volt" %}

{% block title %} 商品行情 {% endblock %}

{% block head %}
    <style type="text/css">
    </style>

    <!-- <script type="text/javascript" src="js/echarts-all-3.js"></script>
    <script type="text/javascript" src="js/ecstat.min.js"></script>
    <script type="text/javascript" src="js/datatool.min.js"></script>
    <script type="text/javascript" src="js/china.js"></script>
    <script type="text/javascript" src="js/world.js"></script>
    <script type="text/javascript" src="js/00de79fbb5bc439ebcc24c8758c4eb88.js"></script>
    <script type="text/javascript" src="js/d739aa74c50c479baf1e26904fc1f04b.js"></script>
    <script type="text/javascript" src="js/bmap.min.js"></script> -->
    
    {#<script type="text/javascript" src="{{static_url('/index/js/lodash.min.js')}}"></script> #}

    <script>
        var order_type = 0;
        var order_pid = {{info.id}};
        var order_price = 100;
        var order_sen = 30;
        var order_shouyi = 80;
        var newprice = 22910.0004;  //实时价格
        var rawData_data = [];
        var my_money = 300.00;
        var order_min_price = 100;
        var order_max_price = 5000;
        var product_id = {{info.id}};
    </script>    
{% endblock %}

{# main content #}
{% block content %}

<ion-nav-bar class="bar-stable headerbar nav-bar-container" nav-bar-transition="ios"
nav-bar-direction="exit" nav-swipe="">
    <div class="nav-bar-block" nav-bar="active">
        <ion-header-bar class="bar-stable headerbar bar bar-header" align-title="center">
            <div class="buttons buttons-left" style="transition-duration: 0ms;">
                <span class="left-buttons">
                    <a href="javascript:history.go(-1);" class="back-button" style="transition-duration: 0ms;    margin-top: 0.1rem;">
                        <i class="icon ion-ios-arrow-left">
                        </i>
                    </a>
                </span>
            </div>
            <div class="title title-center header-item" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); left: 48px; right: 48px;">
                {{info.name}}
            </div>
        </ion-header-bar>
    </div>
</ion-nav-bar>
<ion-nav-view class="view-container" nav-view-transition="ios" nav-view-direction="exit"
nav-swipe="">
    <ion-view view-title="比特币" class="trade-view pane" hide-nav-bar="false"
    state="trade" nav-view="active" style="opacity: 1; transform: translate3d(0%, 0px, 0px);">
        <ion-content class="trade-content content-background scroll-content ionic-scroll  has-header"
        scroll="true">
            <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
                <header>
                    <section class="ng-binding rise data-price" style="">22910.0004</section>
                    <section>
                        <p>开盘</p>
                        <p class="ng-binding rise data-open" style="">22901.0</p>
                    </section>
                    <section>
                        <p>最低</p>
                        <p class="ng-binding rise data-low" style="">22901.0</p>
                    </section>
                    <section>
                        <p>最高</p>
                        <p class="ng-binding rise data-high" style="">22910.0</p>
                    </section>
                </header>
                <nav>
                    <article>
                        <span class="trade-chart-type stock active" onclick="change_chart_type('stock')">
                            k线
                        </span>
                        <span class="trade-chart-type line " onclick="change_chart_type('line')">
                            走势
                        </span>
                    </article>
                    <section class="trade-chart-period 1M active" onclick="change_chart_period('1M')">1M</section>
                    <section class="trade-chart-period 5M" onclick="change_chart_period('5M')">5M</section>
                    <section class="trade-chart-period 15M" onclick="change_chart_period('15M')">15M</section>
                    <section class="trade-chart-period 30M" onclick="change_chart_period('30M')">30M</section>
                    <section class="trade-chart-period 1H" onclick="change_chart_period('1H')">1H</section>
                    <section class="trade-chart-period 1D" onclick="change_chart_period('1D')">1D</section>
                </nav>
                <footer>
                    <div id="container">
                        <div id="ecKx">
                        </div>
                        <div class="txt1">
                            <span class="a">
                            </span>
                            <span class="b">
                            </span>
                            <span class="c">
                            </span>
                            <span class="d">
                            </span>
                            <span class="e">
                            </span>
                        </div>
                        <div class="txt2">
                            <span class="a">
                                DIFF:
                                <i>
                                </i>
                            </span>
                            <span class="b">
                                DEA:
                                <i>
                                </i>
                            </span>
                            <span class="c">
                                MACD:
                                <i>
                                </i>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
            <div class="scroll-bar scroll-bar-v">
                <div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;">
                </div>
            </div>
        </ion-content>
        <div class="trade_bar">
            <section onclick="toggle_history_order_panel()" class="">
                <i class="icon--14 iconfont">
                </i>
                <p>
                    持仓
                    <span ng-show="order_list" class="ng-binding ng-hide" style="">
                        (0)
                    </span>
                </p>
            </section>
            <section onclick="toggle_order_confirm_panel('lookup')" class="">
                <i class="iconfont icon--18">
                </i>
                <p>
                    买涨
                </p>
            </section>
            <section onclick="toggle_order_confirm_panel('lookdown')" class="">
                <i class="iconfont icon--17">
                </i>
                <p>
                    买跌
                </p>
            </section>
        </div>
        <!-- ngInclude: 'templates/order-confirm-panel.html' -->
        <div ng-include="'templates/order-confirm-panel.html'" class="">
            <div class="pro_mengban ">
                <div class="order-confirm-panel">
                    <div class="panel-header">
                        <div>
                            订单确认
                            <div class="close" onclick="toggle_order_close_panel()">
                                <i class="icon ion-ios-close-empty close_tag">
                                </i>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="period">
                            <p class="end_time">
                                到期时间
                            </p>
                            <ion-scroll direction="x" class="scroll-view ionic-scroll scroll-x">
                                <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
                                    <div class="period-widget-view">
                                        <!-- ngRepeat: c in trade.cycle -->
                                        <div class="period-widget  active " data-sen="30" data-shouyi="80">
                                            <div class="period-widget-header">
                                                结算时间
                                            </div>
                                            <div class="period-widget-content">
                                                <span class="final_time ng-binding">
                                                    30
                                                </span>
                                                <span class="final_unit">
                                                    秒
                                                </span>
                                            </div>
                                            <div class="period-widget-footer period_footer ng-binding">
                                                收益 80%
                                            </div>
                                        </div>
                                        <div class="period-widget " data-sen="60" data-shouyi="82">
                                            <div class="period-widget-header">
                                                结算时间
                                            </div>
                                            <div class="period-widget-content">
                                                <span class="final_time ng-binding">
                                                    60
                                                </span>
                                                <span class="final_unit">
                                                    秒
                                                </span>
                                            </div>
                                            <div class="period-widget-footer period_footer ng-binding">
                                                收益 82%
                                            </div>
                                        </div>
                                        <div class="period-widget " data-sen="180" data-shouyi="85">
                                            <div class="period-widget-header">
                                                结算时间
                                            </div>
                                            <div class="period-widget-content">
                                                <span class="final_time ng-binding">
                                                    180
                                                </span>
                                                <span class="final_unit">
                                                    秒
                                                </span>
                                            </div>
                                            <div class="period-widget-footer period_footer ng-binding">
                                                收益 85%
                                            </div>
                                        </div>
                                        <div class="period-widget " data-sen="300" data-shouyi="87">
                                            <div class="period-widget-header">
                                                结算时间
                                            </div>
                                            <div class="period-widget-content">
                                                <span class="final_time ng-binding">
                                                    300
                                                </span>
                                                <span class="final_unit">
                                                    秒
                                                </span>
                                            </div>
                                            <div class="period-widget-footer period_footer ng-binding">
                                                收益 87%
                                            </div>
                                        </div>
                                        <!-- end ngRepeat: c in trade.cycle -->
                                    </div>
                                </div>
                                <div class="scroll-bar scroll-bar-h">
                                    <div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleX(1); width: 289px;">
                                    </div>
                                </div>
                            </ion-scroll>
                        </div>
                        <div class="amount">
                            <p class="invest_account">
                                投资金额
                                <span class=" ng-hide  no-money">
                                    投资金额余额不足，请充值！
                                </span>
                                <span class="ng-hide no-max">
                                    单笔投资金额不超过5000
                                </span>
                                <span class="ng-hide no-min">
                                    单笔投资金额不少于100
                                </span>
                            </p>
                            <ion-scroll direction="x" class="scroll-view ionic-scroll scroll-x">
                                <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
                                    <div class="amount-view">
                                        <div class="amount-box ng-binding  active " data-price="100">
                                            ￥100
                                        </div>
                                        <div class="amount-box ng-binding " data-price="200">
                                            ￥200
                                        </div>
                                        <div class="amount-box ng-binding " data-price="500">
                                            ￥500
                                        </div>
                                        <div class="amount-box ng-binding " data-price="1000">
                                            ￥1000
                                        </div>
                                        <div class="amount-box ng-binding " data-price="2000">
                                            ￥2000
                                        </div>
                                        <div class="amount-box ng-binding " data-price="5000">
                                            ￥5000
                                        </div>
                                    </div>
                                </div>
                                <div class="scroll-bar scroll-bar-h">
                                    <div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleX(1); width: 192px;">
                                    </div>
                                </div>
                            </ion-scroll>
                            <label class="other-amount">
                                <input type="number" placeholder="其他金额" ng-init="onfocus=false" ng-focus="onfocus==true"
                                ng-model="order_params.other_amount" ng-keydown="min_money()" class="ng-pristine ng-untouched ng-valid ng-empty">
                            </label>
                        </div>
                        <div class="info-view">
                            <div class="ng-binding my-money">
                                余额: ￥
                                <span class="pay_mymoney">
                                    300.00
                                </span>
                            </div>
                            <div class="ng-binding">
                                手续费：
                                <span>
                                    2
                                </span>
                                %
                            </div>
                        </div>
                        <div class="order-detail-view">
                            <div class="order-detail">
                                <div class="row fields">
                                    <div class="col">
                                        名称
                                    </div>
                                    <div class="col">
                                        方向
                                    </div>
                                    <div class="col">
                                        现价
                                    </div>
                                    <div class="col">
                                        金额
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col qoute_name ng-binding">
                                        比特币
                                    </div>
                                    <div class="col ng-binding order_type">
                                        买跌
                                    </div>
                                    <div class="col ng-binding rise col-nowprice">
                                        22910.0004
                                    </div>
                                    <div class="col ng-binding" id="money">
                                        ￥100
                                    </div>
                                </div>
                                <div class="row btn_confirm">
                                    <div class="col">
                                        <button class="button" onclick="addorder()">
                                            确认下单
                                        </button>
                                    </div>
                                </div>
                                <p class="expect_profit">
                                    <span class="ng-binding">
                                        预期收益 : ￥
                                        <span id="yuqi">
                                            180.00
                                        </span>
                                    </span>
                                    &nbsp;&nbsp;
                                    <span class="ng-binding">
                                        保底金额 : ￥ 0.00
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ngInclude: 'templates/order-state-panel.html' -->
        <div class="order_mengban">
            <div>
                <div class="order-state-panel">
                    <div class="panel-header">
                        <div class="ng-binding">
                            比特币
                            <div class="close" onclick="close_order()" ">
                            <i class="icon ion-ios-close-empty "></i></div>
                            </div>
                            </div>
                            <div class="panel-body ">
                            <div class="paysuccess ng-hide " ng-show="order_result.status=='SUCCESS' ">
                            <div class="circle_wrapper " ng-show="order_params.cycle.time.indexOf( '-')==- 1 ">
                            <div class="right_circle ">
                            <img class="img_circle_right " style="-webkit-animation: run 60s linear; " src="{{static_url('/index/picture/right_circle1.png')}} "></div>
                            <div class="left_circle ">
                            <img class="img_circle_lift " style="-webkit-animation: runaway 60s linear; " src="{{static_url('/index/picture/left_circle1.png')}} "></div>
                            </div>
                            <div class="row remaining count_remaining " ng-show="order_params.cycle.time.indexOf(
                            '-')==- 1 ">
                            <div class="col ">
                            <div class="ng-binding pay_order_sen "></div>
                            <div>现价</div>
                            <div class="ng-binding newprice "></div></div>
                            </div>
                            <div class="pupil_success ng-hide " ng-show="order_params.cycle.time.indexOf( '-')>
                                = 0">
                                <p>
                                    交易成功，等待结算
                                </p>
                                <p class="ng-binding">
                                    <span>
                                        剩余时间：
                                    </span>
                                    天Invalid Date
                                </p>
                            </div>
                            <div class="row info_list">
                                <div class="col col-15 first_info">
                                    <p>
                                        方向
                                    </p>
                                    <p ng-class="{ 'rise' : order_result.order.direction == '1', 'fall': order_result.order.direction == '0' }"
                                    class="ng-binding pay_order_type">
                                    </p>
                                </div>
                                <div class="col col-30">
                                    <p>
                                        金额
                                    </p>
                                    <p class="ng-binding">
                                        ￥
                                        <span class="pay_order_price">
                                        </span>
                                    </p>
                                </div>
                                <div class="col col-30">
                                    <p>
                                        执行价
                                    </p>
                                    <p class="ng-binding pay_order_buypricee">
                                    </p>
                                </div>
                                <div class="col col-25 last_info">
                                    <p>
                                        预测结果
                                    </p>
                                    <p class="ng-binding yuce">
                                        ￥
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="wait" ng-show="order_result.status == 'POST'">
                            <div class="row">
                                <div class="col ng-binding">
                                    <i class="ion-paper-airplane">
                                    </i>
                                    请稍后……
                                </div>
                            </div>
                        </div>
                        <div class="fail ng-hide" ng-show="order_result.status == 'FAIL'">
                            <div class="row">
                                <div class="col ng-binding">
                                    <i class="ion-close-circled">
                                    </i>
                                    正在提交订单
                                </div>
                            </div>
                        </div>
                        <div class="fail ng-hide order_fail" ng-show="order_result.status == 'FAIL'"
                        style="">
                            <div class="row">
                                <div class="col ng-binding">
                                    <i class="ion-close-circled">
                                    </i>
                                    <span class="fail-info" style="    font-size: 18px;color: #fff;">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="ordersuccess ng-hide" style="">
                            <div class="row remaining finish_remaining">
                                <div class="col">
                                    <div class="result_profit ng-binding " style="">
                                        ￥180
                                    </div>
                                    <div class="expired_statements">
                                        到期结算完成
                                    </div>
                                </div>
                            </div>
                            <div class="row info_list">
                                <div class="col col-15 first_info">
                                    <p>
                                        方向
                                    </p>
                                    <p class="ng-binding pay_order_type">
                                    </p>
                                </div>
                                <div class="col col-30">
                                    <p>
                                        金额
                                    </p>
                                    <p class="ng-binding">
                                        ￥
                                        <span class="pay_order_price">
                                        </span>
                                    </p>
                                </div>
                                <div class="col col-30">
                                    <p>
                                        执行价
                                    </p>
                                    <p class="ng-binding pay_order_buypricee">
                                    </p>
                                </div>
                                <div class="col col-25 last_info">
                                    <p>
                                        成交价
                                    </p>
                                    <p class="ng-binding rise endprice" style="">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row button_row">
                            <div class="col">
                                <button class="button" onclick="continue_order()">
                                    继续下单
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ngInclude: 'templates/history-order-panel.html' -->
        <div class="">
            <div class="history-panel" ng-include="1">
                <div class="panel-header">
                    持仓明细
                    <div class="close" onclick="toggle_history_order_panel()">
                        <i class="icon ion-ios-close-empty">
                        </i>
                    </div>
                </div>
                <div class="trade_history_list">
                    <ion-scroll style="height: 100%" class="scroll-view ionic-scroll scroll-y">
                        <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
                            <ul>
                                <!-- ngRepeat: o in trade_order_list -->
                                <!-- <li ng-repeat="o in trade_order_list" class="">
                                <section>
                                <p style="margin: 0">
                                <span class="ng-binding">欧元/日元</span>
                                <span class="ng-binding in_money"><i class="buytop"></i>买涨（￥100）</span></p>
                                <p style="margin: 0" class="ng-binding">
                                124.434-<span  class="ng-binding in_money">124.429</span></p>
                                <p style="margin: 0" class="ng-binding">2017-06-26 14:46:24</p></section><section>
                                <p style="margin: 0px;" class="ng-binding out_money">-100.00</p>
                                <p style="margin: 0" class="ng-binding">00:04:35</p></section>
                                <article ng-hide="o.remaining === 0" class="">
                                <span class="move_width" style="width: 89.717%; transition-duration: 1s;"></span>
                                <i>
                                <em></em></i>
                                </article>
                                </li> -->
                            </ul>
                            <!-- ngIf: has_more_order -->
                        </div>
                        <div class="scroll-bar scroll-bar-v">
                            <div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;">
                            </div>
                        </div>
                    </ion-scroll>
                </div>
            </div>
        </div>
    </ion-view>
</ion-nav-view>
<div class="backdrop">
</div>
<div class="ionic_toast">
    <div class="toast_section" ng-class="ionicToast.toastClass" ng-style="ionicToast.toastStyle"
    ng-click="hideToast()" style="display: none; opacity: 0;">
        <span class="ionic_toast_close">
            <i class="ion-android-close toast_close_icon">
            </i>
        </span>
        <span ng-bind-html="ionicToast.toastMessage" class="ng-binding">
        </span>
    </div>
</div>
<div class="click-block click-block-hide">
</div>
<div class="modal-backdrop hide">
    <div class="modal-backdrop-bg">
    </div>
    <div class="modal-wrapper" ng-transclude="">
        <ion-modal-view class="order-modal modal slide-in-up ng-leave ng-leave-active">

            <ion-header-bar class="order-modal-header bar bar-header">
                <h1 class="title" style="left: 54px; right: 54px;">
                    资金流水
                </h1>
                <div class="close" ng-click="capital_history_modal_hide()">
                    <i class="icon ion-ios-arrow-left">
                    </i>
                </div>
            </ion-header-bar>

            <ion-content class="person_money_list scroll-content ionic-scroll  has-header">
                <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
                    <ion-scroll style="height:100%" class="scroll-view ionic-scroll scroll-y">
                        <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
                            <ul>
                                <!-- ngRepeat: c in moneyList -->
                            </ul>
                            <!-- ngIf: has_more_money_order.if_has_more_money_order -->
                        </div>
                        <div class="scroll-bar scroll-bar-v">
                            <div class="scroll-bar-indicator scroll-bar-fade-out" style="height: 0px; transform: translate3d(0px, 0px, 0px) scaleY(1); transform-origin: center bottom 0px;">
                            </div>
                        </div>
                    </ion-scroll>
                </div>
                <div class="scroll-bar scroll-bar-v">
                    <div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;">
                    </div>
                </div>
            </ion-content>

            <div class="button-bar">
                <a class="button button-dark" ng-click="capital_history_modal_hide()">
                    关闭
                </a>
            </div>
        </ion-modal-view>    
    </div>

{% endblock %}



{# js content #}
{% block js %}
    <script src="{{static_url('/index/js/chardata.js')}}"></script>
    <script src="{{static_url('/index/js/echarts.js')}}"></script>
    <script src="{{static_url('/index/js/m.js')}}"></script>

    <script type="text/javascript">  
        // setInterval('getdata(12)', 1000);
        // window.setInterval('getMaindata()',2000);
        //setInterval("window.location.reload();",1000*60*5); 
        // socket.on('video', function(msg){
        //     console.log(msg);
        // });
    </script>
{% endblock %}  