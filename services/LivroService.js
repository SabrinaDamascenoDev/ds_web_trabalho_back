const livroRepository = require("../repositories/LivrosRepository");

class LivroService {

    async listarTodos() {
        const livros = await livroRepository.listarTodos();
        return livros;
    }

    async buscarPorId(id) {
        const livro = await livroRepository.buscarPorId(id);
        return livro;
    }

    async criar(titulo, autor, capa, genero, qtd_paginas, status) {
        const id = await livroRepository.criar(
            titulo,
            autor,
            capa,
            genero,
            qtd_paginas,
            status
        );

        return id;
    }

    async atualizar(id, titulo, autor, capa, genero, qtd_paginas, status) {
        const atualizado = await livroRepository.atualizar(
            id,
            titulo,
            autor,
            capa,
            genero,
            qtd_paginas,
            status
        );

        return atualizado;
    }

    async deletar(id) {
        const removido = await livroRepository.deletar(id);
        return removido;
    }
}

module.exports = new LivroService();