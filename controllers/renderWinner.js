/*Este controlador permite reenderizar la vista del jugador ganador*/
const { response, request } = require("express")

const renderWinner = (req = request, res = response) => {
    res.render("winner", {title: 'Winner', userName: req.params.userName})
}

module.exports = renderWinner;