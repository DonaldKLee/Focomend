if (state=null) {
    localStorage.setItem('noccomend_state', '1')
}
else {
    state = localStorage.getItem('noccomend_state')
}

function status() {
    state = localStorage.getItem('noccomend_state')
    if (state==1) {
        alert("on");
        localStorage.setItem('noccomend_state', '0')
        chrome.tabs.executeScript({
            code: 'state = 1'
        }, function() {
            chrome.tabs.executeScript({file: 'youtube.js'});
        });
    }

    else {
        alert("off");
        localStorage.setItem('noccomend_state', '1')
        chrome.tabs.executeScript({
            code: 'state = 0'
        }, function() {
            chrome.tabs.executeScript({file: 'youtube.js'});
        });
    }

}

document.getElementById('invert_btn').addEventListener('click', status);