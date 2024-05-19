
mode();
login();


function login(){
var login = document.getElementById('login')

login.addEventListener('click',function(){
var pass = document.getElementById('password').value;
var usar = document.getElementById('username').value;

if(usar===''){
   alert('username ist required');

}else if(pass===''){
   alert('password ist required');
}else{
   alert(usar+''+pass)
}
});}




function mode(){
   
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
}