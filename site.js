const navlinks=document.querySelectorAll(".menu .item-link");
const openMenu=document.querySelector("#open-button");
openMenu.addEventListener("click",()=>{
   document.body.classList.toggle("show-menu");
});
const closeMenu=document.querySelector('#close-button');
closeMenu.addEventListener('click',()=>{openMenu.click()
});
navlinks.forEach((link)=>{link.addEventListener(('click'),()=>{openMenu.click()})});
const swiper = new Swiper('.slider-wraper', {
   loop: true,
   grabCursor:true,
   spaceBetween:25,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   breakpoints:{
      0:{
         slidesPerView:1
      },
      768: {
         slidesPerView:2
      },
      1024: {
         slidesPerView:3
      }
   }
 });