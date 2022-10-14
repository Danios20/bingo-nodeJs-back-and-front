/*Este controlador permite reenderizar la vista del lobby*/
const { response } = require("express")

const renderLobby = (req, res = response) => {
    res.render("lobby", {title: 'Lobby', user: req.params.id})
}

module.exports = renderLobby;