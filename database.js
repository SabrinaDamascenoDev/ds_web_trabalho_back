const Database = require("better-sqlite3");

const db = new Database("livros.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS livros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        autor TEXT,
        capa TEXT,
        genero TEXT,
        qtd_paginas INTEGER,
        status TEXT,
        qtd_lido INTEGER
    )
`);

module.exports = db;