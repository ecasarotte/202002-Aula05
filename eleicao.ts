$(document).ready(() => {
    $('#apurar_votos').fadeOut();

    $('#btn_voto').click(() => {
        adicionarVoto($('#input_voto').val());
        $('#input_voto').text('');
    });

    $('#btn_apurar_votos').click(() => apurarVotos());
});

let nulos: number = 0;
let candidatosVotos: any = [{
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

const adicionarVoto: any = (candidatoCod: number) => {
    if (candidatoCod == 1 || candidatoCod == 2 || candidatoCod == 3 || candidatoCod == 4 || candidatoCod == 5)
        candidatosVotos.find(x => x.codigo == candidatoCod).votos++;
    else {
        if (window.confirm('Nenhum candidato com esse código, voto será anulado?')) {
            nulos++;
        }
    }
}

const calcularVencedor: any = () => {
    candidatosVotos.sort((a, b) => b.votos - a.votos);
    return candidatosVotos[0].codigo;
};

const apurarVotos: any = () => {
    $('#apurar_votos').fadeIn();
    $('#candidato1').html(`Votos do candidato 1: ${candidatosVotos[0].votos}`);
    $('#candidato2').html(`Votos do candidato 2: ${candidatosVotos[1].votos}`);
    $('#candidato3').html(`Votos do candidato 3: ${candidatosVotos[2].votos}`);
    $('#candidato4').html(`Votos do candidato 4: ${candidatosVotos[3].votos}`);
    $('#candidato5').html(`Votos do candidato 5: ${candidatosVotos[4].votos}`);
    $('#nulos').html(`Votos nulos: ${nulos}`);

    $('#vencedor').html(`Candidato vencedor é o do código: ${calcularVencedor()}`);
}

