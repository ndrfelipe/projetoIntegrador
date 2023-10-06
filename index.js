//Função para calcular Iluminancia 1
function CalcularIluminancia1() {
  var R = parseFloat(document.getElementById("R").value)
  var Q = parseFloat(document.getElementById("Q").value)
  var T = parseFloat(document.getElementById("T").value)
  var P = parseFloat(document.getElementById("P").value)
  var N = parseFloat(document.getElementById("N").value)
  var M = parseFloat(document.getElementById("M").value)
  var calculo =  (R*(N-1)*(M-1)+Q*(N-1)+T*(M-1)+P)/(N*M)
  document.getElementById("resultadoIluminancia1").value = calculo.toFixed(2)
}

//Função para calcular Iluminancia 2



//Função para calcular Iluminancia 3
function CalcularIluminancia3() {
  var Qc = parseFloat(document.getElementById("Qc").value)
  var Pe = parseFloat(document.getElementById("Pe").value)
  var Nl = parseFloat(document.getElementById("Nl").value)
  var calculo = (Qc*(Nl-1)+Pe)/Nl
  document.getElementById("resultadoIluminancia3").value = calculo.toFixed(2)
}

//Função para calcular Iluminancia 4
function CalcularIluminancia4() {
  var RC = parseFloat(document.getElementById("RC").value)
  var QD = parseFloat(document.getElementById("QD").value)
  var TQ = parseFloat(document.getElementById("TQ").value)
  var PE = parseFloat(document.getElementById("PE").value)
  var NQ = parseFloat(document.getElementById("NQ").value)
  var MF = parseFloat(document.getElementById("MF").value)
  var calculo = (RC*NQ*(MF-1)+QD*NQ+TQ*(MF-1)+PE)/(MF*(NQ-1))
  document.getElementById("resultadoIluminancia4").value = calculo.toFixed(2)
}

//Função para calcular Iluminancia 5
function CalcularIluminancia5() {
  var QD = parseFloat(document.getElementById("QPc").value)
  var PE = parseFloat(document.getElementById("Pex").value)
  var NQ = parseFloat(document.getElementById("Nql").value)
  var calculo = (QD*NQ+PE)/(NQ+1)
  document.getElementById("resultadoIluminancia5").value = calculo.toFixed(2)
}

//Função para calcular Iluminancia 6
function CalcularIluminancia6() {
  var RPc = parseFloat(document.getElementById("RPc").value)
  var QDl = parseFloat(document.getElementById("QDl").value)
  var TDl = parseFloat(document.getElementById("TDl").value)
  var PPe = parseFloat(document.getElementById("PPe").value)
  var W = parseFloat(document.getElementById("W").value)
  var L = parseFloat(document.getElementById("L").value)
  var calculo = (RPc*(L-8)*(W-8)+8*QDl*(L-8)+8*TDl*(W-8)+64*PPe)/(W*L)
  document.getElementById("resultadoIluminancia6").value = calculo.toFixed(2)
}

//Função para calcular IBUTG 1
function CalcularAmbienteInternos() {
    var tbn = document.getElementById("tbn1").value
    var tg = document.getElementById("tg1").value
    var calculo =  (0.7 * tbn) + (0.3 * tg)
    document.getElementById("resultadoIBUTG1").value = calculo.toFixed(2)
}

//Função para calcular IBUTG 2
function CalcularAmbienteExternos() {
    var tbn2 = document.getElementById("tbn2").value
    var tg2 = document.getElementById("tg2").value
    var tbs = document.getElementById("tbs").value
    var calculo =   (0.7 * tbn2) + (0.2 * tg2) + (0.1 * tbs)
    document.getElementById("resultadoIBUTG2").value = calculo.toFixed(2)
}

// Função para calcular o Nível de Exposição ao Ruído (LAE) em dBA
function calcularLAE(niveisRuido, temposExposicao) {
    if (niveisRuido.length !== temposExposicao.length) {
      throw new Error("Os arrays de níveis de ruído e tempos de exposição devem ter o mesmo comprimento.");
    }

    const numPontos = niveisRuido.length;

    let soma = 0;
    for (let i = 0; i < numPontos; i++) {
      const tempoExposicaoHoras = temposExposicao[i];
      const nivelRuido_dBA = niveisRuido[i];
      soma += (tempoExposicaoHoras / 8) * Math.pow(10, nivelRuido_dBA / 10);
    }

    const LAE = 10 * Math.log10(soma);

    return LAE;
  }

  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const numPontos = parseInt(document.getElementById("numPontos").value);
    const niveisRuido = [];
    const temposExposicao = [];

    for (let i = 0; i < numPontos; i++) {
      const nivelRuido = parseFloat(document.getElementById(`nivelRuido${i}`).value);
      const tempoExposicao = parseFloat(document.getElementById(`tempoExposicao${i}`).value);

      niveisRuido.push(nivelRuido);
      temposExposicao.push(tempoExposicao);
    }

    try {
      const resultadoLAE = calcularLAE(niveisRuido, temposExposicao);
      document.getElementById("resultado").innerHTML = `O Nível de Exposição ao Ruído (LAE) é: ${resultadoLAE.toFixed(2)} dBA`;
    } catch (error) {
      console.error(error.message);
    }
  });

  // Gerar campos de entrada de acordo com o número de pontos de medição
  document.getElementById("numPontos").addEventListener("change", function() {
    const numPontos = parseInt(this.value);

    let html = "";
    for (let i = 0; i < numPontos; i++) {
      html += `<label for="nivelRuido${i}">Nível de Ruído (dBA) no ponto ${i + 1}:</label>`;
      html += `<input type="number" id="nivelRuido${i}" name="nivelRuido${i}" step="0.01"><br>`;
      html += `<label for="tempoExposicao${i}">Tempo de Exposição (horas) no ponto ${i + 1}:</label>`;
      html += `<input type="number" id="tempoExposicao${i}" name="tempoExposicao${i}" step="0.01"><br><br>`;
    }

    document.getElementById("pontosMedicao").innerHTML = html;
  });

  // cálculo de radiação

function CalcularRadiacaoPrimaria(){
  var lm = document.getElementById("lm").value
  var pt = document.getElementById("pt").value
  var fc = document.getElementById("fc").value
  var bg = document.getElementById("bg").value
  var fi = document.getElementById("fi").value
  var fe = document.getElementById("fe").value
  var calculo = ((lm * pt * fc - bg) *  fi * fe)
  document.getElementById("resultadoRad").value = calculo
}

function CalcularRadiacaoPrimaria2(){
  var lm2 = document.getElementById("lm2").value
  var t2 = document.getElementById("t2").value
  var pt2 = document.getElementById("pt2").value
  var fc2 = document.getElementById("fc2").value
  var bg2 = document.getElementById("bg2").value
  var fi2 = document.getElementById("fi2").value
  var fe2 = document.getElementById("fe2").value
  var calculo = ((lm2 / t2) *  3600) * pt2 *  fc2 - bg2 * fi2 * fe2
  document.getElementById("resultadoRad2").value = calculo
}