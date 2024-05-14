
var theme = document.getElementById('theme');
var body= document.querySelector('body');
var bg =localStorage.getItem('theme');

if(bg=='dark'){
   body.classList.toggle('dark');
}

theme.addEventListener('click',function(){
   if(bg=='dark'){
      localStorage.setItem('theme',null);
   }else{
      localStorage.setItem('theme','dark');
   }
   body.classList.toggle('dark');
});