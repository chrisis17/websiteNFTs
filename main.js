console.log("hola aqui estoy");
window.onload = start;

desplegado = false;

function start(){
    document.getElementById('menu').onclick = menu;
}

function menu(){
    if(desplegado){
        document.getElementById("bar").style.display = "none";
        desplegado = false;
    }else{
        document.getElementById("bar").style.display = "block";
        desplegado = true;
    }
}



