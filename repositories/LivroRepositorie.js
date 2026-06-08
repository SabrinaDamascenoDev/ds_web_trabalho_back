const db = require("../database");
const LivroModel = require("../models/LivroModel");

class LivrosRepository {

    async listarTodos() {
        const rows = db.prepare(
            "SELECT * FROM livros"
        ).all();

        return rows.map(
            l => new LivroModel(
                l.id,
                l.titulo,
                l.autor,
                l.capa,
                l.genero,
                l.qtd_paginas,
                l.status,
                l.qtd_lido
            )
        );
    }
    async buscarPorId(id) {
        const l = db.prepare(
            "SELECT * FROM livros WHERE id = ?"
        ).get(id);

        if (!l) return null;

        return new LivroModel(
            l.id,
            l.titulo,
            l.autor,
            l.capa,
            l.genero,
            l.qtd_paginas,
            l.status,
            l.qtd_lido
        )
    }

    async criar(titulo, autor, capa, genero, qtd_paginas, status, qtd_lido) {
        const result = db.prepare(`
            INSERT INTO livros
            (titulo, autor, capa, genero, qtd_paginas, status, qtd_lido)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `).run(
            titulo,
            autor,
            capa,
            genero,
            qtd_paginas,
            status,
            qtd_lido,
        );

        return result.lastInsertRowid;
    }

    async atualizar(id, titulo, autor, capa, genero, qtd_paginas, status, qtd_lido) {
        const result = db.prepare(`
            UPDATE livros
            SET
                titulo = ?,
                autor = ?,
                capa = ?,
                genero = ?,
                qtd_paginas = ?,
                status = ?,
                qtd_lido = ?
            WHERE id = ?
        `).run(
            titulo,
            autor,
            capa,
            genero,
            qtd_paginas,
            status,
            qtd_lido,
            id
        );

        return result.changes > 0;
    }

    async deletar(id) {
        const result = db.prepare(
            "DELETE FROM livros WHERE id = ?"
        ).run(id);

        return result.changes > 0;
    }
}

module.exports = new LivrosRepository();