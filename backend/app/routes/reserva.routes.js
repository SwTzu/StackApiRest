module.exports = app => {
    const reservas = require("../controllers/reserva.controller.js");
    var router = require("express").Router();

    router.post("/", reservas.create);
    router.get("/", reservas.findAll);
    router.get("/:id", reservas.findOne);
    router.put("/:id", reservas.update);
    router.delete("/:id", reservas.delete);
    router.delete("/", reservas.deleteAll);
    app.use('/api/reservas', router);
  };