var btn = document.getElementById('lightbtn');
var light = document.getElementById('light');
var on = false;
var switche = document.getElementById('buttonid');
btn.onclick = function () {
    if (!on) {
        light.style.opacity = '100';
        on = true;
        switche.style.marginLeft ='32px';
        btn.style.backgroundColor = '#00986f';
        switche.style.backgroundColor = '#fff';
    }
    else {
        on = false;
        light.style.opacity = '0';
        switche.style.marginLeft ='2px';
        btn.style.backgroundColor = '#fff';
        switche.style.backgroundColor = '#999';
        console.log("off");
    }
}