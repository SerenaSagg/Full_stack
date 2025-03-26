var boton = document.getElementsByClassName("estilos")[0];
var estilo = document.getElementsByClassName("link_estilo")[0];
var boton2 = document.getElementsByClassName("aleatorio")[0];
var contador=1;

boton.addEventListener("click", CambioEstilo);

function CambioEstilo(){
    if(contador==1){
        estilo.href = "estilos-retro.css";
        contador=2;
    }
    else if(contador==2){
        estilo.href = "estilos-urbano.css";
        contador=3;
    }
    else if(contador==3){
        estilo.href = "estilos.css";
        contador=1;
    }
}


boton2.addEventListener("click", EstiloAleatorio);
function EstiloAleatorio(){
    function obtenerNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;       //Math.floor redondea hacia abajo, ya que Math.random() devuelve un número decimal
        }

    contador=obtenerNumeroAleatorio(1, 4);
    if(contador==1){
        estilo.href = "estilos-retro.css";
    }
    else if(contador==2){
        estilo.href = "estilos-urbano.css";
    }
    else if(contador==3){
        estilo.href = "estilos.css";
    }
    else if(contador==4){
        estilo.href = "";
    }
}