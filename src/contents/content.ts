export { }
console.log('脚本')
const INJECT_ELEMENT_ID = 'ajaxInterceptor'
let tabId = 0

// chrome.runtime.onMessage.addListener(function (response, sendResponse) {
//   console.log(response);
//   tabId = response
// });
// chrome.scripting.executeScript({
//   target: { tabId: tabId },
//   files: ['interceptor.js']
// });
// content-script.js

// 监听来自 background 的消息
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log(message);
//   // 发送回复消息
//   // chrome.runtime.sendMessage({ greeting: "Hello, background script!" });
// });
const script = document.createElement('script')
script.setAttribute('type', 'module')
script.setAttribute('src', chrome.runtime.getURL('interceptor.js'))
document.documentElement.appendChild(script)
console.log('脚本执行完成')
