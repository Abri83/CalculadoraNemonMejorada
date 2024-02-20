function calculate() {
  var username = document.getElementById("username").value;
  var operand1 = document.getElementById("operand1").value;
  var operand2 = document.getElementById("operand2").value;
  var operand3 = document.getElementById("operand3").value;

  if (username === "") {
    document.getElementById("result").innerHTML = "Por favor, introduce tu nombre.";
    return;
  }

  if (operand3 !== "") {
    if (operand1 === "" || operand2 === "") {
      document.getElementById("result").innerHTML = "Por favor, introduce valores en Operand_1 y Operand_2.";
      return;
    }
  } else if (operand2 !== "") {
    if (operand1 === "") {
      document.getElementById("result").innerHTML = "Por favor, introduce un valor en Operand_1.";
      return;
    }
  } else if (operand1 !== "") {
    document.getElementById("result").innerHTML = "Por favor, introduce un valor en Operand_2.";
    return;
  } else {
    document.getElementById("result").innerHTML = "Por favor, introduce valores en Operand_1 y Operand_2.";
    return;
  }

  var result;
  if (!isNaN(operand1) && !isNaN(operand2)) {
    result = parseFloat(operand1) + parseFloat(operand2);
    if (operand3 !== "") {
      if (!isNaN(operand3)) {
        result += parseFloat(operand3);
      } else {
        document.getElementById("result").innerHTML = "Operando 3 no es un número válido.";
        return;
      }
    }
  } else {
    document.getElementById("result").innerHTML = "Al menos uno de los operandos no es un número válido.";
    return;
  }

  var previousUser = localStorage.getItem("previousUser");
  var previousOperation = localStorage.getItem("previousOperation");

  if (!previousUser || previousUser !== username) {
    localStorage.setItem("previousUser", username);
  }

  localStorage.setItem("previousOperation", result);

  if (previousUser && previousOperation && previousUser !== username) {
    document.getElementById("result").innerHTML = "Resultado: " + result + "<br>Operación realizada anteriormente por: " + previousUser;
  } else {
    document.getElementById("result").innerHTML = "Resultado: " + result;
  }

  // Reproducir sonido al hacer clic en el botón de calcular
  var buttonSound = document.getElementById("button-sound");
  buttonSound.currentTime = 0; // Reiniciar el sonido si ya se está reproduciendo
  buttonSound.play();
}
