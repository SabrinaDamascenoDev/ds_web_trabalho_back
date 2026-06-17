const db = require("../database");

class UsuarioRepository {
    async buscarUsuario() {
        const usuario = db.prepare(
            "SELECT * FROM usuarios WHERE id = 1"
        ).get();

        return usuario;
    }

    async salvarUsuario(nome, email, numero) {
        const usuarioExistente = db.prepare(
            "SELECT * FROM usuarios WHERE id = 1"
        ).get();

        if (usuarioExistente) {
            const result = db.prepare(`
                UPDATE usuarios
                SET nome = ?, email = ?, numero = ?
                WHERE id = 1
            `).run(nome, email, numero);

            return result.changes > 0;
        }

        const result = db.prepare(`
            INSERT INTO usuarios (id, nome, email, numero)
            VALUES (1, ?, ?, ?)
        `).run(nome, email, numero);

        return result.changes > 0;
    }
}

module.exports = new UsuarioRepository();