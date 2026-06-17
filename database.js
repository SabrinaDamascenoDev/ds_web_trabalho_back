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

db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        numero TEXT
    )
`);

try {
    db.prepare(`
        ALTER TABLE usuarios ADD COLUMN senha TEXT DEFAULT '123456'
    `).run();
} catch (erro) {
}

module.exports = db;