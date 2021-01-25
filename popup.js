status = "off";
function invert() {
    if (status == "off") {
        status = "on";
        chrome.tabs.executeScript({
            file: 'youtube.js'
        }); 
    }
    else {
        status = "off";
        chrome.tabs.executeScript({
            file: ''
        });    
    }
}

document.getElementById('invert_btn').addEventListener('click', invert);