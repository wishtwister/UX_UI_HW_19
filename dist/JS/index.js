console.log("Your index.js file is loaded correctly!");

$(".dot").on("mouseover",function(){
  console.log("You hovered on .dot");

});

$(".dot1").on("mouseover",function(){
  console.log("You hovered  on .dot1");

});

$(".dot2").on("mouseover",function(){
  console.log("You hovered  on .dot2");

});
//dot
const dot = document.querySelector('.dot');
dot.onmouseover = logMouseOver;
dot.onmouseout = logMouseOut;

function logMouseOver (){
 this.classList.add('tab-border')
}
function logMouseOut() {
  this.classList.remove('tab-border')
}

//dot1
const dot1 = document.querySelector('.dot1');
dot1.onmouseover = logMouseOver1;
dot1.onmouseout = logMouseOut1;

function logMouseOver1 (){
 this.classList.add('tab-border1')
}
function logMouseOut1() {
  this.classList.remove('tab-border1')
}

//dot2
const dot2 = document.querySelector('.dot2');
dot2.onmouseover = logMouseOver2;
dot2.onmouseout = logMouseOut2;

function logMouseOver2 (){
 this.classList.add('tab-border2')
}
function logMouseOut2() {
  this.classList.remove('tab-border2')
}