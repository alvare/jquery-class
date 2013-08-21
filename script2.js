var elementos = document.getElementsByTagName('header');

for(var clave in elementos){
    elementos[clave].className += "red";
}
