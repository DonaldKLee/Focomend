productive = ["math 12", "how to", "math video", "learning", "chemistry"];


setInterval(function(){ //Home page
    var home_videos = document.getElementsByClassName("ytd-rich-grid-renderer");
    if (home_videos.length > 0) {
        // elements with that class exist
        for (var i = 0; i < home_videos.length; i++) {
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
                //home_videos[i].style.background = "green";
            }
            else {
                home_videos[i].style.pointerEvents = "none";
                home_videos[i].style.display = "none";
                //home_videos[i].style.filter = "blur(40px)";
            }
        } 
    }
    var side_videos = document.getElementsByClassName("ytd-compact-video-renderer");
    if (side_videos.length > 0) {
        for (var i = 0; i < side_videos.length; i++) {
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
                //side_videos[i].style.background = "green";
            }
            else {
                side_videos[i].style.pointerEvents = "none";
                side_videos[i].style.display = "none";
                //side_videos[i].style.filter = "blur(40px)";
            }
        } 
    }
    var search_videos = document.getElementsByClassName("ytd-item-section-renderer");
    if (search_videos.length > 0) {
        for (var i = 0; i < search_videos.length; i++) {
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
                //search_videos[i].style.background = "green";
            }
            else {
                search_videos[i].style.pointerEvents = "none";
                search_videos[i].style.display = "none";
                //search_videos[i].style.filter = "blur(40px)";
            }
        }
    }
}, 500);