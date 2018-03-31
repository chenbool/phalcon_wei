
<html style="font-size: 120px;">
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
<!-- 是否启用全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 全屏时状态颜色设置 -->
<meta name="apple-mobile-web-status-bar-style" content="white">
<!-- 禁用电话号码自动识别 -->
<meta name="format-detection" content="telephone=no">
<!--禁止读取本地缓存模板-->
<meta http-equiv="Pragma" contect="no-cache">

<!-- iPhone 启动图标 -->
<link rel="apple-touch-icon" href="/static/index/logo.png">
<!-- Android 启动图标 -->
<link rel="shortcut icon" href="/static/index/logo.png">

<title>  布尔管理系统 |  商品行情    </title>

<script type="text/javascript">
    window.onload=function(){
        //设置适配rem
        var change_rem = ((window.screen.width > 450) ? 450 : window.screen.width)/375*100;
        document.getElementsByTagName("html")[0].style.fontSize=change_rem+"px";
        window.onresize = function(){
            change_rem = ((window.screen.width > 450) ? 450 : window.screen.width)/375*100;
            document.getElementsByTagName("html")[0].style.fontSize=change_rem+"px";
        }
    }
</script>

<link href="<?= $this->url->getStatic('/index/css/ionic.css') ?>" rel="stylesheet">
<link href="<?= $this->url->getStatic('/index/css/style.css') ?>" rel="stylesheet">
<script src="<?= $this->url->getStatic('/index/js/jquery-1.9.1.min.js') ?>"></script>

<!-- socket  -->
<script src="<?= $this->url->getStatic('/index/js/socket.io.js') ?>"></script>
<script>
  // var socket = io("127.0.0.1:1234");
  var socket = io("192.168.87.1:8000");
</script>

<style type="text/css">
@charset "UTF-8";
[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}
</style>
<style>
.ionic_toast {
  z-index: 9999;
}

.toast_section {
  color: #FFF;
  cursor: default;
  font-size: 1em;
  display: none;
  border-radius: 5px;
  opacity: 1;
  padding: 10px 30px 10px 10px;
  margin: 10px;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.75);
}

.ionic_toast_top {
  top: 10px;
}

.ionic_toast_middle {
  top: 40%;
}

.ionic_toast_bottom {
  bottom: 10px;
}

.ionic_toast_close {
  border-radius: 2px;
  color: #CCCCCC;
  cursor: pointer;
  display: none;
  position: absolute;
  right: 4px;
  top: 4px;
  width: 20px;
  height: 20px;
}

.toast_close_icon {
  position: relative;
  top: 1px;
}

.ionic_toast_sticky .ionic_toast_close {
  display: block;
}

</style>


<!-- 弹框插件 -->
<script src="<?= $this->url->getStatic('/layer/layer.js') ?>"></script>
<!-- 公共函数 -->
<script src="<?= $this->url->getStatic('/index/js/function.js') ?> "></script>


    <style type="text/css">
    </style>


</head>

<body ng-app="starter" ng-controller="AppCtrl" class="grade-a platform-browser platform-win32 platform-ready">

    

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

                                            <?php foreach ($plist as $vo) { ?>        
                                            <!-- -->
                                            <ul onclick="parent.location='<?= $this->url->getStatic('/good/index?id=') ?><?= $vo->id ?>';" id="pid<?= $vo->id ?>">
                                                <li>
                                                    <a href="javascript:;" class="ng-binding prtitle">
                                                        <?= $vo->name ?>
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
                                            <?php } ?>


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


 

</body>
</html>

<script type="text/javascript" src="<?= $this->url->getStatic('/index/js/index.js') ?>"></script>
<script type="text/javascript">
    
    // socket.on('video', function(msg){
    //     console.log(msg);
    // });
</script>
 