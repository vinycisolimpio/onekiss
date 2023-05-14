var nao = document.getElementById("nao");
nao.addEventListener("click", function() {
    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);
    nao.style.position = "absolute";
    nao.style.top = randomY + "px";
    nao.style.left = randomX + "px";
});

var sim = document.getElementById("sim");
sim.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=skVg5FlVKS0";
});
var aqui = document.getElementById("aqui");
aqui.addEventListener("click", function() {
    window.location.href = "https://youtu.be/u08RiMbw2JY";
});