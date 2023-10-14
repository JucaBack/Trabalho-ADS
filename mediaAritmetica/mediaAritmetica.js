function calcularMedia(){
   
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
}