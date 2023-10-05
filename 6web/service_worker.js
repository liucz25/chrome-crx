chrome.tabs.onCreated.addListener(
     (e)=>{
        console.log(e);
    }
)
chrome.runtime.onMessage.addListener(async(msg,sender,sendResponse)=>{
    console.log('msg:',msg,"from:",sender);
    res="hello "+msg.text;
    console.log(res)
    sendResponse(res);
    })