var tabs
document.getElementById("btn_add").addEventListener('click', async function () {
    console.log("ok");
    tabs = await chrome.tabs.create({ url: "https://www.baidu.com", active: false })
})
document.getElementById("btn_cls").addEventListener('click', async function () {
    console.log("close button cilcked");
    if (tabs) {
        await chrome.tabs.remove(tabs.id);
    }
})
