/*Este controlador permite reenderizar la vista del juego*/
const { response, request } = require("express")

const renderGame = (req = request, res = response) => {
    res.render("game", {title: 'Game',userId: req.params.id, userName: req.params.userName})
}

module.exports = renderGame;