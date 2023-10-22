function ordenar() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);

    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)) {
        if (n1 > n2) {
            var temp = n1;
            n1 = n2
            n2 = temp
        }
        if (n2 > n3) {
            var temp = n2;
            n2 = n3
            n3 = temp
        }
        if (n3 > n4) {
            var temp = n3;
            n3 = n4
            n4 = temp
        }
        if (n1 > n2) {
            var temp = n1;
            n1 = n2
            n2 = temp
        }
        if (n2 > n3) {
            var temp = n2;
            n2 = n3
            n3 = temp
        }
        if (n1 > n2) {
            var temp = n1;
            n1 = n2
            n2 = temp
        }
        alert(`Sua lista ordenada é: ${n1}, ${n2}, ${n3}, ${n4}`)
    } else {
        alert("Insira numeros validos em todos os campos")
    }
}

function resetar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("n4").value = "";
}