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
    async alterarSenha(dados) {
    if (dados.novaSenha !== dados.confirmarSenha) {
        return {
            sucesso: false,
            mensagem: "A nova senha e a confirmação não conferem"
        };
    }

    const resultado = await usuarioRepository.alterarSenha(
        dados.senhaAtual,
        dados.novaSenha
    );

        return resultado;
    }
}

module.exports = new UsuarioService();
