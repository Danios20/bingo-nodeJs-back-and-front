/*Este controlador permite consultar un usuario*/
const { response, request } = require('express');
const User = require('../models/user.js');

const findUser = async (req=request, res = response) => {
    console.log("ENTRO");
    console.log('req.params.id :>> ', req.params.id);
    const data = await User.findOne({'_id':req.params.id})
    console.log('data :>> ', data);
    console.log('data._id :>> ', data._id);
    res.redirect(`${data._id}/${data.userName}`)
}

module.exports = findUser;