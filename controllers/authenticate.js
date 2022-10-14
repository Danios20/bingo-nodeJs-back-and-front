/*Este controlador permite un usuario con sus credenciales*/
const { response, request } = require('express');
const User = require('../models/user.js');

const authenticate = (req = request, res = response) => {
   const username = req.body.userName
    const password = req.body.password
    console.log('password :>> ', password);
    console.log('userName :>> ', username);

    User.findOne({'userName': req.body.userName}, (err, user)=>{
        if (err) {
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
            console.log('err :>> ', err);
            
        } else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            
            User.isCorrectPassword(password, user.password, (err, result) => {
                if (err) {
                    console.log('user :>> ', user.password);
                    console.log('errPass :>> ', err);
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(result){
                    console.log('user.id :>> ', user.id);
                    res.redirect(`/game/${user.id}/lobby`);
                   
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA')
                }
            });
        }
    })
}

module.exports = authenticate;