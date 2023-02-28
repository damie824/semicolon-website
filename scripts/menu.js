const menu = document.getElementById('menu')
const closr = document.getElementById('close');
const openr = document.getElementById("open");
let isClose = 0;

window.onload = function () {
    openr.onclick = menuOpen;
    closr.onclick = menuClose;
}


function menuOpen() {
    menu.style.right = '0px';
    closr.style.right = '0px';
    isClose = 0;
}

function menuClose() {
    isClose = 1;
}

function menuObserver() {
    if(isClose==1){
        if(document.documentElement.clientWidth > 768){
            menu.style.right = '-500px';
            closr.style.right = '420px';
        }
        else {
            menu.style.right = '-100vw';
            closr.style.right = '0px';
        }
    }
}

setInterval(menuObserver, 10)