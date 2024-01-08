let vd = document.getElementById('vid');
let ply = document.getElementById('playButton');
let stp = document.getElementById('stopButton');
let edvid = document.getElementById('endvideo');
let stvido = document.getElementById('startvideo');
let mr5 = document.getElementById('more5');
let ls5 = document.getElementById('less5');
let muted = document.getElementById('mut');
let speed = document.getElementById('sped');
let volumeRange = document.getElementById('rang');
let toggleButton = document.getElementById('toggleFullscreen');

ply.onclick = function(){
    vd.play();
};

stp.onclick = function(){
    vd.pause();
};

stvido.onclick = function(){
    vd.currentTime = 0;
    vd.play();
};

edvid.onclick = function(){
    vd.currentTime = 120;
    vd.play();
};

mr5.onclick = function(){
    vd.currentTime += 5;
    vd.play();
};

ls5.onclick = function(){
    vd.currentTime -= 5;
    vd.play();
};

muted.onclick = function(){
    vd.muted = !vd.muted;
};

speed.addEventListener('input' , function(){
    vd.playbackRate = speed.value;
});

volumeRange.addEventListener('input' , function(){
    vd.volume = volumeRange.value;
});

toggleButton.addEventListener('click', function () {
    if (vd.requestFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            vd.requestFullscreen().catch(err => {
                console.error('Fullscreen request failed:', err);
            });
        }
    }
});

document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
        toggleButton.innerText = 'Exit Fullscreen';
        vd.controls = false;
    } else {
        toggleButton.innerText = 'Fullscreen';
        vd.controls = false; 
    }
});