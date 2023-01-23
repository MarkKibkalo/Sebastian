
const menu = document.querySelector('.menu-list')

const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function(){
   console.log('click');

   if (hamburger.classList.toggle('active'));
   if (menu.classList.toggle('hidden'));

})