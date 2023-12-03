let parcial = "";
let operRealizada = document.getElementById("operacionRealizada");
let operadorSeleccionado = "";
let numero = "";
let ultimoDigito = "";


function operador(num) {
    numero = numero + num;

    parcial = parcial + num;

    operRealizada.innerHTML = parcial;
    if (numero == '0' && operadorSeleccionado == '/') {
        limpiar();
        txtResul.innerHTML = "Indefinido";
        return;
    }
    if (ultimoDigito = 'operacion') {
        ultimoDigito = 'numero'
    }
}

function operacion(oper) {
    operadorSeleccionado = oper;
    ultimoDigito = 'operacion';
    parcial = parcial + oper;
    numero = 0;
    operRealizada.innerHTML = parcial;
}

function calculo() {
    parcial = eval(parcial);
    parcial = parcial.toString();
    numero = "";
    operRealizada.innerHTML = parcial;
}



function limpiar() {
    operadorSeleccionado = "";
    parcial = "";
    numero = "";
    operRealizada.innerHTML = 0;
}