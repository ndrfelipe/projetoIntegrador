//Função para calcular IBUTG 1
function CalcularAmbienteInternos() {
    var tbn = document.getElementById("tbn1").value
    var tg = document.getElementById("tg1").value
    var calculo =  (0.7 * tbn) + (0.3 * tg)
    document.getElementById("resultadoIBUTG1").value = calculo
}

//Função para calcular IBUTG 2
function CalcularAmbienteExternos() {
    var tbn2 = document.getElementById("tbn2").value
    var tg2 = document.getElementById("tg2").value
    var tbs = document.getElementById("tbs").value
    var calculo =   (0.7 * tbn2) + (0.2 * tg2) + (0.1 * tbs)
    document.getElementById("resultadoIBUTG2").value = calculo
}