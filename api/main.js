

const http = require('http');

const produto = require('./acoes/produto');
const cliente = require('./acoes/client');

const host = 'localhost';
const port = '12050'

//req = requisição.
//res = resposta.

function execucao(req, res){
    resposta.end('Teste');
}

const server = http.createServer(execucao)

console.log(produto.listar());
console.log(cliente.listar());