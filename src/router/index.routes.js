import home from "../Pages/home";
import menu from "../Pages/menu";
import contact5 from "../Pages/contact";


const router = (route) => {
  const principal = document.getElementById("roott");

  principal.innerHTML = ''; // limpia todo

  switch (route) {
    case '#home':
      return principal.appendChild(home());
    case '#menu':
      return principal.appendChild(menu())
    case '#contact':
      return principal.appendChild(contact5())
    default:
      return principal.textContent = 'Ruta no reconocida';
  }
};

export { router };
