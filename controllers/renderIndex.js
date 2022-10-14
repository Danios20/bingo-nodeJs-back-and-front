/*Este controlador permite reenderizar la vista del login*/
const { response } = require("express")

const renderIndex = (req, res = response) => {
    res.render("index", {title: 'Sign in'})
}

module.exports = renderIndex;