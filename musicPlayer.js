document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;
var player2;

function startplayer(){
    player = document.getElementById('musicPlayer');
    player.controls = false;
    player2 = document.getElementById('musicPlayer2');
    player2.controls = false;
}

function play_aud(){
    player.play();
    player2.pause();
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


function play_aud2(){
    player2.play();
    player.pause();
}
function pause_aud2(){
    player2.pause();
}
function stop_aud2(){
    player2.pause();
    player2.currentTime = 0;
}
function changeVol2(){
    player2.volume = document.getElementById("changeVol2").value;
}