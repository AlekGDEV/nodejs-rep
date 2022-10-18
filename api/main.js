const http = require('http');

const produto = require('./acoes/produto');
const cliente = require('./acoes/client');
const router = require('./router')


const host = 'localhost';
const port = '12050';

//req = requisição.
//res = resposta.

//função que será executada sempre que houver uma requisição por parte do cliente
function execucao(req, res){
    //definindo o tipo de conteudo da resposta para json
    res.setHeader('Content-Type', 'application/json');


    if(req.url === '/teste'){
        res.end('Teste');
        return;
    }
    if(req.url === '/cliente'){
        res.end('Clientes');
        return;
    }

    res.end('erro 404');
}

//criando o servidor e definindo a função que será executada
const server = http.createServer(execucao)

//subindo o servidor pra ficar escutando as requisiçoes
server.listen(port, host, () => {
    console.log(`Servidor rodando no endereço http://${host}:${port}`);
});