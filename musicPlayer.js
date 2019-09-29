document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;
var player2;
var player3;

function startplayer(){
    player = document.getElementById('musicPlayer');
    player.controls = false;
    player2 = document.getElementById('musicPlayer2');
    player2.controls = false;
    player3 = document.getElementById('musicPlayer3');
    player3.controls = false;
}

function play_aud(){
    player.play();
    player2.pause();
    player3.pause();
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
    player3.pause();
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


function play_aud3(){
    player3.play();
    player.pause();
    player2.pause();
}
function pause_aud3(){
    player3.pause();
}
function stop_aud3(){
    player3.pause();
    player3.currentTime = 0;
}
function changeVol3(){
    player3.volume = document.getElementById("changeVol3").value;
}
