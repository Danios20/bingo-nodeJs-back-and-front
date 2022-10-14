console.log("hola mundo");
let param = null;
const PORTNODEJS = 8080;
const PORTJAVA = 8090;

const setValuesDetailUserBoard = (
  ballotsListUser,
  ballotsMarkList,
  min,
  max,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5
) => {
  let newBallotList = [];
  for (let index = min; index <= max; index++) {
    const ballot = ballotsListUser[index];
    newBallotList.push(ballot);
  }
  if (min == 10 && max == 13) {
    btn1.value = newBallotList[0];
    btn2.value = newBallotList[1];
    btn3.value = "BINGO";
    btn4.value = newBallotList[2];
    btn5.value = newBallotList[3];
  } else {
    btn1.value = newBallotList[0];
    btn2.value = newBallotList[1];
    btn3.value = newBallotList[2];
    btn4.value = newBallotList[3];
    btn5.value = newBallotList[4];
  }

  for (let index = 0; index < ballotsMarkList.length; index++) {
    const element = ballotsMarkList[index];
    // console.log('element :>> ', element);
    // console.log('btn1.value :>> ', btn1.value);
    // console.log('btn2.value :>> ', btn2.value);
    // console.log('btn3.value :>> ', btn3.value);
    // console.log('btn4.value :>> ', btn4.value);
    // console.log('btn5.value :>> ', btn5.value);

    switch (String(element)) {
      case btn1.value:
        console.log("entro");
        btn1.classList.add("markBallotBtn");
        break;
      case btn2.value:
        console.log("entro");
        btn2.classList.add("markBallotBtn");
        break;
      case btn3.value:
        console.log("entro");
        btn3.classList.add("markBallotBtn");
        break;
      case btn4.value:
        console.log("entro");
        btn4.classList.add("markBallotBtn");
        break;
      case btn5.value:
        console.log("entro");
        btn5.classList.add("markBallotBtn");
        break;
    }
  }
};

const validateMarkBallot = (btnBallot, res) => {
  btnBallot.addEventListener("click", async () => {
    const idBallot = btnBallot.value;
    const idDetailGame = res.idDetailGame;
    console.log("idBallot :>> ", idBallot);
    console.log("idDetailGame :>> ", idDetailGame);

    await fetch(
      `http://localhost:${PORTJAVA}/markBallot/${idDetailGame}/${idBallot}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res :>> ", res.RESOLVE);
        if (res.RESOLVE) {
          btnBallot.classList.add("markBallotBtn");
        } else {
          alert(`La balota que intenta marcar, no ha salido`);
        }
      });
  });
};

// let numero=5;



const validateWinner = (btnSuccess, res) => {
  btnSuccess.addEventListener("click", async () => {
    const idDetailGame = res.idDetailGame;
    console.log("idDetailGame :>> ", idDetailGame);

    await fetch(`http://localhost:${PORTJAVA}/findWinner/${idDetailGame}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res :>> ", res);
        if (res.WINNER) {
          console.log('res.WINNER :>> ', res.WINNER);
        } else {
          alert(`QUEDASTE DESCALIFICADO ${res.DESQUALIFIED}`);
          // http://localhost:8080/login
          window.location.assign(`http://localhost:${PORTNODEJS}/login`);
        }
      });
  });
};

const starGame = async () => {
  console.log("window.location.search :>> ", window.location.pathname);
  let URL = window.location.pathname;
  console.log("object :>> ", URL.split("/", 4));
  let idMongo = URL.split("/", 4);
  console.log("idMongo :>> ", idMongo[3]);
  await fetch(`http://localhost:${PORTJAVA}/startGame/${idMongo[3]}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("RES :>> ", res);

      const thIdGame = document.getElementById("thIdGame");
      thIdGame.innerHTML = res.idGame;

      let ballotsListUser = res.detailUserborad;
      let ballotsMarkList = res.ballotsMarkList;
      const btnB1 = document.getElementById("B1");
      const btnB2 = document.getElementById("B2");
      const btnB3 = document.getElementById("B3");
      const btnB4 = document.getElementById("B4");
      const btnB5 = document.getElementById("B5");

      const btnI1 = document.getElementById("I1");
      const btnI2 = document.getElementById("I2");
      const btnI3 = document.getElementById("I3");
      const btnI4 = document.getElementById("I4");
      const btnI5 = document.getElementById("I5");

      const btnN1 = document.getElementById("N1");
      const btnN2 = document.getElementById("N2");
      const btnN3 = document.getElementById("N3");
      const btnN4 = document.getElementById("N4");
      const btnN5 = document.getElementById("N5");

      const btnG1 = document.getElementById("G1");
      const btnG2 = document.getElementById("G2");
      const btnG3 = document.getElementById("G3");
      const btnG4 = document.getElementById("G4");
      const btnG5 = document.getElementById("G5");

      const btnO1 = document.getElementById("O1");
      const btnO2 = document.getElementById("O2");
      const btnO3 = document.getElementById("O3");
      const btnO4 = document.getElementById("O4");
      const btnO5 = document.getElementById("O5");
      setValuesDetailUserBoard(
        ballotsListUser,
        ballotsMarkList,
        0,
        4,
        btnB1,
        btnB2,
        btnB3,
        btnB4,
        btnB5
      );
      setValuesDetailUserBoard(
        ballotsListUser,
        ballotsMarkList,
        5,
        9,
        btnI1,
        btnI2,
        btnI3,
        btnI4,
        btnI5
      );
      setValuesDetailUserBoard(
        ballotsListUser,
        ballotsMarkList,
        10,
        13,
        btnN1,
        btnN2,
        btnN3,
        btnN4,
        btnN5
      );
      setValuesDetailUserBoard(
        ballotsListUser,
        ballotsMarkList,
        14,
        18,
        btnG1,
        btnG2,
        btnG3,
        btnG4,
        btnG5
      );
      setValuesDetailUserBoard(
        ballotsListUser,
        ballotsMarkList,
        19,
        23,
        btnO1,
        btnO2,
        btnO3,
        btnO4,
        btnO5
      );

      const detailBingoBoard = document.querySelector("#detailBingoBoard");
      const ballotsBingoList = res.detailUserBingoboard;

      // for (const ballot of ballotsBingoList) {
      //   console.log("ballot :>> ", ballot);
      //   const divBallot = document.createElement("div");
      //   divBallot.setAttribute(
      //     "style",
      //     "background-color:red;border-color: gray;border-width: 1px; border-style: groove;height: 35px; width:35px;  border-radius: 50%; display: inline-block;"
      //   );
      //   divBallot.textContent = ballot.ballot.letter + ballot.ballot.number;
      //   detailBingoBoard.insertAdjacentElement("afterbegin", divBallot);
      // }
      validateMarkBallot(btnB1, res);
      validateMarkBallot(btnB2, res);
      validateMarkBallot(btnB3, res);
      validateMarkBallot(btnB4, res);
      validateMarkBallot(btnB5, res);
      validateMarkBallot(btnI1, res);
      validateMarkBallot(btnI2, res);
      validateMarkBallot(btnI3, res);
      validateMarkBallot(btnI4, res);
      validateMarkBallot(btnI5, res);
      validateMarkBallot(btnN1, res);
      validateMarkBallot(btnN2, res);
      validateMarkBallot(btnN4, res);
      validateMarkBallot(btnN5, res);
      validateMarkBallot(btnG1, res);
      validateMarkBallot(btnG2, res);
      validateMarkBallot(btnG3, res);
      validateMarkBallot(btnG4, res);
      validateMarkBallot(btnG5, res);
      validateMarkBallot(btnO1, res);
      validateMarkBallot(btnO2, res);
      validateMarkBallot(btnO3, res);
      validateMarkBallot(btnO4, res);
      validateMarkBallot(btnO5, res);

      const btnSuccess = document.getElementById("btnSuccess");
      validateWinner(btnSuccess, res);
      const idGame = res.idGame;
      console.log('idGame :>> ', idGame);

      let returnWinner = setInterval(async () => {
        await fetch(`http://localhost:${PORTJAVA}/returnWinner/${idGame}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log("res :>> ", res);
            if (res.WINNER) {
              // alert(`EL GANADOR ES: ${res.WINNER}`);
              clearInterval(returnWinner);
              console.log("se ejecuto");
              window.location.assign(`http://localhost:${PORTNODEJS}/game/winner/${res.WINNER}`);
              fetch(`http://localhost:${PORTJAVA}/disableGame/${idGame}`, {
               method: "POST",
                headers: { "Content-Type": "application/json" },
              }).then((res) => res.json())
              .then((res) => {
                console.log('disableGame :>> ', res);
              })
              // res.redirect(`/game/${res.WINNER}/winner`);
              
            }
          });
      }, 1000);
      var increment=0;
      let returnBallotsBingo = setInterval(async () => {
        
        await fetch(`http://localhost:${PORTJAVA}/returnBingoBoard/${idGame}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log('BALLOTS_BINGO :>> ', res);
            const ballot = res.BALLOTS_BINGO
            // console.log("BALLOTS_BINGO :>> ", res.BALLOTS_BINGO.length);
            if (res.BALLOTS_BINGO.length==0) {
              // alert(`EL GANADOR ES: ${res.WINNER}`);
              // clearInterval(returnBallotsBingo);
              console.log("BINGO BOARD EMPTY");
              // window.location.assign(`http://localhost:${PORTNODEJS}/game/winner/${res.WINNER}`);
              // res.redirect(`/game/${res.WINNER}/winner`);
              
            } else{
              if (increment == ballot.length) {
                console.log("No se han sacado ballotas");
              } else {
                console.log('increment :>> ', increment);
                console.log("BINGO BOARD NOT NULL");
                
                  console.log("ballot :>> ", ballot);
                  const divBallot = document.createElement("div");
                  divBallot.setAttribute(
                    "style",
                    "background-color:rgb(255,0,0);border-color: gray;border-width: 1px; border-style: groove;height: 35px; width:35px;  border-radius: 50%; display: inline-block;"
                  );
                  // divBallot.textContent = ballot.ballot.letter + ballot.ballot.number;
                  divBallot.textContent = ballot[increment];
                  detailBingoBoard.insertAdjacentElement("afterbegin", divBallot);
                  increment++;
              }
              
            }
          });
      }, 100);

      
    });
};

const btnTakeBallot = document.getElementById("btnTakeBallot");
btnTakeBallot.addEventListener("click", async () => {
  await fetch(`http://localhost:${PORTJAVA}/takeBallot`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.Messagee) {
        alert(res.Messagee);
      }
    });
});

starGame();
