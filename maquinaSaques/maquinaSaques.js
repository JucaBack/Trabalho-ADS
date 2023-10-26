function realizarSaque() {
    var valorSaque = parseFloat(document.getElementById("saque").value);

    if(!isNaN(valorSaque)) {

        if(valorSaque < 0) {
            alert("Saque negativo não é permitido. Por favor, insira um valor de saque valido")
        } else if(valorSaque >= 20) {
            var notas100 = Math.floor(valorSaque / 100);
            valorSaque %= 100;
    
            var notas50 = Math.floor(valorSaque / 50);
            valorSaque %= 50;
    
            var notas20 = Math.floor(valorSaque / 20);
            valorSaque %= 20;
    
            var texto = "Saque realizado com as seguintes notas:\n"
            if(notas100 > 0) {
                texto += `${notas100} nota(s) de R$ 100.00, `;
            }
            if(notas50 > 0) {
                texto +=`${notas50} nota(s) de R$ 50.00, `;
            }
            if(notas20 > 0) {
                texto +=`${notas20} nota(s) de R$ 20.00, `;
            }
            if(valorSaque > 0) {
                texto +=`o valor de R$ ${valorSaque.toFixed(2)} não pode ser atendido, esse valor não será debitado de sua conta.`;
            }
            alert(texto)
        }
        else{
            alert(`Saque não foi realizado pois o valor de R$ ${valorSaque.toFixed(2)} não pode ser atendido, esse valor não será debitado de sua conta.`)
        }
    } else {
        alert("Por favor, insira um valor de saque valido")
    }
}


function resetar() {
    document.getElementById("saque").value = " "
}