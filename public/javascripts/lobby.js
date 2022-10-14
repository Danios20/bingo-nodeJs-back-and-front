console.log("hola mundo");
let param = null;
const PORTJAVA = 8090;
const PORTNODEJS = 8080;
/*Evento para ingresar a un juego */
  document.getElementById("playBtn").addEventListener('click', async function() {
    const idMongo = document.getElementById("idMongo").textContent;
    console.log('idMongo :>> ', idMongo);

    location.href=`http://localhost:${PORTNODEJS}/game/play/${idMongo}`

  })