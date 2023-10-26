function calcularIMC() {
    var peso = parseFloat(document.getElementById("n1").value);
    var altura = parseFloat(document.getElementById("n2").value)

    altura = altura / 100;
    var imc = peso / (altura * altura)
    var imcCorreto = imc.toFixed(2);
    
    if(!isNaN(peso) && !isNaN(altura)) {
        if(imc <= 18.5) {
            alert(`Abaixo do peso, seu IMC é : ${imcCorreto}`)
        } else if (imc >= 18.6 && imc <= 24.9) {
            alert(`Peso ideal, parabéns, seu IMC é : ${imcCorreto}`)
        } else if (imc >= 25 && imc <= 29.9) {
            alert(`Levemente acima do peso, seu IMC é : ${imcCorreto}`)
        } else if (imc >= 30 && imc <= 34.5){
            alert(`Obesidade leve, grau I, seu IMC é : ${imcCorreto}`)
        } else if (imc >= 35 && imc <= 39.9){
            alert(`Obesidade severa, grau II, seu IMC é : ${imcCorreto}`)
        } else {
            alert(`Obesidade mórbida, grau III, seu IMC é : ${imcCorreto}`)
        }
    } else {
        alert("Por favor, insira os valores dos campos corretamente.")
    }
}

function resetar() {
    document.getElementById("n1").value = " ";
    document.getElementById("n2").value = " ";
}