const livroRepository = require("../repositories/LivroRepositorie");

class LivroService {

    async listarTodos() {
        const livros = await livroRepository.listarTodos();
        return livros;
    }

    async buscarPorId(id) {
        const livro = await livroRepository.buscarPorId(id);
        return livro;
    }

    async criar(livro) {
        const id = await livroRepository.criar(
            livro.titulo,
            livro.autor,
            livro.capa,
            livro.genero,
            livro.qtd_paginas,
            livro.status,
            livro.qtd_lido
        );

        return id;
    }

    async atualizar(id, titulo, autor, capa, genero, qtd_paginas, status, qtd_lido) {
        const atualizado = await livroRepository.atualizar(
            id,
            titulo,
            autor,
            capa,
            genero,
            qtd_paginas,
            status,
            qtd_lido
        );

        return atualizado;
    }

    async deletar(id) {
        const removido = await livroRepository.deletar(id);
        return removido;
    }
}

module.exports = new LivroService();