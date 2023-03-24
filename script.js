// 3) Escreva um algoritmo para implementar uma Fila Circular. O algoritmo irá realizar as seguintes ações:
// a) aceitar 5 elementos na Fila
// b) imprimir os 5 elementos inseridos em A
// c) remover da Fila 2 elementos
// d) imprimir os elementos restantes da opção C
// e) Inserir 2 novos elementos na Fila
// f) Imprimir os elementos da Fila, após a operação E

const inputValues1 = document.getElementById("valuesInput");
const inputValues2 = document.getElementById("valuesInput2");

let inputArray = [];

function handleGetAndShowInputValue() {
  if (!inputValues1.disabled) {
    if (!inputValues1.value) {
      window.alert("Digite um valor válido");
    } else {
      inputArray.push(inputValues1.value);
    }
    if (inputArray.length === 5) {
      inputValues1.disabled = true;
      document.getElementById("btnAdd").disabled = true;
      document.getElementById("removeBtn").disabled = false;
      document.getElementById("valores").innerHTML = inputArray;
    }
    inputValues1.value = "";
  } else {
    if (!inputValues2.value) {
      window.alert("Digite um valor válido");
    } else {
      inputArray.push(inputValues2.value);
    }
    if (inputArray.length === 5) {
      inputValues2.disabled = true;
      document.getElementById("btnAdd2").disabled = true;
      document.getElementById("valores2").innerHTML = inputArray;
    }
    inputValues2.value = "";
  }
}

function handleRemoveTwoElements() {
  inputArray.splice(0, 2);
  document.getElementById("removeBtn").disabled = true;
  document.getElementById("valoresRemovidos").innerHTML = inputArray;
  document.getElementById("labelInput2").style.display = "block";
  document.getElementById("valuesInput2").disabled = false;
  document.getElementById("btnAdd2").disabled = false;
}
