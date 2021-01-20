// (function()
// {
//     document.addEventListener('DOMContentLoaded', function () {
//         var btn = document.getElementById('sizeButton');
//         btn.addEventListener('click', function() {
//             if(document.getElementById("accept").checked === true)
//             {
//                 chrome.runtime.sendMessage({greeting: "accepted"}, function(response)
//                 {
//
//                 })
//             }
//             else if(document.getElementById("deny").checked === true) {
//                 chrome.runtime.sendMessage({greeting: "denied"}, function (response)
//                 {
//
//                 })
//             }
//             // var accepted = document.getElementById("accept").checked;
//             // var denied = document.getElementById("denied").checked;
//             // sessionStorage.setItem("acceptChecked", accepted);
//             // sessionStorage.setItem("denyCheck", denied);
//             //alert("button clicked");
//
//         });
//     });
//
//
//
//
//     // var otherWindows = chrome.runtime.getBackgroundPage();
//     // otherWindows.questionInput =
//     // var question = otherWindows.questionInput;
//     // var time = otherWindows.timeInput;
//     // otherWindows.questionAlert(question, time);
//
// })


var siz = document.getElementById("sizeButton");
if(siz)
{
document.getElementById("sizeButton").addEventListener("click", function() {
    var acceptMessage = document.getElementById("acceptButton").checked;
    var denyMessage = document.getElementById("denyButton").checked;
    if(acceptMessage === true) {
        chrome.runtime.sendMessage({'accepted': true});
    }
    else
    if(denyMessage === true) {
        {
            chrome.runtime.sendMessage({'denied': true});
        }
    }
});
}

var quest = document.getElementById("questionButton")
if(quest)
{
    document.getElementById("questionButton").addEventListener("click", function() {
        var questionMessage = document.getElementById("questionBlock").innerHTML;
         chrome.runtime.sendMessage({greeting: questionMessage});
        //chrome.runtime.sendMessage({millisUntilAlert: 5000, greeting: questionMessage})

        // var time = document.getElementById("timeBlock").innerHTML;
        // var date = new Date();
        // var currHour = date.getHours(); //current hour
        // var currMinute = date.getMinutes();
        // const inputHour = Number(time.split(':')[0]); //hour desired
        // const inputMinutes = Number(time.split(':')[1]); //minute desired
        // const alertHour = inputHour - currHour;
        // const alertTime   = (inputHour* 3600000) + (inputMinutes * 60000)
        // const currentTime = (currHour * 3600000) + (currMinute   * 60000)
        // const millisTillAlert = alertTime - currentTime;
        // chrome.runtime.sendMessage({millisUntilAlert: millisTillAlert, greeting: questionMessage})
    });
}