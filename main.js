 var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);








function faq(el){

var x =el.parentElement.nextElementSibling.style;
console.log(x)
if(x.display=='none')
{    
   x.display= "block";   
   el.style.cssText='transform: rotate(180deg);';   
 
}
else
{
el.style.cssText='transform: rotate(0deg);';   
x. display= "none";
}
}



const list = document.querySelector('.menu');
function togglechange(){
  
list.classList.toggle("show");

if (list.classList.contains("show")) {
  

document.querySelector('.nav-1').style.display="flex";
document.querySelector('.nav-2').style.display="flex";
document.querySelector('.nav-3').style.display="flex";
document.querySelector('.nav-4').style.display="flex";



}else{
document.querySelector('.nav-1').style.display="none";
document.querySelector('.nav-2').style.display="none";
document.querySelector('.nav-3').style.display="none";
document.querySelector('.nav-4').style.display="none";


}

}
