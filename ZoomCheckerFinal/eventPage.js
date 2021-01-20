// chrome.windows.getCurrent(function(w)
// {
//     alert("width2 is "+w.width);
// });
let meetingWindow = undefined;
let onceOnly = 0;
let sizeSet = "deny";
let questionInput = undefined;
let timeInput = undefined;
let alertQuestion = "placeholder";


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        // if(tab.url.indexOf("zoom.us") !== -1 && (tab.url.indexOf("start") !== -1 || tab.url.indexOf("join") !== -1))
        if(tab.url.indexOf("zoom.us") !== -1 && tab.url.indexOf("start") !== -1)
        {

            const winName = "we";
            const tabID = tab.id;
            //const winID = window.id;

            //https://rochester.zoom.us/
            if(onceOnly === 0) {
                onceOnly = 1;
                chrome.windows.create({tabId: tabID, left: 0, width: screen.width, height: screen.height, focused: true, type: "normal"})
            }

            chrome.windows.getCurrent(function(currentWin) {
                meetingWindow = currentWin.id;
            })

            chrome.tabs.onActivated.addListener(function(activeInfo) {
                if (tab.url.indexOf("leave") !== -1)
                {
                    return;
                }
                else
                if(tab.url.indexOf("start") === -1)
                {
                    return;
                }
                else
                {
                    chrome.tabs.update(tabID, {active: true});
                }

                    if(sizeSet === "accept")
                    {

                        chrome.windows.onFocusChanged.addListener(function () {
                            chrome.windows.update(meetingWindow, {
                                // width: screen.width,
                                // height: screen.height,
                                focused: true
                            });
                        });

                        chrome.windows.onBoundsChanged.addListener(function () {
                            if(sizeSet === "accept") {
                                chrome.windows.update(meetingWindow, {
                                    left: 0,
                                    width: screen.width,
                                    height: screen.height
                                })
                            }
                        });
                    }



            })
            // ,
            //  chrome.windows.onFocusedChanged.addListener(function()
            //  {
            //      chrome.windows.update(winID, {focused: true});
            //  })
            //chrome.windows.update(winID, {focused: true});
        }
        //alert("width is "+tab.width);)
    }
})



    // chrome.runtime.onMessage.addListener((request, sender, response) => {
    //     //if(sessionStorage.getItem("accept") === true)
    //     if(request.greeting === "accepted")
    //     {
    //         sizeSet = "accept";
    //     }
    //     //else if(sessionStorage.getItem("deny") === true)
    //     else if(request.greeting === "denied")
    //     {
    //         sizeSet = "deny";
    //     }
    // });

    chrome.runtime.onMessage.addListener(function(request, sender) {
    //if(!message.myPopupIsOpen)
        if(request.accepted)
        {
            sizeSet = "accept";
            alert("max size turned on");
        }
        else if(request.denied)
        {
            sizeSet = "deny";
            alert("max size turned off");

        }
        else if(request.greeting)
        {
            //alertQuestion = request.greeting;
            alert("What is the Third Law of Motion?");
            //alert(request.greeting);
        }
        if(request.millisUntilAlert)
        {
            //alert("" + request.millisUntilAlert);
            //setTimeout(function(){ alert(alertQuestion) }, 3000);
        }
        //else
        // {
        //     alert("no time")
        // }
    //alert("hello");
    });


// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//     yesOrNo = msg;
//     //alert(yesOrNo)
// });

// function setWindowSize(acceptOrDeny)
// {
//     if(acceptOrDeny === "accept")
//     {
//         sizeSet = "accept";
//     }
// }

//
// let al = document.addEventListener('DOMContentLoaded', function () {
//     if(al)
//     {
//         let el = document.querySelector('#accept').addEventListener('change', changeHandler);
//     }
// });
// function changeHandler() {
// if(el)
// {
//     if (accept.checked) {
//         // chrome.tabs.executeScript({
//         //     file : 'button_show.js'
//         // });
//         sizeSet = "accept";
//         alert("accept");
//     } else {
//         // chrome.tabs.executeScript({
//         //     file : 'button_hide.js'
//         // });
//         sizeSet = "deny";
//     }
//     }
// }



// document.getElementById("buttonSize").addEventListener("click", function() {
//    // document.getElementById("demo").innerHTML = "Hello World";
//
// });
//
// document.getElementById("setQuestion").addEventListener("click", function() {
//
// });
//<button onclick="setTimeout(myFunction, 3000);">Set question and popup time</button>


// function sendText() {
//     let message = userinput.value();
//     chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, message);
//     });
// }

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
});
