export {}
console.log('脚本')
const INJECT_ELEMENT_ID = 'ajaxInterceptor'

const script = document.createElement('script')
script.setAttribute('type', 'module')
script.setAttribute('src', chrome.runtime.getURL('interceptor.js'))
document.documentElement.appendChild(script)

const input = document.createElement('input')
input.setAttribute('id', INJECT_ELEMENT_ID)
input.setAttribute('style', 'display:none')
document.documentElement.appendChild(input)
console.log('脚本执行完成')
