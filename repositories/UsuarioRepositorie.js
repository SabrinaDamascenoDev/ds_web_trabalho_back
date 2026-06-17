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

    async alterarSenha(senhaAtual, novaSenha) {
        const usuario = db.prepare(
            "SELECT * FROM usuarios WHERE id = 1"
        ).get();

        if (!usuario) {
            return {
                sucesso: false,
                mensagem: "Usuário não encontrado"
            };
        }

        if (usuario.senha !== senhaAtual) {
            return {
                sucesso: false,
                mensagem: "Senha atual incorreta"
            };
        }

        db.prepare(`
            UPDATE usuarios
            SET senha = ?
            WHERE id = 1
        `).run(novaSenha);

        return {
            sucesso: true,
            mensagem: "Senha atualizada com sucesso"
        };
    }
}

module.exports = new UsuarioRepository();