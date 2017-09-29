document.getElementById("open").addEventListener("click", function () {
    document.getElementById("control").style.left = "0px";
    
    
});
document.getElementById("bg1").addEventListener("click", function () {
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/Forbidden_Gate_Stage.png)";
});
document.getElementById("bg2").addEventListener("click", function () {
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/Gigant_Take-Mikazuchi.png)";
});
document.getElementById("bg3").addEventListener("click", function () {
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/Orient_Town_Stage.png)";
});
document.getElementById("bg4").addEventListener("click", function () {
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/The_Gate_Not_Possible_Stage.png)";
});

document.getElementById("closed").addEventListener("click", function () {
    document.getElementById("control").style.left = "-200px";
    
});