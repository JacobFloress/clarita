const btnInicio = document.querySelector('#btnInicial');
const message = document.querySelector('#message');

const messages = [
  "De todas las vidas, de todas las lineas de tiempo, todos los millones, trillones, sixtillones, veite-mil-millones de galaxias, nosotros cruzamos caminos...Tu y yo. Estamos compartiendo esta vida. ¿Cuantas son las posibilidades?",
  "Que si vales la pena? Creo yo que con 'valer' la pena te quedas corta mi amor. Tú vales cada esfuerzo, cada intento, cada lucha, cada obstáculo. Tú vales toda la espera. Vales más de lo que yo soy capaz de expresar",
  "Descansa tu cabeza en mi pecho y escucharás a mi corazón decir que eres más que suficiente",
  "Qué loco no? Que los astronautas tengan que ir a la luna para ver el mundo y yo con solo verte a los ojos veo el universo",
  "Oye...quiero quedarme contigo, quizás somos muy jóvenes o nos falte mucho por vivir aún...La verdad eso no me importa, solo quiero quedarme contigo, no quiero otra sonrisa más que la tuya, solo te quiero a ti porque me haces muy feliz",
  "Eres tú, has sido tú en los últimos meses desde que llegaste a mi vida, eres tu a las 2 de la mañana o a las 6 de la tarde, eres tú cuando despierto, eres tú cuando duermo. Eres tú."
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
