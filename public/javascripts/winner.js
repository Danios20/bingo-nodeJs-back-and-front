const PORTNODEJS = 8080;
/*Función para empezar un juego nuevo */
const startAgain = () => {
  console.log("play again");
  const btnPlayAgain = document.getElementById("idPlayAgain");
  btnPlayAgain.addEventListener("click", () => {
    window.location.assign(`http://localhost:${PORTNODEJS}/login`);
  });
};

startAgain();
