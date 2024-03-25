const header = document.querySelector('header');
const navlist = document.querySelector('.navlist');
const menu = document.querySelector('.fa-bars');

window.onscroll = ()=>{
  if(window.scrollY > 100){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll');
  }
}

menu.addEventListener('click',()=>{
  navlist.classList.toggle('show');
  menu.classList.toggle('fa-xmark');
})