const menuIcon = document.getElementById('menu-icon');
console.log(menuIcon)
const navBar = document.querySelector('#navBar');
console.log(navBar)

menuIcon.addEventListener('click', ()=>{
  if(navBar.classList.contains('large-screen__nav')){
    menuIcon.classList.toggle('bx-x');
    navBar.classList.replace('large-screen__nav',  'small-screen__nav-menu');
    
  }else {
    navBar.classList.replace('small-screen__nav-menu', 'large-screen__nav');
  }

})