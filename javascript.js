//----------------------------------------------
//INICIO Cronometro ----------------------------
//----------------------------------------------

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function inicio() {
    control = setInterval(cronometro, 10);
    document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = false;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = false;
}
function parar() {
    clearInterval(control);
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = false;
}
function reinicio() {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Centesimas.innerHTML = ": 00";
    Segundos.innerHTML = ": 00";
    Minutos.innerHTML = ": 00";
    Horas.innerHTML = "00";
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
}
function cronometro() {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0" + centesimas }
        Centesimas.innerHTML = ": " + centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ": " + segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ((centesimas == 0) && (segundos == 0)) {
        minutos++;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = ": " + minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
        horas++;
        if (horas < 10) { horas = "0" + horas }
        Horas.innerHTML = horas;
    }
}

//----------------------------------------------------
// FIM Cronometro ------------------------------------
//----------------------------------------------------

var modalResultado = document.getElementById('modalResultado');
var modalResultadoPerdeu = document.getElementById('modalResultadoPerdeu');
var btnVoltarJogo = document.getElementById('voltarJogo');

btnVoltarJogo.onclick = function () {
    modalResultadoPerdeu.style.display = "none";
    inicio();
}

function preparaCampos(idCampo, valor) {
    document.getElementById(idCampo).readOnly = true;
    document.getElementById(idCampo).value = valor;
    document.getElementById(idCampo).style.color = "black";
}

function conferirJogo() {
    
    var temErro = false;
    var aux = false;

    //Confere todas as linhas

    temErro = conferirFileira("A");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("B");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("C");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("D");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("E");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("F");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("G");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("H");
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirFileira("I");
    if (temErro == true) {
        aux = true;
    }

    //Confere todas as colunas

    temErro = coferirColuna('1');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('2');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('3');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('4');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('5');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('6');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('7');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('8');
    if (temErro == true) {
        aux = true;
    }
    temErro = coferirColuna('9');
    if (temErro == true) {
        aux = true;
    }

    //Cofere todos os blocos

    temErro = confereBloco('A', 'B', 'C', '1', '2', '3');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('D', 'E', 'F', '1', '2', '3');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('G', 'H', 'I', '1', '2', '3');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('A', 'B', 'C', '4', '5', '6');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('D', 'E', 'F', '4', '5', '6');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('G', 'H', 'I', '4', '5', '6');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('A', 'B', 'C', '7', '8', '9');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('D', 'E', 'F', '7', '8', '9');
    if (temErro == true) {
        aux = true;
    }
    temErro = confereBloco('G', 'H', 'I', '7', '8', '9');
    if (temErro == true) {
        aux = true;
    }



    if (aux == true) {
        modalResultadoPerdeu.style.display = "block";
        //console.log('TEM ERRO!!!');
    } else {
        modalResultado.style.display = "block";
        //console.log('PARABENS!!!');
    }
    parar();
    // document.getElementById("mensagem").innerHTML = texto;

}

function conferirFileira(fileira) {
    var f = fileira;
    var v = fileira;
    for (var k = 1; k < 10; k++) {
        f += k;
        for (var i = 1; i < 10; i++) {
            //f += i;
            var j = i;
            v += (++j);
            //console.log('F: ' + f);
            //console.log('V: ' + v);
            if (v !== fileira + "10" && f !== v) {
                if (document.getElementById(f).value == document.getElementById(v).value) {
                    return true;
                }
            }
            //f = fileira;
            v = fileira;
        }
        f = fileira;
    }
}

function coferirColuna(coluna) {
    document.getElementById('Z1').value = document.getElementById('A' + coluna).value;
    document.getElementById('Z2').value = document.getElementById('B' + coluna).value;
    document.getElementById('Z3').value = document.getElementById('C' + coluna).value;
    document.getElementById('Z4').value = document.getElementById('D' + coluna).value;
    document.getElementById('Z5').value = document.getElementById('E' + coluna).value;
    document.getElementById('Z6').value = document.getElementById('F' + coluna).value;
    document.getElementById('Z7').value = document.getElementById('G' + coluna).value;
    document.getElementById('Z8').value = document.getElementById('H' + coluna).value;
    document.getElementById('Z9').value = document.getElementById('I' + coluna).value;
    return conferirFileira('Z');

}

function confereBloco(f1, f2, f3, c1, c2, c3) {
    //f1, f2 e f3 fileiras, c1, c2 e c3 colunas
    document.getElementById('Z1').value = document.getElementById(f1 + c1).value;
    document.getElementById('Z2').value = document.getElementById(f1 + c2).value;
    document.getElementById('Z3').value = document.getElementById(f1 + c3).value;
    document.getElementById('Z4').value = document.getElementById(f2 + c1).value;
    document.getElementById('Z5').value = document.getElementById(f2 + c2).value;
    document.getElementById('Z6').value = document.getElementById(f2 + c3).value;
    document.getElementById('Z7').value = document.getElementById(f3 + c1).value;
    document.getElementById('Z8').value = document.getElementById(f3 + c2).value;
    document.getElementById('Z9').value = document.getElementById(f3 + c3).value;
    return conferirFileira('Z');
}

//SCRIPT DO MODAL

// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks on the button, open the modal 
window.onload = function () {
    modal.style.display = "block";
}

function start_facil() {

    var sorteio = getSorteio(1, 5);

    if (sorteio == 1) {
        facil_1();
    } else if (sorteio == 2) {
        facil_2();
    } else if (sorteio == 3) {
        facil_3();
    } else if (sorteio == 4) {
        facil_4();
    } else if (sorteio == 5) {
        facil_5();
    }
    modal.style.display = "none";
    inicio();
}

function start_medio() {

    var sorteio = getSorteio(1, 5);

    if (sorteio == 1) {
        medio_1();
    } else if (sorteio == 2) {
        medio_2();
    } else if (sorteio == 3) {
        medio_3();
    } else if (sorteio == 4) {
        medio_4();
    } else if (sorteio == 5) {
        medio_5();
    }
    modal.style.display = "none";
    inicio();
}

function start_dificil() {

    var sorteio = getSorteio(1, 5);

    if (sorteio == 1) {
        dificil_1();
    } else if (sorteio == 2) {
        dificil_2();
    } else if (sorteio == 3) {
        dificil_3();
    } else if (sorteio == 4) {
        dificil_4();
    } else if (sorteio == 5) {
        dificil_5();
    }
    modal.style.display = "none";
    inicio();
}

// When the user clicks on <span> (x), close the modal
//span.onclick = function () {
//	modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function (event) {
//	if (event.target == modal) {
//		modal.style.display = "none";
//	}
//	}

function getSorteio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function facil_1() {
    preparaCampos("A3", 8);
    preparaCampos("B1", 4);
    preparaCampos("B2", 9);
    preparaCampos("B4", 1);
    preparaCampos("B5", 5);
    preparaCampos("B6", 7);
    preparaCampos("B9", 2);
    preparaCampos("C3", 3);
    preparaCampos("C4", 2);
    preparaCampos("C6", 4);
    preparaCampos("C7", 1);
    preparaCampos("C8", 9);
    preparaCampos("D1", 1);
    preparaCampos("D2", 8);
    preparaCampos("D3", 5);
    preparaCampos("D5", 6);
    preparaCampos("D8", 2);
    preparaCampos("E5", 2);
    preparaCampos("E8", 6);
    preparaCampos("F1", 9);
    preparaCampos("F2", 6);
    preparaCampos("F4", 4);
    preparaCampos("F6", 5);
    preparaCampos("F7", 3);
    preparaCampos("G2", 3);
    preparaCampos("G5", 7);
    preparaCampos("G6", 2);
    preparaCampos("G9", 4);
    preparaCampos("H2", 4);
    preparaCampos("H3", 9);
    preparaCampos("H5", 3);
    preparaCampos("H8", 5);
    preparaCampos("H9", 7);
    preparaCampos("I1", 8);
    preparaCampos("I2", 2);
    preparaCampos("I3", 7);
    preparaCampos("I6", 9);
    preparaCampos("I8", 1);
    preparaCampos("I9", 3);
}

function facil_2() {
    preparaCampos("A4", 8);
    preparaCampos("A6", 5);
    preparaCampos("A8", 1);
    preparaCampos("A9", 3);
    preparaCampos("B4", 2);
    preparaCampos("B6", 3);
    preparaCampos("B7", 6);
    preparaCampos("C1", 6);
    preparaCampos("C5", 9);
    preparaCampos("C7", 2);
    preparaCampos("C9", 4);
    preparaCampos("D9", 5);
    preparaCampos("E2", 4);
    preparaCampos("E4", 1);
    preparaCampos("E7", 7);
    preparaCampos("E9", 6);
    preparaCampos("F1", 2);
    preparaCampos("F2", 5);
    preparaCampos("F3", 6);
    preparaCampos("F4", 3);
    preparaCampos("F6", 4);
    preparaCampos("F7", 8);
    preparaCampos("F8", 9);
    preparaCampos("G1", 5);
    preparaCampos("G2", 9);
    preparaCampos("G6", 7);
    preparaCampos("G7", 1);
    preparaCampos("G9", 2);
    preparaCampos("H1", 1);
    preparaCampos("H3", 2);
    preparaCampos("H5", 8);
    preparaCampos("H7", 4);
    preparaCampos("H8", 7);
    preparaCampos("I3", 4);
    preparaCampos("I4", 9);
    preparaCampos("I5", 1);
    preparaCampos("I8", 3);
    preparaCampos("I9", 8);
}

function facil_3() {
    preparaCampos("A6", 5);
    preparaCampos("A7", 4);
    preparaCampos("A9", 9);
    preparaCampos("B1", 4);
    preparaCampos("B2", 5);
    preparaCampos("B3", 1);
    preparaCampos("B6", 2);
    preparaCampos("B7", 3);
    preparaCampos("C1", 9);
    preparaCampos("C2", 8);
    preparaCampos("C3", 2);
    preparaCampos("C7", 5);
    preparaCampos("C8", 6);
    preparaCampos("C9", 1);
    preparaCampos("D1", 6);
    preparaCampos("D3", 7);
    preparaCampos("D7", 9);
    preparaCampos("D8", 8);
    preparaCampos("E3", 3);
    preparaCampos("E4", 4);
    preparaCampos("E5", 6);
    preparaCampos("F1", 5);
    preparaCampos("F4", 2);
    preparaCampos("F5", 8);
    preparaCampos("F6", 7);
    preparaCampos("F8", 1);
    preparaCampos("G2", 4);
    preparaCampos("G5", 7);
    preparaCampos("G8", 9);
    preparaCampos("G9", 6);
    preparaCampos("H1", 3);
    preparaCampos("H7", 7);
    preparaCampos("I3", 5);
    preparaCampos("I4", 9);
    preparaCampos("I5", 4);
    preparaCampos("I6", 6);
    preparaCampos("I7", 8);
    preparaCampos("I9", 2);
}

function facil_4() {
    preparaCampos("A3", 8);
    preparaCampos("B1", 4);
    preparaCampos("B2", 9);
    preparaCampos("B4", 1);
    preparaCampos("B5", 5);
    preparaCampos("B6", 7);
    preparaCampos("B9", 2);
    preparaCampos("C3", 3);
    preparaCampos("C6", 4);
    preparaCampos("C7", 1);
    preparaCampos("C8", 9);
    preparaCampos("D1", 1);
    preparaCampos("D2", 8);
    preparaCampos("D3", 5);
    preparaCampos("D5", 6);
    preparaCampos("D8", 2);
    preparaCampos("E5", 2);
    preparaCampos("E8", 6);
    preparaCampos("F1", 9);
    preparaCampos("F2", 6);
    preparaCampos("F4", 4);
    preparaCampos("F6", 5);
    preparaCampos("F7", 3);
    preparaCampos("G2", 3);
    preparaCampos("G5", 7);
    preparaCampos("G6", 2);
    preparaCampos("G9", 4);
    preparaCampos("H2", 4);
    preparaCampos("H3", 9);
    preparaCampos("H5", 3);
    preparaCampos("H8", 5);
    preparaCampos("H9", 7);
    preparaCampos("I1", 8);
    preparaCampos("I2", 2);
    preparaCampos("I3", 7);
    preparaCampos("H6", 9);
    preparaCampos("H8", 1);
    preparaCampos("H9", 3);
}

function facil_5() {
    preparaCampos("A1", 4);
    preparaCampos("A2", 1);
    preparaCampos("A5", 6);
    preparaCampos("A8", 7);
    preparaCampos("B3", 3);
    preparaCampos("B5", 8);
    preparaCampos("B6", 5);
    preparaCampos("B9", 9);
    preparaCampos("C2", 2);
    preparaCampos("C4", 3);
    preparaCampos("C5", 7);
    preparaCampos("C7", 5);
    preparaCampos("C9", 1);
    preparaCampos("D2", 3);
    preparaCampos("D4", 6);
    preparaCampos("D6", 9);
    preparaCampos("D7", 2);
    preparaCampos("D8", 5);
    preparaCampos("E1", 6);
    preparaCampos("E4", 5);
    preparaCampos("E6", 1);
    preparaCampos("F3", 9);
    preparaCampos("F5", 2);
    preparaCampos("F9", 3);
    preparaCampos("G3", 6);
    preparaCampos("G4", 2);
    preparaCampos("G7", 7);
    preparaCampos("G8", 4);
    preparaCampos("G9", 5);
    preparaCampos("H4", 4);
    preparaCampos("H6", 6);
    preparaCampos("H7", 8);
    preparaCampos("I1", 2);
    preparaCampos("I2", 8);
    preparaCampos("I3", 4);
    preparaCampos("I7", 1);
    preparaCampos("I8", 9);
    preparaCampos("I9", 6);
}

function medio_1() {
    preparaCampos("A1", 8);
    preparaCampos("A4", 1);
    preparaCampos("A8", 7);
    preparaCampos("B2", 2);
    preparaCampos("B5", 4);
    preparaCampos("B6", 8);
    preparaCampos("C2", 6);
    preparaCampos("C4", 7);
    preparaCampos("D4", 4);
    preparaCampos("D5", 7);
    preparaCampos("D7", 9);
    preparaCampos("D9", 8);
    preparaCampos("E1", 2);
    preparaCampos("E2", 4);
    preparaCampos("E5", 8);
    preparaCampos("F2", 3);
    preparaCampos("F3", 8);
    preparaCampos("F9", 5);
    preparaCampos("G2", 8);
    preparaCampos("G4", 6);
    preparaCampos("G6", 4);
    preparaCampos("G7", 1);
    preparaCampos("H1", 9);
    preparaCampos("H6", 7);
    preparaCampos("H7", 2);
    preparaCampos("H9", 4);
    preparaCampos("I3", 5);
    preparaCampos("I4", 8);
    preparaCampos("I5", 1);
    preparaCampos("I9", 6);
}

function medio_2() {
    preparaCampos("A7", 6);
    preparaCampos("A9", 9);
    preparaCampos("B1", 1);
    preparaCampos("B6", 4);
    preparaCampos("C3", 5);
    preparaCampos("C4", 3);
    preparaCampos("C6", 6);
    preparaCampos("C7", 8);
    preparaCampos("C8", 2);
    preparaCampos("C9", 1);
    preparaCampos("D3", 4);
    preparaCampos("D4", 6);
    preparaCampos("D5", 7);
    preparaCampos("D8", 5);
    preparaCampos("E3", 7);
    preparaCampos("E7", 9);
    preparaCampos("F4", 5);
    preparaCampos("F5", 4);
    preparaCampos("G1", 3);
    preparaCampos("G2", 7);
    preparaCampos("G4", 4);
    preparaCampos("G6", 5);
    preparaCampos("G7", 2);
    preparaCampos("G9", 6);
    preparaCampos("H7", 5);
    preparaCampos("H8", 1);
    preparaCampos("I2", 6);
    preparaCampos("I5", 2);
    preparaCampos("I8", 3);
    preparaCampos("I9", 7);
}

function medio_3() {
    preparaCampos("A1", 1);
    preparaCampos("A3", 5);
    preparaCampos("A5", 4);
    preparaCampos("A7", 7);
    preparaCampos("B5", 7);
    preparaCampos("B6", 2);
    preparaCampos("B8", 8);
    preparaCampos("B9", 1);
    preparaCampos("C6", 6);
    preparaCampos("C7", 4);
    preparaCampos("C9", 9);
    preparaCampos("D1", 6);
    preparaCampos("D2", 9);
    preparaCampos("D3", 4);
    preparaCampos("E1", 8);
    preparaCampos("E2", 1);
    preparaCampos("E4", 4);
    preparaCampos("E5", 5);
    preparaCampos("E6", 7);
    preparaCampos("E7", 9);
    preparaCampos("E8", 3);
    preparaCampos("G1", 2);
    preparaCampos("G7", 1);
    preparaCampos("G8", 4);
    preparaCampos("H2", 8);
    preparaCampos("H9", 3);
    preparaCampos("I1", 4);
    preparaCampos("I4", 6);
    preparaCampos("I5", 1);
    preparaCampos("I8", 9);
}

function medio_4() {
    preparaCampos("A1", 2);
    preparaCampos("A4", 1);
    preparaCampos("A5", 8);
    preparaCampos("A7", 6);
    preparaCampos("B4", 9);
    preparaCampos("B6", 4);
    preparaCampos("C3", 4);
    preparaCampos("C8", 3);
    preparaCampos("D2", 3);
    preparaCampos("D3", 2);
    preparaCampos("D4", 7);
    preparaCampos("D6", 5);
    preparaCampos("E2", 4);
    preparaCampos("E6", 9);
    preparaCampos("E7", 2);
    preparaCampos("E9", 8);
    preparaCampos("F1", 1);
    preparaCampos("F4", 4);
    preparaCampos("G1", 4);
    preparaCampos("G3", 9);
    preparaCampos("G6", 6);
    preparaCampos("G9", 5);
    preparaCampos("H2", 6);
    preparaCampos("H6", 2);
    preparaCampos("H7", 3);
    preparaCampos("H8", 7);
    preparaCampos("I2", 7);
    preparaCampos("I3", 8);
    preparaCampos("I5", 4);
    preparaCampos("I6", 1);
}

function medio_5() {
    preparaCampos("A3", 3);
    preparaCampos("A4", 6);
    preparaCampos("A5", 7);
    preparaCampos("A9", 4);
    preparaCampos("B1", 8);
    preparaCampos("B3", 2);
    preparaCampos("B5", 4);
    preparaCampos("C1", 6);
    preparaCampos("C2", 9);
    preparaCampos("C3", 4);
    preparaCampos("C5", 3);
    preparaCampos("C7", 2);
    preparaCampos("C8", 5);
    preparaCampos("C9", 7);
    preparaCampos("D1", 7);
    preparaCampos("D5", 8);
    preparaCampos("D9", 6);
    preparaCampos("E3", 9);
    preparaCampos("E4", 1);
    preparaCampos("E9", 2);
    preparaCampos("F3", 1);
    preparaCampos("F5", 9);
    preparaCampos("F7", 7);
    preparaCampos("G3", 7);
    preparaCampos("H2", 5);
    preparaCampos("H5", 6);
    preparaCampos("H6", 3);
    preparaCampos("H9", 9);
    preparaCampos("I4", 4);
    preparaCampos("I7", 3);
}

function dificil_1() {
    preparaCampos("A1", 5);
    preparaCampos("A6", 7)
    preparaCampos("A9", 2);
    preparaCampos("B6", 9);
    preparaCampos("B7", 5);
    preparaCampos("C2", 2);
    preparaCampos("C5", 8);
    preparaCampos("D1", 9);
    preparaCampos("D2", 4);
    preparaCampos("D4", 2);
    preparaCampos("D6", 3);
    preparaCampos("E3", 1);
    preparaCampos("E7", 7);
    preparaCampos("F4", 1);
    preparaCampos("F6", 5);
    preparaCampos("F8", 8);
    preparaCampos("F9", 4);
    preparaCampos("G5", 6);
    preparaCampos("G8", 4);
    preparaCampos("H3", 9);
    preparaCampos("H4", 3);
    preparaCampos("I1", 1);
    preparaCampos("I4", 9);
    preparaCampos("I9", 3);
}

function dificil_2() {
    preparaCampos("A6", 2);
    preparaCampos("B3", 2);
    preparaCampos("B5", 6);
    preparaCampos("B7", 2);
    preparaCampos("C2", 4);
    preparaCampos("C4", 9);
    preparaCampos("C6", 5);
    preparaCampos("C8", 2);
    preparaCampos("D1", 8);
    preparaCampos("D3", 1);
    preparaCampos("D7", 2);
    preparaCampos("E2", 6);
    preparaCampos("E8", 1);
    preparaCampos("F3", 3);
    preparaCampos("E7", 9);
    preparaCampos("E9", 4);
    preparaCampos("G2", 7);
    preparaCampos("G4", 5);
    preparaCampos("G6", 8);
    preparaCampos("G8", 4);
    preparaCampos("H3", 6);
    preparaCampos("H5", 3);
    preparaCampos("H7", 7);
    preparaCampos("I4", 4);
}

function dificil_3() {
    preparaCampos("A1", 9);
    preparaCampos("A5", 3);
    preparaCampos("A9", 7);
    preparaCampos("B3", 8);
    preparaCampos("B7", 1);
    preparaCampos("C4", 7);
    preparaCampos("C6", 5);
    preparaCampos("D3", 1);
    preparaCampos("D5", 8);
    preparaCampos("D7", 3);
    preparaCampos("E1", 4);
    preparaCampos("E4", 2);
    preparaCampos("E6", 3);
    preparaCampos("E9", 9);
    preparaCampos("F3", 2);
    preparaCampos("F5", 9);
    preparaCampos("F7", 8);
    preparaCampos("G4", 3);
    preparaCampos("G6", 4);
    preparaCampos("H3", 5);
    preparaCampos("H7", 6);
    preparaCampos("I1", 7);
    preparaCampos("I5", 6);
    preparaCampos("I9", 3);
}

function dificil_4() {
    preparaCampos("A2", 5);
    preparaCampos("A5", 2);
    preparaCampos("A8", 3);
    preparaCampos("B2", 2);
    preparaCampos("B4", 3);
    preparaCampos("B8", 7);
    preparaCampos("C3", 3);
    preparaCampos("C5", 9);
    preparaCampos("C7", 6);
    preparaCampos("D8", 2);
    preparaCampos("E1", 1);
    preparaCampos("E3", 9);
    preparaCampos("E7", 5);
    preparaCampos("E9", 6);
    preparaCampos("F2", 8);
    preparaCampos("G3", 2);
    preparaCampos("G5", 3);
    preparaCampos("G7", 8);
    preparaCampos("H2", 4);
    preparaCampos("H6", 7);
    preparaCampos("H8", 5);
    preparaCampos("I2", 3);
    preparaCampos("I5", 8);
    preparaCampos("I8", 9);
}

function dificil_5() {
    preparaCampos("A2", 4);
    preparaCampos("A8", 1);
    preparaCampos("B1", 9);
    preparaCampos("B4", 2);
    preparaCampos("B6", 1);
    preparaCampos("B9", 5);
    preparaCampos("C5", 4);
    preparaCampos("D2", 6);
    preparaCampos("D4", 1);
    preparaCampos("D6", 4);
    preparaCampos("D8", 8);
    preparaCampos("E3", 3);
    preparaCampos("E5", 7);
    preparaCampos("E7", 6);
    preparaCampos("F2", 7);
    preparaCampos("F4", 5);
    preparaCampos("F6", 3);
    preparaCampos("F8", 2);
    preparaCampos("G5", 5);
    preparaCampos("H1", 1);
    preparaCampos("H4", 6);
    preparaCampos("H6", 9);
    preparaCampos("H9", 4);
    preparaCampos("I2", 9);
    preparaCampos("I8", 3);
}