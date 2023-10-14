let numeroAtual = 0;
let numeroAnterior = undefined;
let operador = undefined;

function atualizar(parametro){
    // conteúdo da div "display" = numeroAtual //
    if (numeroAnterior !== undefined ) { 
        document.getElementById("display").textContent = numeroAnterior + ' ' + operador + ' ' + numeroAtual;
    } else{
        document.getElementById("display").textContent = numeroAtual;
    }
    console.log(numeroAtual)
}
function qualNumero(numero) {
    if (numeroAtual === 0 || numeroAtual === -0 || operador === '=') {
        numeroAtual = numero;
        operador = undefined;
    } else {    
        const numeroAtualString = numeroAtual.toString() + numero.toString();
        numeroAtual = parseInt(numeroAtualString);
    }
    atualizar()
}   

function limpar() {
    operador = undefined
    numeroAtual = 0
    numeroAnterior = undefined;
    atualizar()
}

function qualOperador(parametroOperador) {
    if (typeof numeroAtual === 'string') {
        numeroAtual = 0
    }
    numeroAnterior = numeroAtual;
    operador = parametroOperador;
    numeroAtual = '';   
    atualizar()
}

function igual() {
    switch (operador) {
        case '+':
            numeroAtual = numeroAnterior + numeroAtual;
            break;
        case '-':
            numeroAtual = numeroAnterior - numeroAtual;
            break;
        case 'x':
            numeroAtual = numeroAnterior * numeroAtual;
            break;
        case '÷':
            if(numeroAtual === 0){
                numeroAtual = 'Erro'
            } else {
                numeroAtual = numeroAnterior / numeroAtual;
            }
            break;                           
    }
    numeroAnterior = undefined;
    atualizar()
    operador = '='
}