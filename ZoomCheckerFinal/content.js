//content.js

// let myWin = chrome.windows.getCurrent();

// chrome.windows.getCurrent(function(w)
// {
//     chrome.tabs.getSelected(w.id, function (response) {
//         alert(response.url);
//     });
//     });

// chrome.tabs.getCurrent(function(tab)
// {
//     console.log(tab.url);
// });

if(document.title.indexOf("zoom") !== -1 && document.title.indexOf("start") !== -1)
{
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    //Appending to DOM
    document.body.appendChild(btn);
}





// alert("Hello from your Chrome extension!  Your window's width is" + myWin.width)
