let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
search.classList.toggle('active');
cart.classList.remove('active');
user.classList.remove('active');
}
let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () =>{
cart.classList.toggle('active');
search.classList.remove('active');
user.classList.remove('active');
}
let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
user.classList.toggle('active');
search.classList.remove('active');
cart.classList.remove('active');
}


var MainImg = document.getElementById("MainImg");
var smallImages = document.getElementsByClassName("small-img-col");
smallImages[0].onclick = function(){
MainImg.src = smallImages[0].getElementsByTagName('img')[0].src;
}
smallImages[1].onclick = function(){
MainImg.src = smallImages[1].getElementsByTagName('img')[0].src;
}
smallImages[2].onclick = function(){
MainImg.src = smallImages[2].getElementsByTagName('img')[0].src;
}
smallImages[3].onclick = function(){
MainImg.src = smallImages[3].getElementsByTagName('img')[0].src;
}