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
// MENÇÃO HONROSA PARA JUCANALHA //
/* function calcularMedia(){
   
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    const n3 = parseInt(document.getElementById("n3").value);
    const n4 = parseInt(document.getElementById("n4").value);

    const resultado = (n1 + n2 + n3 + n4)/4
    
    if(resultado >= 70){
        alert(resultado+"   Aprovado")
    } else if (resultado <40){
        alert(resultado+"   Reprovado")
    } else {
        alert(resultado+"   Exame")

       let resultadoExame = parseInt(prompt("Qual a nota do seu exame?"))
        
       let resultado2 = (resultadoExame+resultado)/2;

       if(resultado2 >=50){
        alert(resultado2+"   Aprovado")
       } else{
        alert(resultado2+"   Reprovado")
       }

    }
} */