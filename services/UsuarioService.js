const usuarioRepository = require("../repositories/UsuarioRepositorie");

class UsuarioService {
    async buscarUsuario() {
        const usuario = await usuarioRepository.buscarUsuario();

        if (!usuario) {
            return {
                nome: "User",
                email: "",
                numero: ""
            };
        }

        return usuario;
    }

    async salvarUsuario(dados) {
        const salvo = await usuarioRepository.salvarUsuario(
            dados.nome,
            dados.email,
            dados.numero
        );

        return salvo;
    }
}

module.exports = new UsuarioService();
