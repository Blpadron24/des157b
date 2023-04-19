(function(){
    "use strict";
    
    const fs = document.querySelector(".fa-expand");
    const myVideo = document.querySelector('#myVideo');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');

    const poem = {
        start: [1,4,8,12],
        stop:[4,8,12,16],
        line: [line1, line2, line3, line4,]
    }
   

    fs.addEventListener('click', function(){
        console.log('fs has been clicked');
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
    
        } else {
            document.exitFullscreen();
        }
    })
    const intervalID = setInterval(checkTime, 1000);
            
    function checkTime() {
        console.log(parseInt(myVideo.currentTime));

       

        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        }

    }
    
    document.addEventListener("mousemove", function(event) {
        var y = event.clientY;
        var windowHeight = window.innerHeight;
        if (y < windowHeight / 2) {
            document.getElementById("myDiv").classList.add("overlay1");
            document.getElementById("myDiv").classList.remove("overlay2");
        } else {
            document.getElementById("myDiv").classList.add("overlay2");
            document.getElementById("myDiv").classList.remove("overlay1");
        }
    });

    
    
    
    })();