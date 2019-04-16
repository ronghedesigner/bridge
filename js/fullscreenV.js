var video = document.getElementById("covervideo");
var $win = $(window);
var winW = $win.width();
var winH = $win.height();
var winScale = winW / winH;
var videoScale;

function adjustVideo() {
    if (winScale < videoScale) {
        $("#covervideo").css({
            "width": winH * videoScale,
            "height": winH
        });
    } else {
        $("#covervideo").css({
            "width": winW,
            "height": winW / videoScale
        });
    }
}
window.addEventListener("load", function () {
    var w = video.videoWidth;
    var h = video.videoHeight;
    videoScale = w / h;
    adjustVideo();

})

window.addEventListener("resize", function () {
    winW = $win.width();
    winH = $win.height();
    winScale = winW / winH;
    adjustVideo();

})