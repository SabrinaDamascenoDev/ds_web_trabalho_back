class LivroModel {
    
    constructor(id, titulo, autor, capa, genero, qtd_paginas, status, qtd_lido) {
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.capa = capa
        this.genero = genero
        this.qtd_paginas = qtd_paginas
        this.status = status
        this.qtd_lido = qtd_lido
    }

}

module.exports = LivroModel