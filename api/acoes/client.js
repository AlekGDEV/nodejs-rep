module.exports = {
    listar: () => {
        return [
            {
                id:1,
                nome:'Chuchu'
            },
            {
                id:2,
                nome:'Cachorro'
            }
        ];
    },

    cadastrar: () => {
        return 'Cadastrar cliente';
    },


    editar: () => {
        return 'Editar cliente'
    },

    excluir: () => {
        return 'Excluir cliente'
    }
}