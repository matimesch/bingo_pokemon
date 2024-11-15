// Función para manejar el clic en una celda
function toggleStrike(item) {
    // Togle the "strike" class on click
    item.classList.toggle("strike");
  
    // Actualizamos el contador
    updateCounter();
  
    // Guardamos el estado en localStorage
    saveStrikeState();
  }
  
  // Función para actualizar el contador de celdas tachadas
  function updateCounter() {
    const struckItems = document.querySelectorAll('.bingo-item.strike').length;
    document.getElementById('counter').textContent = struckItems;
  }
  
  // Función para guardar el estado de las celdas tachadas en localStorage
  function saveStrikeState() {
    const strikes = [];
    const items = document.querySelectorAll('.bingo-item');
    items.forEach((item, index) => {
      if (item.classList.contains("strike")) {
        strikes.push(index);  // Guardamos el índice de los ítems tachados
      }
    });
    localStorage.setItem("bingoState", JSON.stringify(strikes));  // Guardamos los índices en localStorage
  }
  
  // Función para cargar el estado de las celdas tachadas desde localStorage
  function loadStrikeState() {
    const savedState = localStorage.getItem("bingoState");
    if (savedState) {
      const strikes = JSON.parse(savedState);
      const items = document.querySelectorAll('.bingo-item');
      strikes.forEach(index => {
        items[index].classList.add("strike");  // Añadimos la clase "strike" a las celdas tachadas
      });
      updateCounter();  // Actualizamos el contador
    }
  }
  
  // Llamamos a la función para cargar el estado al inicio
  window.onload = loadStrikeState;
  
