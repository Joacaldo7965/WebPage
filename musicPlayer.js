document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

function startplayer(){
    player = document.getElementById('musicPlayer');
    player.controls = false;
}

function play_aud(){
    player.play();
}
function pause_aud(){
    player.pause();
}
function stop_aud(){
    player.pause();
    player.currentTime = 0;
}
function changeVol(){
    player.volume = document.getElementById("changeVol").value;
}