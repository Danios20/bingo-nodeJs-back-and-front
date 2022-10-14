/*Este controlador permite crear un usuario con sus credenciales*/
const { request } = require('../app');
const User = require('../models/user');


 const createUser = (req, res,next) => {
  console.log('req.body :>> ', req.body);
  // const {inputFirstName, inputLastName,inputUserName,inputPassword,inputEmail,inputDateOfBirth,checkTerms} = req.body;
  const user = new User({
    firstName: req.body.inputFirstName,
    lastName: req.body.inputLastName,
    userName: req.body.inputUserName,
    password: req.body.inputPassword,
    email: req.body.inputEmail,
    dateOfBirth: req.body.inputDateOfBirth,
    checkTerms: req.body.checkTerms
    // inputFirstName, inputLastName,inputUserName,inputPassword,inputEmail,inputDateOfBirth,checkTerms
  });

user.save(err => {
  if(err){
    res.status(500).json('ERROR AL REGISTRAR AL USUARIO');
    console.log('err :>> ', err);
  }else{
    console.log('user :>> ', user);
    res.status(200).json(user);
  }
});



}

module.exports = createUser;
