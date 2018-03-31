{% extends "layouts/_base.volt" %}

{% block title %} 商品行情 {% endblock %}

{% block head %}
    <style type="text/css">
    </style>
{% endblock %}

{# main content #}
{% block content %}

    <ion-nav-bar class="bar-stable headerbar nav-bar-container" nav-bar-transition="ios"
    nav-bar-direction="none" nav-swipe="">
        <div class="nav-bar-block" nav-bar="cached">
            <ion-header-bar class="bar-stable headerbar bar bar-header" align-title="center">
                <div class="title title-center header-item" style="transition-duration: 0ms; transform: translate3d(-176.414px, 0px, 0px); opacity: 0;">
                    商品行情
                </div>
                <div class="buttons buttons-right" style="transition-duration: 0ms; opacity: 0;">
                </div>
            </ion-header-bar>
        </div>
        <div class="nav-bar-block" nav-bar="active">
            <ion-header-bar class="bar-stable headerbar bar bar-header" align-title="center">
                <div class="buttons buttons-left" style="transition-duration: 0ms;">
                </div>
                <div class="title title-center header-item" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                    商品行情
                </div>
            </ion-header-bar>
        </div>
    </ion-nav-bar>

    <ion-nav-view class="view-container" nav-view-transition="ios" nav-view-direction="enter" nav-swipe="">
        <ion-tabs class="tabs-icon-top navbar pane tabs-bottom tabs-standard" abstract="true" nav-view="active" style="opacity: 1; transform: translate3d(0%, 0px, 0px);">
            <div class="tab-nav tabs">

                <ion-tab href="#/tab/qoute" class="iconfont icon--6 tabnone"></ion-tab>
                <ion-tab href="#/tab/history/0" class="iconfont icon--7 tabnone"></ion-tab>
                <ion-tab href="#/tab/profile" class="iconfont icon--8 tabnone"></ion-tab>

                <a href="/index/index/index.html" class="iconfont icon--6 tabnone tab-item tab-item-active" style="">
                    <span class="tab-title ng-binding">商品行情</span>
                </a>
                <a href="/index/order/hold.html" class="iconfont icon--7 tabnone tab-item" style="">
                    <span class="tab-title ng-binding">交易记录</span>
                </a>
                <a href="/index/user/index.html" class="iconfont icon--8 tabnone tab-item" style="">
                    <span class="tab-title ng-binding">个人账户</span>
                </a>
            </div>

    <ion-nav-view name="tab-qoute" class="view-container tab-content" nav-view="active"
    nav-view-transition="ios" nav-view-direction="none" nav-swipe="">
        <ion-view view-title="商品行情" hide-nav-bar="false" class="pane" state="tab.qoute"
        nav-view="active" style="opacity: 1; transform: translate3d(0%, 0px, 0px);">
            <ion-content style="top: 0px;" class="content-background scroll-content ionic-scroll scroll-content-false  has-header has-tabs"
            scroll="false">
                <div class="slide-qoute slider" delegate-handle="slide-qoute" on-slide-changed="slide_change($index)"
                show-pager="false" style="visibility: visible;">
                    <div class="slider-slides" ng-transclude="" style="width: 100%;">
                        <!-- ngRepeat: c in category_list -->
                        <ion-slide ng-repeat="c in category_list" class="slider-slide" data-index="0"
                        style="width: 100%; left: 0px; transition-duration: 300ms; transform: translate(0px, 0px) translateZ(0px);">
                            <div class="qoute-view">
                                <div class="qoute-view-header">
                                    <ul>
                                        <li>商品名称</li>
                                        <li>现价</li>
                                        <li> 最低</li>
                                        <li>最高</li>
                                    </ul>
                                </div>
                                <div class="qoute-view-content">
                                    <ion-scroll class="scroll-view ionic-scroll scroll-y">
                                        <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">

                                            {% for vo in plist %}        
                                            <!-- -->
                                            <ul onclick="parent.location='{{static_url('/good/index?id=')}}{{vo.id}}';" id="pid{{vo.id}}">
                                                <li>
                                                    <a href="javascript:;" class="ng-binding prtitle">
                                                        {{vo.name}}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;" class="ng-binding rise-value now-value">
                                                        --.--
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;" class="ng-binding rise rise-low">
                                                        --.--
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;" class="ng-binding rise rise-high">
                                                        --.--
                                                    </a>
                                                </li>
                                            </ul>
                                            <!-- -->
                                            {% endfor  %}


                                        </div>
                                        <div class="scroll-bar scroll-bar-v">
                                            <div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;">
                                            </div>
                                        </div>
                                    </ion-scroll>
                                </div>
                            </div>
                        </ion-slide>
                    </div>
                </div>
            </ion-content>
        </ion-view>
    </ion-nav-view>
    </ion-tabs>
    </ion-nav-view>


{% endblock %}



{# js content #}
{% block js %}
<script type="text/javascript" src="{{static_url('/index/js/index.js')}}"></script>
<script type="text/javascript">
    
    // socket.on('video', function(msg){
    //     console.log(msg);
    // });
</script>
{% endblock %}  