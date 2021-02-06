productive = ["math 12", "how to", "math video", "learning", "chemistry"];

function hide_videos(){ //Home page
    var home_videos = document.getElementsByClassName("ytd-rich-grid-renderer");
    var side_videos = document.getElementsByClassName("ytd-compact-video-renderer");
    var search_videos = document.getElementsByClassName("ytd-item-section-renderer");
    
    if (undo=="no") {
        if (home_videos.length > 0) {
            // elements with that class exist
            for (var i = 0; i < home_videos.length; i++) {
                home_videos[i].style.pointerEvents = "none"; //Makes video non clickable (Until it is determined that it has a keyword)
                for (var words = 0; words < productive.length; words++) {
                    if (home_videos[i].innerHTML.indexOf(productive[words]) > -1) {
                        productivity = true;
                        break
                    }
                    else {
                        productivity = false;
                    }
                }
        
                if (productivity == true) {
                    home_videos[i].style.pointerEvents = "auto";
                }
                else {
                    home_videos[i].style.display = "none";
                }
            } 
        }
        if (side_videos.length > 0) {
            for (var i = 0; i < side_videos.length; i++) {
                side_videos[i].style.pointerEvents = "none"; //Makes video non clickable (Until it is determined that it has a keyword)
                for (var words = 0; words < productive.length; words++) {
                    if (side_videos[i].innerHTML.indexOf(productive[words]) > -1) {
                        productivity = true;
                        break
                    }
                    else {
                        productivity = false;
                    }
                }

                if (productivity == true) {
                    side_videos[i].style.pointerEvents = "auto";
                }
                else {
                    side_videos[i].style.display = "none";
                }
            } 
        }
        if (search_videos.length > 0) {
            for (var i = 0; i < search_videos.length; i++) {
                search_videos[i].style.pointerEvents = "none";
                for (var words = 0; words < productive.length; words++) {
                    if (search_videos[i].innerHTML.indexOf(productive[words]) > -1) {
                        productivity = true;
                        break
                    }
                    else {
                        productivity = false;
                    }
                }

                if (productivity == true) {
                    search_videos[i].style.pointerEvents = "auto";
                }
                else {
                    search_videos[i].style.display = "none";
                }
            }
        }
    }
}


function undo() {
    var home_videos = document.getElementsByClassName("ytd-rich-grid-renderer");
    var side_videos = document.getElementsByClassName("ytd-compact-video-renderer");
    var search_videos = document.getElementsByClassName("ytd-item-section-renderer");
    if (home_videos.length > 0) {
        // elements with that class exist
        for (var i = 0; i < home_videos.length; i++) {
            home_videos[i].style.pointerEvents = "auto";
            home_videos[i].style.display = "";
            }
    }
    if (side_videos.length > 0) {
        for (var i = 0; i < side_videos.length; i++) {
            side_videos[i].style.pointerEvents = "auto";
            side_videos[i].style.display = "block";
        } 
    }
    if (search_videos.length > 0) {
        for (var i = 0; i < search_videos.length; i++) {
            search_videos[i].style.pointerEvents = "auto";
            search_videos[i].style.display = "block";
        }
    }
}

if (state==1) {
    var state=1;
}
else if (state==0) {
    var state=0;
}
else {
    state = localStorage.getItem('noccomend_state')
}

if (state==0) { //Hide videos
    localStorage.setItem('noccomend_state', '0')
    var undo = "no";
    var hide_video_var = setInterval(hide_videos, 1000);
}

else { //Do not hide videos
    localStorage.setItem('noccomend_state', '1')
    undo();
    var undo = "yes";
    clearInterval(hide_video_var);
}