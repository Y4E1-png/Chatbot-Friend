
const input = document.querySelector ("#introduce-texto");

const formButton = document.querySelector ("#boton-enviar");

const showMessageSection = document.querySelector ("#message-section");

const form = document.querySelector("#footer-form");

const refreshButton = document.querySelector("#refresh-button")


const submit = (e) => {

  e.preventDefault ();
  
  const typeText = input.value;

  input.value = "";

  const messageUser = document.createElement("p");

  messageUser.textContent = typeText;
  
  messageUser.classList.add("message", "message--user");

  showMessageSection.append(messageUser);



  const botResponseDelayed = () => {
    
    const botResponse = getResponse (typeText);

    const messageBot = document.createElement("p");

    messageBot.textContent = botResponse;

    messageBot.classList.add("message", "message--bot");

    showMessageSection.append(messageBot);
  }

  setTimeout (botResponseDelayed, 1500)

};

form.addEventListener("submit", submit);


const responses = {
  "hola" : "Hola, que tal",
  "Hola" : "Hola, que tal",
  "¿Como estas?" : "Muy bien, ¿que tal tu?",
  "¿como estas?" : "Muy bien, ¿que tal tu?",
  "como estas?" : "Muy bien, ¿que tal tu?",
  "Como estas?" : "Muy bien, ¿que tal tu?",
  "Como estas" : "Muy bien, ¿que tal tu?",
  "como estas" : "Muy bien, ¿que tal tu?",
  "adios" : "¡Hasta la proxima!",
  "Adios" : "¡Hasta la proxima!",
  "que puedes hacer?" : "Puedo responder a preguntas basicas",
  "Que puedes hacer?" : "Puedo responder a preguntas basicas",
  "¿que puedes hacer?" : "Puedo responder a preguntas basicas",
  "¿Que puedes hacer?" : "Puedo responder a preguntas basicas",
};

const getResponse = (typeText) => {

  const answer = responses[typeText];
  
  if ( answer ) {
    return answer;
  } else {
    return "No conozco esa pregunta, prueba con: Hola, Adios, ¿Como estas? o ¿Que puedes hacer?";
  }

}  


const refreshPage = () => {
  showMessageSection.textContent = "";
}

refreshButton.addEventListener("click", refreshPage);