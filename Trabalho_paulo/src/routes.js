const express = require("express")

const routes = express.Router()
const UserController = require("./Contrrrroller/UserController")

routes.post("/", UserController.store)
routes.post("/usuario", UserController.store)

routes.get("/usuario", UserController.list)

routes.get("/usuario/:id", UserController.index)
//atualizar
routes.put("/usuario/:id", UserController.update)
//deletar 
routes.delete("/usario/:id", UserController.destroy)
module.exports = routes
