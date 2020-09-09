$(document).ready(function () {
    $('#apurar_votos').fadeOut();
    $('#btn_voto').click(function () {
        adicionarVoto($('#input_voto').val());
        $('#input_voto').text('');
    });
    $('#btn_apurar_votos').click(function () { return apurarVotos(); });
});
var nulos = 0;
var candidatosVotos = [{
        codigo: 1,
        votos: 0
    },
    {
        codigo: 2,
        votos: 0
    },
    {
        codigo: 3,
        votos: 0
    },
    {
        codigo: 4,
        votos: 0
    },
    {
        codigo: 5,
        votos: 0
    }];
var adicionarVoto = function (candidatoCod) {
    if (candidatoCod == 1 || candidatoCod == 2 || candidatoCod == 3 || candidatoCod == 4 || candidatoCod == 5)
        candidatosVotos.find(function (x) { return x.codigo == candidatoCod; }).votos++;
    else {
        if (window.confirm('Nenhum candidato com esse código, voto será anulado?')) {
            nulos++;
        }
    }
};
var calcularVencedor = function () {
    candidatosVotos.sort(function (a, b) { return b.votos - a.votos; });
    return candidatosVotos[0].codigo;
};
var apurarVotos = function () {
    $('#apurar_votos').fadeIn();
    $('#candidato1').html("Votos do candidato 1: " + candidatosVotos[0].votos);
    $('#candidato2').html("Votos do candidato 2: " + candidatosVotos[1].votos);
    $('#candidato3').html("Votos do candidato 3: " + candidatosVotos[2].votos);
    $('#candidato4').html("Votos do candidato 4: " + candidatosVotos[3].votos);
    $('#candidato5').html("Votos do candidato 5: " + candidatosVotos[4].votos);
    $('#nulos').html("Votos nulos: " + nulos);
    $('#vencedor').html("Candidato vencedor \u00E9 o do c\u00F3digo: " + calcularVencedor());
};
