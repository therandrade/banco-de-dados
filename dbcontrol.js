import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarTabela (login, senha) {
    const db = await open ({
        filename: './banco.db',
        driver: sqlite3.Database
    });

    db.exec('CREATE TABLE IF NOT EXISTS login (id INTEGER PRIMARY KEY AUTOINCREMENT, login VARCHAR, senha VARCHAR)')
    db.run('INSERT INTO login (login, senha)VALUES (?,?)', [login, senha]);
    console.log('Dados inseridos com sucesso');
}
criarTabela('andrade', '1234');