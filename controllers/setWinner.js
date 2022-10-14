/*Este controlador permite mostrar el ganador del juego*/
const { response, request } = require('express');
const User = require('../models/user.js');

const setWinner = async (req = request, res = response) => {
    User.findOne({'_id': req.params.id}, (err, user)=>{
        if (err) {
            res.status(500).send('ERROR EN EL SERVIDOR');
            console.log('err :>> ', err);      
        }else{
            // res.status(200).json(user)
            console.log('USER :>> ', user);
             // res.redirect(`/game/${user.id}/lobby`);
            res.redirect(`/game/${user.userName}/winner`);
        }
    })
}

module.exports = setWinner;