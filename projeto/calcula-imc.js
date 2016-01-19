// peso / altura * altura

/*var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");

var paciente2 = { 
    "peso" : tdPeso2.textContent,
    "altura" : tdAltura2.textContent
    };

var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");

var paciente = { 
    "peso" : tdPeso.textContent,
    "altura" : tdAltura.textContent
    }; */

//var pacientes = [paciente, paciente2];

var trsPacientes = document.getElementsByClassName("paciente");

var posicaoAtual = 0;

for(var posicaoAtual 0; posicaoAtual <= trsPacientes.length-1; posicaoAtual++) {
    var pacienteTr = trsPacientes[posicaoAtual];
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-alura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    
    var paciente = {nome : tdNome.textContent, peso: tdPeso.textContent, altura: tdAltura.textContent};
    
    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura); 
        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);
    } else {
        console.error("Altura é igual a zero");
    }
}


