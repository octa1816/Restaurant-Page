export default function menu() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="page-container">
      <h1>Menú</h1>
      <ul class="menu-list">
        <li>Milanesa con papas</li>
        <li>Pizza napolitana</li>
        <li>Empanadas salteñas</li>
      </ul>
      <button class="menu-button">Hacé tu pedido</button>
    </div>
  `;
  return div;
}
