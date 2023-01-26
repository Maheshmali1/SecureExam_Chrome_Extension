

// function to start the exam prerequisites checking using button press from user side.
// make the full screen and make further background checks.

var checkBtn = document.querySelector('button');
checkBtn.addEventListener("click", async () =>{
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    fullScreen(tab);
    
})


// function to restrict user from switching b/w multiple tabs.

chrome.tabs.onActivated.addListener(function() { 
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.scripting.executeScript({
            target:{tabId : tab.id},
            function: ()=>{alert("Don't switch between tabs.")}
        });
        
    })
});
    


function fullScreen(tab) {
    chrome.windows.update(tab.windowId,
        {
            state: "fullscreen"
        })
}

