a:9:{i:0;s:765:"
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

<title>  布尔管理系统 | ";s:5:"title";N;i:1;s:2287:"   </title>

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

";s:4:"head";N;i:2;s:133:"

</head>

<body ng-app="starter" ng-controller="AppCtrl" class="grade-a platform-browser platform-win32 platform-ready">

    ";s:7:"content";N;i:3;s:23:" 

</body>
</html>
";s:2:"js";a:1:{i:0;a:4:{s:4:"type";i:357;s:5:"value";s:2:"
";s:4:"file";s:40:"../app/frontend/views/layouts/_base.volt";s:4:"line";i:123;}}i:4;s:1:" ";}