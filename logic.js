var kc = document.querySelector("#keyCode");
var k = document.querySelector("#key");
var c = document.querySelector("#code");

window.addEventListener("keypress", function(e) {
  kc.textContent = e.keyCode;
  k.textContent = e.key;
  console.log(e.key);
  c.textContent = e.code;
  
}, false);