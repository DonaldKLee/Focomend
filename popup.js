function invert() {
        chrome.tabs.executeScript({
            file: 'youtube.js'
        }); 
}

document.getElementById('invert_btn').addEventListener('click', invert);