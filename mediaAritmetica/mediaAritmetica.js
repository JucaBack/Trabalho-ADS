function calcularMedia() {
    const inputN1 = parseInt(document.getElementById("n1").value);
    const inputN2 = parseInt(document.getElementById("n2").value)
    const inputN3 = parseInt(document.getElementById("n3").value);
    const inputN4 = parseInt(document.getElementById("n4").value);
    const inputs = [inputN1, inputN2, inputN3, inputN4];
    const inputLabels = ["1º", "2º", "3º", "4º"];
    let invalidInputs = []

    for (let index = 0; index < inputs.length; index++) {
        if (isNaN(inputs[index])) {
          invalidInputs.push(`O campo ${inputLabels[index]} não é um número válido.`);
        } else if (inputs[index] < 0 || inputs[index] > 100) {
          invalidInputs.push(`O campo ${inputLabels[index]} está fora do intervalo de 0 a 100.`);
        }
      }

      if (invalidInputs.length > 0) {
        alert(invalidInputs.join("\n"));
        return;
      }
      
        const mediaRegular = (inputN1 + inputN2 + inputN3 + inputN4) / 4;


      if (mediaRegular >= 50) {
        alert("Sua média no período regular é: " + mediaRegular + ". Você está aprovado! :D");
      } else {
        const notaExame = parseInt(prompt("Informe a nota do exame:"));
        const mediaFinal = (mediaRegular + notaExame) / 2;
        if (mediaFinal >= 50) {
          alert("Sua média final é: " + mediaFinal + ". Você está aprovado após o exame! :)");
        } else {
          alert("Sua média final é: " + mediaFinal + ". Você está reprovado após o exame! :(");
        }
      }
}

function resetar() {
    document.getElementById("n1").value = '';
    document.getElementById("n2").value = '';
    document.getElementById("n3").value = '';
    document.getElementById("n4").value = '';
}
       
/*
            if (isNaN(inputN1)) {
              invalidInputs.push("O campo 1º não é um número válido.");
            } else if (inputN1 < 0 || inputN1 > 100) {
              invalidInputs.push("O campo 1º está fora do intervalo de 0 a 100.");
            }
            if (isNaN(inputN2)) {
              invalidInputs.push("O campo 2º não é um número válido.");
            } else if (inputN2 < 0 || inputN2 > 100) {
              invalidInputs.push("O campo 2º está fora do intervalo de 0 a 100.");
            }
            if (isNaN(inputN3)) {
              invalidInputs.push("O campo 3º não é um número válido.");
            } else if (inputN3 < 0 || inputN3 > 100) {
              invalidInputs.push("O campo 3º está fora do intervalo de 0 a 100.");
            }
            if (isNaN(inputN4)) {
              invalidInputs.push("O campo 4º não é um número válido.");
            } else if (inputN4 < 0 || inputN4 > 100) {
              invalidInputs.push("O campo 4º está fora do intervalo de 0 a 100.");
            }
    */