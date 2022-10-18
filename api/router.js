module.exports = () => {
    if(url === '/cliente'){
        return 'Listar clientes'
    }

    if(url === '/produtos'){
        return 'Listar produtos'
    }

    return 'Error 404';
}