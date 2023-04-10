const injectScriptModlue = (url) => {
  // let script = document.createElement('script');
  // script.type = "module";
  // script.src = url;
  // const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
  // head.insertBefore(script, head.lastChild);
  //
  const script = document.createElement('script')
  script.setAttribute('type', 'module')
  script.setAttribute('src', chrome.runtime.getURL('interceptor.js'))
  document.documentElement.appendChild(script)
}


// chrome.scripting.executeScript({
//   target: {
//     tabId: tabId // 指定傳入tab 頁
//   },
//   func: injectScriptModlue, // 注入func
//   args: [chrome.runtime.getURL('main.js')] // 傳遞參數
// }, () => { });
// background.js
chrome.tabs.query({}, (tabs) => {
  console.log('tabs', tabs)
  const tabId = tabs.find(v => v.url === 'http://localhost:9528/#/dashboard').id;

  console.log('tabId', tabId)
  chrome.scripting.executeScript({
    target: {
      tabId: tabId // 指定傳入tab 頁
    },
    func: injectScriptModlue, // 注入func
    args: [chrome.runtime.getURL('interceptor.js')] // 傳遞參數
  }, () => { });
  // 在此处执行您的代码，使用获取的tabId
  // chrome.scripting.executeScript({
  //   target: { tabId: tabId },
  //   files: ['interceptor.js'],

  //   // func: () => {
  //   //   console.log('注入了脚本')
  //   //   chrome.runtime.sendMessage({ greeting: "Hello, content script!" });
  //   // }
  // }, () => {
  //   if (chrome.runtime.lastError) {
  //     console.error(chrome.runtime.lastError.message);
  //   } else {
  //     console.log('Script executed successfully');
  //   };
  // }
  // );
  // 监听来自内容脚本或 popup 页面的消息
  // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  //   console.log('message',message)
  //   if (message.tabId||message.tabId===0) {
  //     console.log('21221',21221)
  //     // 接收到消息时，使用 chrome.tabs.executeScript 在指定的选项卡中注入脚本
  //     chrome.scripting.executeScript({
  //       target: { tabId: message.tabId },
  //       files: ['interceptor.js']
  //     });
  //   }

  //   // 返回 true 表示异步消息处理未完成，保持连接打开
  //   return true;
  // });
});
