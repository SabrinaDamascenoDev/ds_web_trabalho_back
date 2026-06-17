const express = require("express");
const usuarioService = require("../services/UsuarioService");

const router = express.Router();

router.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

router.get("/", async (request, response) => {
    const usuario = await usuarioService.buscarUsuario();
    response.json(usuario);
});

router.put("/", async (request, response) => {
    const salvo = await usuarioService.salvarUsuario(request.body);

    response.json({
        mensagem: "Dados atualizados com sucesso",
        salvo
    });
});

module.exports = router;