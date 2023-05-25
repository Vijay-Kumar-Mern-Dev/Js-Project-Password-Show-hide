let passwordBox=document.querySelector("#password");
let checkBox=document.querySelector("#checkbox");

checkBox.addEventListener("change",function (){

let typeattribute=passwordBox.getAttribute("type")

if(typeattribute==="password"){

    passwordBox.setAttribute("type","text") 
}
else{   

    passwordBox.setAttribute("type","password")
}



})