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
                l.qtd_paginas,
                l.genero,
                l.status
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
            l.qtd_paginas,
            l.genero,
            l.status
        );
    }

    async criar(titulo, autor, capa, genero, qtd_paginas, status) {
        const result = db.prepare(`
            INSERT INTO livros
            (titulo, autor, capa, genero, qtd_paginas, status)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(
            titulo,
            autor,
            capa,
            genero,
            qtd_paginas,
            status
        );

        return result.lastInsertRowid;
    }

    async atualizar(id, titulo, autor, capa, genero, qtd_paginas, status) {
        const result = db.prepare(`
            UPDATE livros
            SET
                titulo = ?,
                autor = ?,
                capa = ?,
                genero = ?,
                qtd_paginas = ?,
                status = ?
            WHERE id = ?
        `).run(
            titulo,
            autor,
            capa,
            genero,
            qtd_paginas,
            status,
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