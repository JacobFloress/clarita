const btnInicio = document.querySelector('#btnInicial');
const message = document.querySelector('#message');

const messages = [
  "De todas las vidas, de todas las lineas de tiempo, todos los millones, trillones, sixtillones, veite-mil-millones de galaxias, nosotros cruzamos caminos...Tu y yo. Estamos compartiendo esta vida. ¿Cuantas son las posibilidades?. Disfruta de tu cumpleaños mi vida! Te Quiero <3",
  "Que si vales la pena? Creo yo que con 'valer' la pena te quedas corta mi amor. Tú vales cada esfuerzo, cada intento, cada lucha, cada obstáculo. Tú vales toda la espera. Vales más de lo que yo soy capaz de expresar. Te deseo lo mejor princesa en este dia tan especial para mi y para ti! no pares de sonreir :) Me encantas :3",
  "Eres tú, has sido tú en los últimos meses desde que llegaste a mi vida, eres tu a las 2 de la mañana o a las 6 de la tarde, eres tú cuando despierto, eres tú cuando duermo. Eres tú... Ya son 23 vueltas mi amor!!! Disfruta mucho de tu dia! Te Amo ♡"
]

btnInicio.addEventListener('click', function() {
  const c = setTimeout(() => {
    document.querySelector('.flowers').classList.remove("not-loaded");
    document.querySelector('#inital-box').classList.add("hide");
    document.querySelector('.message-box').classList.add("show");

    message.textContent = messages[randomizeMessage()]
    clearTimeout(c);
  }, 1000);
});


function randomizeMessage() {
  var numeroAleatorio = Math.floor(Math.random() * messages.length);
  return numeroAleatorio
}
