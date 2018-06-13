//----------------------------------------------
// Cronometro ----------------------------
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
// Variaveis Globais ---------------------------------
//----------------------------------------------------

ck_checarErro = false;
ck_canetaDeAnotacoes = false;
ck_apagar = false;
ck_preencher = true;
valorSetado = "1";
qntApagadas = 0;
qntChecagens = 0;
qntFinalizacoes = 0;

//----------------------------------------------------
// Intervenções --------------------------------------
//----------------------------------------------------

function celula(id) {

    str = id.split(" ");
    id = str[0] + str[1];
    //ChecarErro OBS: str[0] = Linha, str[1] = Coluna
    if (ck_checarErro == true) {
        var fileira, coluna = false;
        fileira = conferirFileira(str[0]);
        coluna = conferirColuna(str[1]);
        if (fileira == true || coluna == true) {
            document.getElementById(id).style.animation = "";
            setTimeout(() => document.getElementById(id).style.animation = "errado 3s linear");
            qntChecagens++;
        } else {
            document.getElementById(id).style.animation = "";
            setTimeout(() => document.getElementById(id).style.animation = "correto 3s linear");
            qntChecagens++;
        }
    }

    //Preencher Célula
    if (ck_preencher == true) {
        if (ck_canetaDeAnotacoes == false) {
            if (!document.getElementById(id).classList.contains('bloqueado')) {
                if (document.getElementById(id).classList.contains('canetaAnotacoes')) {
                    document.getElementById(id).classList.remove('canetaAnotacoes');
                    //document.getElementById(id).readyOnly = true;
                }
                document.getElementById(id).value = valorSetado;
            }
        } else {
            if (!document.getElementById(id).classList.contains('bloqueado')) {
                var objeto = document.getElementById(id).value;
                if (objeto.length > 8) {
                    // alert("O objeto TEXTAREA aceita somente 9 caracteres");
                } else {
                    //document.getElementById(id).readyOnly = false;
                    document.getElementById(id).value += "" + valorSetado;

                }

            }
        }
    }

    //Apagar Valor da Célula
    if (ck_apagar == true) {
        if (!document.getElementById(id).classList.contains('bloqueado')) {
            document.getElementById(id).value = "";
            qntApagadas++;
        }
    }

    //Caneta de Anotações
    if (ck_canetaDeAnotacoes == true) {
        if (!document.getElementById(id).classList.contains('bloqueado')) {
            document.getElementById(id).classList.add('canetaAnotacoes');
        }
    }

}

function checarCelula() {
    if (ck_checarErro == false) {
        ck_checarErro = true;
        ck_canetaDeAnotacoes = false;
        ck_apagar = false;
        ck_preencher = false;
        console.log('CHECAR CELULA: ON')
        console.log(ck_checarErro);
        document.getElementById('conferirErro').style.backgroundColor = 'rgb(9, 18, 139)';
        document.getElementById('btn_apagar').style.backgroundColor = 'rgb(36, 133, 212)';
        document.getElementById('btn_caneta').style.backgroundColor = 'rgb(36, 133, 212)';
    } else {
        ck_checarErro = false;
        ck_preencher = true;
        document.getElementById('conferirErro').style.backgroundColor = 'rgb(36, 133, 212)';
        console.log('CHECAR CELULA: OFF')
        console.log(ck_checarErro);
    }
}

function preencher() {
    ck_preencher = true;
    ck_checarErro = false;
    // ck_canetaDeAnotacoes = false;
    ck_apagar = false;
    document.getElementById('conferirErro').style.backgroundColor = 'rgb(36, 133, 212)';
    document.getElementById('btn_apagar').style.backgroundColor = 'rgb(36, 133, 212)';
    //  document.getElementById('btn_caneta').style.backgroundColor = 'rgb(36, 133, 212)';
    console.log("PREENCHER ON: " + ck_preencher);
}

function setarValor(valor) {
    dessetar();
    valorSetado = valor;
    preencher();
    console.log(valorSetado);
    document.getElementById('b' + valor).style.backgroundColor = 'rgb(59, 59, 70)';

}

function dessetar() {
    document.getElementById('b1').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b2').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b3').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b4').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b5').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b6').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b7').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b8').style.backgroundColor = 'rgb(36, 39, 212)';
    document.getElementById('b9').style.backgroundColor = 'rgb(36, 39, 212)';
}


function apagar() {
    if (ck_apagar == false) {
        ck_apagar = true;
        ck_checarErro = false;
        //ck_canetaDeAnotacoes = false;
        ck_preencher = false;
        // document.getElementById('btn_apagar').textContent = 'Apagar ON';
        document.getElementById('conferirErro').style.backgroundColor = 'rgb(36, 133, 212)';
        document.getElementById('btn_apagar').style.backgroundColor = 'rgb(9, 18, 139)';
        //document.getElementById('btn_caneta').style.backgroundColor = 'rgb(36, 133, 212)';
    } else {
        ck_apagar = false;
        ck_preencher = true;
        //document.getElementById('btn_apagar').textContent = 'Apagar OFF';
        document.getElementById('btn_apagar').style.backgroundColor = 'rgb(36, 133, 212)';
    }

}

function canetaAnotacoes() {
    if (ck_canetaDeAnotacoes == false) {
        ck_canetaDeAnotacoes = true;
        ck_apagar = false;
        ck_checarErro = false;
        ck_preencher = true;
        //document.getElementById('btn_caneta').textContent = 'Caneta ON';
        document.getElementById('conferirErro').style.backgroundColor = 'rgb(36, 133, 212)';
        //document.getElementById('btn_apagar').style.backgroundColor = 'rgb(36, 133, 212)';
        document.getElementById('btn_caneta').style.backgroundColor = 'rgb(9, 18, 139)';
    } else {
        ck_canetaDeAnotacoes = false;
        ck_preencher = true;
        // document.getElementById('btn_caneta').textContent = 'Caneta OFF';
        document.getElementById('btn_caneta').style.backgroundColor = 'rgb(36, 133, 212)';
    }
}

function getEstatisticas() {
    document.getElementById('estatistica').innerHTML = 'Quantidade de vezes apagadas: ' + qntApagadas +
        '<br>Chegagens de Erros: ' + qntChecagens + '<br>Finalizações mal sucedidas: ' + qntFinalizacoes;
}

function tutorial() {
    document.getElementById('modalTutorial').style.display = "block";
}

function limparJogo() {
    IimparCampo("A1");
    IimparCampo("A2");
    IimparCampo("A3");
    IimparCampo("A4");
    IimparCampo("A5");
    IimparCampo("A6");
    IimparCampo("A8");
    IimparCampo("A7");
    IimparCampo("A9");
    IimparCampo("B1");
    IimparCampo("B2");
    IimparCampo("B3");
    IimparCampo("B4");
    IimparCampo("B5");
    IimparCampo("B6");
    IimparCampo("B8");
    IimparCampo("B7");
    IimparCampo("B9");
    IimparCampo("C1");
    IimparCampo("C2");
    IimparCampo("C3");
    IimparCampo("C4");
    IimparCampo("C5");
    IimparCampo("C6");
    IimparCampo("C8");
    IimparCampo("C7");
    IimparCampo("C9");
    IimparCampo("D1");
    IimparCampo("D2");
    IimparCampo("D3");
    IimparCampo("D4");
    IimparCampo("D5");
    IimparCampo("D6");
    IimparCampo("D8");
    IimparCampo("D7");
    IimparCampo("D9");
    IimparCampo("E1");
    IimparCampo("E2");
    IimparCampo("E3");
    IimparCampo("E4");
    IimparCampo("E5");
    IimparCampo("E6");
    IimparCampo("E8");
    IimparCampo("E7");
    IimparCampo("E9");
    IimparCampo("F1");
    IimparCampo("F2");
    IimparCampo("F3");
    IimparCampo("F4");
    IimparCampo("F5");
    IimparCampo("F6");
    IimparCampo("F8");
    IimparCampo("F7");
    IimparCampo("F9");
    IimparCampo("G1");
    IimparCampo("G2");
    IimparCampo("G3");
    IimparCampo("G4");
    IimparCampo("G5");
    IimparCampo("G6");
    IimparCampo("G8");
    IimparCampo("G7");
    IimparCampo("G9");
    IimparCampo("H1");
    IimparCampo("H2");
    IimparCampo("H3");
    IimparCampo("H4");
    IimparCampo("H5");
    IimparCampo("H6");
    IimparCampo("H8");
    IimparCampo("H7");
    IimparCampo("H9");
    IimparCampo("I1");
    IimparCampo("I2");
    IimparCampo("I3");
    IimparCampo("I4");
    IimparCampo("I5");
    IimparCampo("I6");
    IimparCampo("I8");
    IimparCampo("I7");
    IimparCampo("I9");

}

function IimparCampo(id) {
    if (!document.getElementById(id).classList.contains('bloqueado')) {
        document.getElementById(id).value = "";
    }
}

//----------------------------------------------------

var modalResultado = document.getElementById('modalResultado');
var modalResultadoPerdeu = document.getElementById('modalResultadoPerdeu');
var btnVoltarJogo = document.getElementById('voltarJogo');
var btnConferir = document.getElementById('conferirErro');
var btnNaoLimpar = document.getElementById('naoLimparJogo');
var btnSimLimpar = document.getElementById('simLimparJogo');
var btnLimpar = document.getElementById('limparJogo');
var modalLimparJogo = document.getElementById('modalLimparJogo');

function modalLimpar(){
    document.getElementById('modalLimparJogo').style.display = "block";
}


btnSimLimpar.onclick = function () {
    limparJogo();
    modalLimparJogo.style.display = "none";
}

btnNaoLimpar.onclick = function () {
    modalLimparJogo.style.display = "none";
}

btnVoltarJogo.onclick = function () {
    modalResultadoPerdeu.style.display = "none";
    inicio();
}

function sairTutorial() {
    document.getElementById('modalTutorial').style.display = 'none';
}


function preparaCampos(idCampo, valor) {
    //document.getElementById(idCampo).readOnly = true;
    document.getElementById(idCampo).classList.add('bloqueado');
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

    temErro = conferirColuna('1');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('2');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('3');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('4');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('5');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('6');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('7');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('8');
    if (temErro == true) {
        aux = true;
    }
    temErro = conferirColuna('9');
    if (temErro == true) {
        aux = true;
    }

    //Confere todos os blocos

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
        qntFinalizacoes++;
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
                    if (document.getElementById(f).value !== "" && document.getElementById(v).value !== "") {
                        return true;
                    }
                }
            }
            //f = fileira;
            v = fileira;
        }
        f = fileira;
    }
}

function conferirColuna(coluna) {
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

function conferirErro(solucao) {
    var linha_a = [];
    for (x = 0; x < 10; x++) linha_a[x] = document.getElementById('A' + (x + 1).value);
    for (i = 1, j = 0; i < 10, j < 10; i++ , j++) {
        if (document.getElementById('A' + (i)).value != solucao[j]) {
            document.getElementById('A' + (i)).style.color = "red";
        }
    }

    var linha_b = [];
    for (x = 0; x < 10; x++) linha_b[x] = document.getElementById('B' + (x + 1).value);
    for (i = 1, j = 10; i < 10, j < 20; i++ , j++) {
        if (document.getElementById('B' + (i)).value != solucao[j]) {
            document.getElementById('B' + (i)).style.color = "red";
        }
    }

    var linha_c = [];
    for (x = 0; x < 10; x++) linha_c[x] = document.getElementById('C' + (x + 1).value);
    for (i = 1, j = 20; i < 10, j < 30; i++ , j++) {
        if (document.getElementById('C' + (i)).value != solucao[j]) {
            document.getElementById('C' + (i)).style.color = "red";
        }
    }

    var linha_d = [];
    for (x = 0; x < 10; x++) linha_d[x] = document.getElementById('D' + (x + 1).value);
    for (i = 1, j = 30; i < 10, j < 40; i++ , j++) {
        if (document.getElementById('D' + (i)).value != solucao[j]) {
            document.getElementById('D' + (i)).style.color = "red";
        }
    }

    var linha_e = [];
    for (x = 0; x < 10; x++) linha_e[x] = document.getElementById('E' + (x + 1).value);
    for (i = 1, j = 40; i < 10, j < 50; i++ , j++) {
        if (document.getElementById('E' + (i)).value != solucao[j]) {
            document.getElementById('E' + (i)).style.color = "red";
        }
    }

    var linha_f = [];
    for (x = 0; x < 10; x++) linha_f[x] = document.getElementById('F' + (x + 1).value);
    for (i = 1, j = 50; i < 10, j < 60; i++ , j++) {
        if (document.getElementById('F' + (i)).value != solucao[j]) {
            document.getElementById('F' + (i)).style.color = "red";
        }
    }

    var linha_g = [];
    for (x = 0; x < 10; x++) linha_g[x] = document.getElementById('G' + (x + 1).value);
    for (i = 1, j = 60; i < 10, j < 70; i++ , j++) {
        if (document.getElementById('G' + (i)).value != solucao[j]) {
            document.getElementById('G' + (i)).style.color = "red";
        }
    }

    var linha_h = [];
    for (x = 0; x < 10; x++) linha_h[x] = document.getElementById('H' + (x + 1).value);
    for (i = 1, j = 70; i < 10, j < 80; i++ , j++) {
        if (document.getElementById('H' + (i)).value != solucao[j]) {
            document.getElementById('H' + (i)).style.color = "red";
        }
    }

    var linha_i = [];
    for (x = 0; x < 10; x++) linha_i[x] = document.getElementById('I' + (x + 1).value);
    for (i = 1, j = 80; i < 10, j < 90; i++ , j++) {
        if (document.getElementById('I' + (i)).value != solucao[j]) {
            document.getElementById('I' + (i)).style.color = "red";
        }
    }
}


//SCRIPT DO MODAL

// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks on the button, open the modal 
window.onload = function () {
    modal.style.display = "block";
    setarValor('1');
}

function start_facil() {

    var sorteio = getSorteio(1, 4);

    if (sorteio == 1) {
        facil_1();
        solucao = solucao_facil_1;
    } else if (sorteio == 2) {
        facil_2();
        solucao = solucao_facil_2;
    } else if (sorteio == 3) {
        facil_3();
        solucao = solucao_facil_3;
    } else if (sorteio == 4) {
        facil_4();
        solucao = solucao_facil_4;
    }
    modal.style.display = "none";
    inicio();
    btnConferir.onclick = conferirErro(solucao);
}

function start_medio() {

    var sorteio = getSorteio(1, 4);

    if (sorteio == 1) {
        medio_1();
        solucao = solucao_medio_1;
    } else if (sorteio == 2) {
        medio_2();
        solucao = solucao_medio_2;
    } else if (sorteio == 3) {
        medio_3();
        solucao = solucao_medio_3;
    } else if (sorteio == 4) {
        medio_4();
        solucao = solucao_medio_4;
    }
    modal.style.display = "none";
    inicio();
    btnConferir.onclick = conferirErro(solucao);
}

function start_dificil() {

    var sorteio = getSorteio(1, 4);

    if (sorteio == 1) {
        dificil_1();
        solucao = solucao_dificil_1;
    } else if (sorteio == 2) {
        dificil_2();
        solucao = solucao_dificil_2;
    } else if (sorteio == 3) {
        dificil_3();
        solucao = solucao_dificil_3;
    } else if (sorteio == 4) {
        dificil_4();
        solucao = solucao_dificil_4;
    }
    modal.style.display = "none";
    inicio();
    btnConferir.onclick = conferirErro(solucao);
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
    preparaCampos("A2", 5);
    preparaCampos("A3", 3);
    preparaCampos("A5", 4);
    preparaCampos("B5", 8);
    preparaCampos("B9", 6);
    preparaCampos("C3", 4);
    preparaCampos("C4", 6);
    preparaCampos("C7", 2);
    preparaCampos("C9", 7);
    preparaCampos("D7", 5);
    preparaCampos("E1", 5);
    preparaCampos("E2", 4);
    preparaCampos("E5", 6);
    preparaCampos("E8", 8);
    preparaCampos("E9", 3);
    preparaCampos("F3", 9);
    preparaCampos("G1", 8);
    preparaCampos("G3", 7);
    preparaCampos("G6", 9);
    preparaCampos("G7", 6);
    preparaCampos("H1", 9);
    preparaCampos("H5", 2);
    preparaCampos("I5", 3);
    preparaCampos("I7", 1);
    preparaCampos("I8", 9);
}

function dificil_2() {
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


//Solucoes

var solucao_facil_1 = [2, 1, 8, 3, 9, 6, 7, 4, 5, 4, 9, 6, 1, 5, 7, 8, 3, 2, 7, 5, 3, 2, 8, 4, 1, 9, 6, 1, 8, 5, 7, 6, 3, 4, 2, 9, 3, 7, 4, 9, 2, 8, 5, 6, 1, 9, 6, 2, 4, 1, 5, 3, 7, 8, 5, 3, 1, 6, 7, 2, 9, 8, 4, 6, 4, 9, 8, 3, 1, 2, 5, 7, 8, 2, 7, 5, 4, 9, 6, 1, 3]
var solucao_facil_2 = [4, 2, 7, 8, 6, 5, 9, 1, 3, 9, 1, 5, 2, 4, 3, 6, 8, 7, 6, 8, 3, 7, 9, 1, 2, 5, 4, 8, 7, 1, 6, 2, 9, 3, 4, 5, 3, 4, 9, 1, 5, 8, 7, 2, 6, 2, 5, 6, 3, 7, 4, 8, 9, 1, 5, 9, 8, 4, 3, 7, 1, 6, 2, 1, 3, 2, 5, 8, 6, 4, 7, 9, 7, 6, 4, 9, 1, 2, 5, 3, 8]
var solucao_facil_3 = [7, 3, 6, 8, 1, 5, 4, 2, 9, 4, 5, 1, 6, 9, 2, 3, 7, 8, 9, 8, 2, 3, 7, 4, 5, 6, 1, 6, 2, 7, 5, 3, 1, 9, 8, 4, 8, 1, 3, 4, 6, 9, 2, 5, 7, 5, 9, 4, 2, 8, 7, 6, 1, 3, 2, 4, 8, 7, 5, 3, 1, 9, 6, 3, 6, 9, 1, 2, 8, 7, 4, 5, 1, 7, 5, 9, 4, 6, 8, 3, 2]
var solucao_facil_4 = [4, 1, 5, 9, 6, 2, 3, 7, 8, 7, 6, 3, 1, 8, 5, 4, 2, 9, 9, 2, 8, 3, 7, 4, 5, 6, 1, 8, 3, 1, 6, 4, 9, 2, 5, 7, 6, 7, 2, 5, 3, 1, 9, 8, 4, 5, 4, 9, 8, 2, 7, 6, 1, 3, 3, 9, 6, 2, 1, 8, 7, 4, 5, 1, 5, 7, 4, 9, 6, 8, 3, 2, 2, 8, 4, 7, 5, 3, 1, 9, 6]

var solucao_medio_1 = [8, 9, 4, 1, 3, 6, 5, 7, 2, 5, 2, 7, 9, 4, 8, 6, 3, 1, 1, 6, 3, 7, 2, 5, 8, 4, 9, 6, 5, 1, 4, 7, 3, 9, 2, 8, 2, 4, 9, 5, 8, 1, 7, 6, 3, 7, 3, 8, 2, 6, 9, 4, 1, 5, 3, 8, 2, 6, 9, 4, 1, 5, 7, 9, 1, 6, 3, 5, 7, 2, 8, 4, 4, 7, 5, 8, 1, 2, 3, 9, 6]
var solucao_medio_2 = [8, 3, 2, 1, 5, 7, 6, 4, 9, 1, 9, 6, 2, 8, 4, 3, 7, 5, 7, 4, 5, 3, 9, 6, 8, 2, 1, 9, 8, 4, 6, 7, 2, 1, 5, 3, 2, 5, 7, 8, 3, 1, 9, 6, 4, 6, 1, 3, 5, 4, 9, 7, 8, 2, 3, 7, 8, 4, 1, 5, 2, 9, 6, 4, 2, 9, 7, 6, 3, 5, 1, 8, 5, 6, 1, 9, 2, 8, 4, 3, 7]
var solucao_medio_3 = [1, 3, 5, 8, 4, 9, 7, 6, 2, 9, 4, 6, 5, 7, 2, 3, 8, 1, 7, 2, 8, 1, 3, 6, 4, 5, 9, 6, 9, 4, 3, 2, 8, 5, 1, 7, 8, 1, 2, 4, 5, 7, 9, 3, 6, 3, 5, 7, 9, 6, 1, 8, 2, 4, 2, 6, 9, 7, 8, 3, 1, 4, 5, 5, 8, 1, 2, 9, 4, 6, 7, 3, 4, 7, 3, 6, 1, 5, 2, 9, 8]
var solucao_medio_4 = [5, 1, 3, 6, 7, 2, 9, 8, 4, 8, 7, 2, 5, 4, 9, 6, 1, 3, 6, 9, 4, 8, 3, 1, 2, 5, 7, 7, 3, 5, 2, 8, 4, 1, 9, 6, 4, 6, 9, 1, 5, 7, 8, 3, 2, 2, 8, 1, 3, 9, 6, 7, 4, 5, 3, 4, 7, 9, 2, 8, 5, 6, 1, 1, 5, 8, 7, 6, 3, 4, 2, 9, 9, 2, 6, 4, 1, 5, 3, 7, 8]

var solucao_dificil_1 = [6, 5, 3, 2, 4, 7, 9, 1, 8, 7, 9, 2, 5, 8, 1, 3, 4, 6, 1, 8, 4, 6, 9, 3, 2, 5, 7, 2, 7, 8, 3, 1, 4, 5, 6, 9, 5, 4, 1, 9, 6, 2, 7, 8, 3, 3, 6, 9, 8, 7, 5, 4, 2, 1, 8, 1, 7, 4, 5, 9, 6, 3, 2, 9, 3, 5, 1, 2, 6, 8, 7, 4, 4, 2, 6, 7, 3, 8, 1, 9, 5]
var solucao_dificil_2 = [9, 5, 6, 8, 3, 1, 4, 2, 7, 2, 7, 8, 6, 4, 9, 1, 3, 5, 1, 4, 3, 7, 2, 5, 9, 8, 6, 5, 9, 1, 4, 8, 6, 3, 7, 2, 4, 8, 7, 2, 1, 3, 5, 6, 9, 3, 6, 2, 5, 9, 7, 8, 4, 1, 6, 2, 9, 3, 5, 4, 7, 1, 8, 8, 3, 5, 1, 7, 2, 6, 9, 4, 7, 1, 4, 9, 6, 8, 2, 5, 3]
var solucao_dificil_3 = [9, 5, 6, 7, 2, 4, 1, 3, 8, 4, 2, 8, 3, 1, 6, 9, 7, 5, 7, 1, 3, 8, 9, 5, 6, 4, 2, 3, 6, 4, 1, 5, 8, 7, 2, 9, 1, 7, 9, 2, 4, 3, 5, 8, 6, 2, 8, 5, 6, 7, 9, 3, 1, 4, 5, 9, 2, 4, 3, 1, 8, 6, 7, 8, 4, 1, 9, 6, 7, 2, 5, 3, 6, 3, 7, 5, 8, 2, 4, 9, 1]
var solucao_dificil_4 = [7, 4, 5, 3, 9, 6, 2, 1, 8, 9, 3, 6, 2, 8, 1, 7, 4, 5, 2, 1, 8, 7, 4, 5, 9, 6, 3, 5, 6, 9, 1, 2, 4, 3, 8, 7, 4, 2, 3, 9, 7, 8, 6, 5, 1, 8, 7, 1, 5, 6, 3, 4, 2, 9, 3, 8, 7, 4, 5, 2, 1, 9, 6, 1, 5, 2, 6, 3, 9, 8, 7, 4, 6, 9, 4, 8, 1, 7, 5, 3, 2]
