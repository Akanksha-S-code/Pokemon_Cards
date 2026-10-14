var main = document.getElementById("main");
let arr = ["pict-1.jpeg","pict-2.jpeg","pict-3.jpeg","pict-4.jpeg","pict-5.jpeg","pict-6.jpeg","pict-7.jpeg"];
var s = ""
for(i=0;i<=64;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`
};
main.innerHTML = s;
