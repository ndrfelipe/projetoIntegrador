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