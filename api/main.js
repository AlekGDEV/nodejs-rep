const http = require('http');

const produto = require('./acoes/produto');
const cliente = require('./acoes/client');

const host = 'localhost';
const port = '12050'

//req = requisição.
//res = resposta.

//função que será executada sempre que houver uma requisição por parte do cliente
function execucao(req, res){
    resposta.end('Teste');
}

//criando o servidor e definindo a função que será executada
const server = http.createServer(execucao)

//subindo o servidor pra ficar escutando as requisiçoes
server.listen(port, host, () => {})