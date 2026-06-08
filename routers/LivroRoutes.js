const express = require("express");
const livroService = require("../services/LivroService");

const router = express.Router();

router.use(
    (request, response, next) => {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        next();
    }
);

router.get(
    "/",
    async (request, response) => {
        const livros = await livroService.listarTodos();
        response.json(livros);
    }
);

router.get(
    "/:id",
    async (request, response) => {
        const livro = await livroService.buscarPorId(
            request.params.id
        );

        if (!livro) {
            return response.status(404).json({
                mensagem: "Livro não encontrado"
            });
        }

        response.json(livro);
    }
);

router.post(
    "/",
    async (request, response) => {
        console.log("BODY:", request.body);
        const id = await livroService.criar(
            request.body
        );

        response.status(201).json({
            mensagem: "Livro criado com sucesso",
            id
        });
    }
);

router.put(
    "/:id",
    async (request, response) => {
        const atualizado = await livroService.atualizar(
            request.params.id,
            request.body
        );

        response.json({
            atualizado
        });
    }
);

router.delete(
    "/:id",
    async (request, response) => {
        const removido = await livroService.deletar(
            request.params.id
        );

        response.json({
            removido
        });
    }
);

module.exports = router;