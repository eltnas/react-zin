const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stockzin'
});

database.connect(err => {
    if (err) {
        console.log('Database connection error:', err); // log do erro
        throw err;
    }
    console.log('Conectado ao banco de dados!');
});

// Endpoint para registro de usuário
app.post('/register', (req, res) => {
    const { usuario, senha, nome, email } = req.body;
    const sql = 'INSERT INTO user (usuario, senha, nome, email) VALUES (?, ?, ?, ?)';
    database.query(sql, [usuario, senha, nome, email], (err, result) => {
        if (err) {
            console.log('Error during registration:', err); // log do erro
            return res.status(500).send(err);
        }
        res.send("Cadastrado com sucesso!");
    });
});

// Endpoint para login de usuário
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    const sql = 'SELECT * FROM user WHERE usuario = ? AND senha = ?';
    database.query(sql, [usuario, senha], (err, results) => {
        if (err) {
            console.log('Error during login:', err); // log do erro
            return res.status(500).send(err);
        }
        if (results.length > 0) {
            res.send("Login bem-sucedido!");
        } else {
            res.status(401).send("Usuário ou senha incorretos!");
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});
