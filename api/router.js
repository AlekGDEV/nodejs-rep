const produto = require('./acoes/produto');
const cliente = require('./acoes/client');

module.exports = (url) => {
    if(url === '/cliente'){
        return cliente.listar();
    }

    if(url === '/produtos'){
        return produto.listar();
    }

    return 'Error 404';
}