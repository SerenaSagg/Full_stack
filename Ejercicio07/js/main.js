document.addEventListener("DOMContentLoaded", function () {
    console.log("Contenido del DOM cargado");

var origen=document.getElementById("origen");
origen.value="<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

var boton=document.getElementsByTagName("button"); 

origen.addEventListener("input", function () {
const input=document.getElementsByTagName("input");    //HTMMLCollection

for(var i=0; i<input.length; i++){
    input[i].disabled=false;
}
boton[0].disabled=false;                             //selecciono el primer boton(que en este caso es el unuci que hay)
})

var destino=document.getElementById("destino");
const reemplazar= document.getElementById("btn-reemplazar");
reemplazar.addEventListener("click", function () {
    destino.innerHTML=origen.value;
})

const agregar= document.getElementsByClassName("btn-agregar");
agregar[0].addEventListener("click", function () {
destino.innerHTML=origen.value;
})

agregar[1].addEventListener("click", function () {
    destino.innerHTML=origen.value.repeat(5);
})

agregar[2].addEventListener("click", function () {
    destino.innerHTML=origen.value.repeat(10);
})

agregar[3].addEventListener("click", function () {
    var cantidad=window.prompt("Cantidad de veces a repetir el contenido");
    destino.innerHTML=origen.value.repeat(cantidad);

})

const vaciar=document.getElementsByClassName("btn-vaciar");
vaciar[0].addEventListener("click", function () {
destino.innerHTML=" ";
})

const mayuscula=document.getElementsByClassName("btn-convertir-a-mayusculas");
mayuscula[0].addEventListener("click", function () {
    destino.style.textTransform="uppercase";
})

boton[0].addEventListener("click", function () {
    destino.style.textTransform="lowercase";
})

var li=document.getElementsByTagName("li"); //HTMLCollection
for(var i=0;i<li.length;i++){
    li[i].innerHTML="[Ok]"+li[i].innerHTML;
}
})