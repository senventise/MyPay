# 收款二维码合并  
萌新通道->[😉](https://github.com/senventise/MyPay#给第一次使用-github-的同学的教程)
## 原理
扫描二维码后跳转到此页面，然后根据 UA 判断具体平台。  
支付宝为:AlipayClient  
微信为:MicroMessenger  
然后根据平台进行跳转，支付宝可以直接跳转到收款链接，而微信只能跳转到二维码进行付款。  
同理可以添加其他平台的支付方式。  
## 配置
### 1.更换支付宝收款链接  
保存支付宝收款二维码，使用二维码识别软件进行识别，得到链接。  
**得到的链接是大写的，不要进行任何处理或转换成小写**  
然后将 index.html 中的变量 alipayURL 改为自己的支付宝收款链接。
### 2.更换微信二维码
保存微信收款二维码，放到 static/ 文件中，并命名为 wechat.png  
### 3.设置为 Github Pages
选择 Settings --> GitHub Pages 设置为 Github Pages  
**如果没有通过 ICP 备案的域名建议不要使用自定义域名，会被微信拦截**  
设置成功后得到链接，使用链接生成二维码即可。
  
  
## 给第一次使用 Github 的同学的教程。
**(建议 PC 端浏览器打开，使用手机浏览器的同学请点击页面右下角的"Desktop version"切换到桌面版)**
### 1.注册并登录 Github 帐号
Sign up + Sign in
### 2.Fork
点击页面右上角的 Fork 并等待其完成
### 3.配置
同上
