// function trocarImagemTradicional(novaImagem) {
//     document.getElementById("tradicional-img").src = novaImagem;
// }

// function trocarImagemNavalha(novaImagem) {
//     document.getElementById("navalha-img").src = novaImagem;
// }

// function trocarImagemBarba(novaImagem) {
//     document.getElementById("barba-img").src = novaImagem;
// }

// function trocarImagemBigode(novaImagem) {
//     document.getElementById("bigode-img").src = novaImagem;
// }

// Funções para trocar as imagens dos serviços
function trocarImagemTradicional(caminho) {
    document.getElementById('tradicional-img').src = caminho;
}

function trocarImagemNavalha(caminho) {
    document.getElementById('navalha-img').src = caminho;
}

function trocarImagemBarba(caminho) {
    document.getElementById('barba-img').src = caminho;
}

function trocarImagemBigode(caminho) {
    document.getElementById('bigode-img').src = caminho;
}

// Função genérica para retornar à imagem branca ao tirar o mouse
function trocarImagem(caminho) {
    // A função irá buscar todos os elementos e restaurar suas imagens para branco
    document.getElementById('tradicional-img').src = 'imagens/tradicional_branco.png';
    document.getElementById('navalha-img').src = 'imagens/navalha_branco.png';
    document.getElementById('barba-img').src = 'imagens/barba_branco.png';
    document.getElementById('bigode-img').src = 'imagens/bigode_branco.png';
}
