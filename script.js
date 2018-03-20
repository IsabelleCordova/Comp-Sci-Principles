//$(document).ready(function(){
//alert("script.js is working!");
//});

//this is a comment in JS

/*
	this is also a comment in JS
*/

const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;
//var paddingTop = '3';

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);

