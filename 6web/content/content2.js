console.log("content2");
setTimeout(async ()=>{
    var res=await chrome.runtime.sendMessage({text:"张三"});
    console.log("返回值：",res);
    alert("处理后返回值："+res);
},3000)