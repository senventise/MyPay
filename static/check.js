//判断是否是非法访问
wechat = "MicroMessenger";
alipay = "AlipayClient";
qqBrowser = "MQQBrowser"
userAgent = navigator.userAgent;

if (userAgent.indexOf(wechat)==-1 && userAgent.indexOf(alipay)==-1 && userAgent.indexOf(qqBrowser)==-1){
  window.location.href = "/index.html"
}
