let dec = document.getElementById("decrease");
let res = document.getElementById("reset");
let inc = document.getElementById("increase");
let val = document.getElementById("count");
var num = 0;

dec.onclick = function(){
    num = num - 1
    val.innerText = `${num}`;
}

res.onclick = function(){
    num = 0
    val.innerText = `${num}`;
}

inc.onclick = function(){
    num = num + 1
    val.innerText = `${num}`;
}