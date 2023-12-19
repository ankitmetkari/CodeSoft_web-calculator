// Add your JavaScript code here

function appendToInput(value) {
    document.getElementById('input').value += value;
  }
  
  function calculate() {
    try {
      const input = document.getElementById('input').value;
      const result = eval(input);
      document.getElementById('output').value = result;
      addToHistory(input, result);
    } catch (error) {
      document.getElementById('output').value = 'Error';
    }
  }
  
  function addToHistory(input, result) {
    const historyContainer = document.getElementById('historyContainer');
    const historyItem = document.createElement('div');
    historyItem.textContent = `${input} = ${result}`;
    historyContainer.appendChild(historyItem);
  }
  function clearHistory() {
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = '';
  }
  
  function clearInput() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
  }
  
  function deleteLastCharacter() {
    const inputField = document.getElementById('input');
    inputField.value = inputField.value.slice(0, -1);
  }
  