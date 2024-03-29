if (state=null) {
    localStorage.setItem('focomend_state', '1')
}
else {
    state = localStorage.getItem('focomend_state')
    if (state==0) {
        document.getElementById("trigger").innerHTML = "Allow recommendations!"
    }
    else if (state==1) {
        document.getElementById("trigger").innerHTML = "Hide recommendations!"
    }
}

function status() {
    state = localStorage.getItem('focomend_state')
    if (state==1) {
        localStorage.setItem('focomend_state', '0')
        document.getElementById("trigger").innerHTML = "Allow recommendations!"
        chrome.tabs.executeScript({
            code: 'state = 0'
        }, function() {
            chrome.tabs.executeScript({file: 'youtube.js'});
        });
    }
    else {
        localStorage.setItem('focomend_state', '1')
        document.getElementById("trigger").innerHTML = "Hide recommendations!"
        chrome.tabs.executeScript({
            code: 'state = 1'
        }, function() {
            chrome.tabs.executeScript({file: 'youtube.js'});
        });
    }
}

document.getElementById('trigger').addEventListener('click', status);