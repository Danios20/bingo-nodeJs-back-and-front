console.log("hola mundo");
let param = null;
const PORTNODEJS = 8080;
const PORTJAVA = 8090;
/*Evento para crear el registro de un usuario */
document
  .getElementById("buttonSignIn")
  .addEventListener("click", async function () {
    var status = null;
    const modalStatus = document.getElementById("pTransactionStatus");
    const form = document.getElementById("signInForm");
    let signInFormData = new FormData(form);
    console.log("signInFormData :>> ", signInFormData);
    console.log("signInFormData :>> ", signInFormData.get("inputUserName"));
    param = signInFormData.get("inputUserName");

    if (
      signInFormData.get("inputFirstName") === "" ||
      signInFormData.get("inputLastName") === "" ||
      signInFormData.get("inputUserName") === "" ||
      signInFormData.get("inputPassword") === "" ||
      signInFormData.get("inputEmail") === "" ||
      signInFormData.get("inputDateOfBirth") === "" ||
      signInFormData.get("checkTerms") === ""
    ) {
      modalStatus.innerText = "POR FAVOR LLENA TODOS LOS CAMPOS";
    } else {
      const data = new URLSearchParams(signInFormData);
    /*Fecht para enviar los datos del registro del usuaro através del formulario */
      await fetch(`http://localhost:${PORTNODEJS}/login`, {
        method: "POST",
        // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data,
      })
        .then((res) =>
          res.json().then((data) => ({ status: res.status, body: data }))
        )
        .then(async (res) => {
            
          console.log("res.status2 :>> ", res.status);

          if (res.status == 200) {
            console.log("res :>> ", res);
            modalStatus.innerText = `¡Hola, te has registrado de forma exitosa`;
            const idMongo = res.body._id;
            await fetch(`http://localhost:${PORTJAVA}/user/${idMongo}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'}
            }).then(res => res.json())
            .then(res => {
                console.log('res :>> ', res);
            })
          } else {
            modalStatus.innerText = `¡Hola, el nombre de usuario que acabas de ingresar no esta disponible!`;
          }
        });
    }
  });
/*Evento para hacer login */
document
  .getElementById("loginBtn")
  .addEventListener("click", async function () {
    const loginForm = document.getElementById("loginFormId");
    let loginFormData = new FormData(loginForm);
    console.log("signInFormData :>> ", loginFormData);
    const data = new URLSearchParams(loginFormData);
    /*Fetch para autenticar login */
    await fetch(`http://localhost:${PORT}/login/authenticate`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {});
  });
