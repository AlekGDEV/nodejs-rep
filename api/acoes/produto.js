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
        return 'Cadastrar produto';
    },


    editar: () => {
        return 'Editar produto'
    },

    excluir: () => {
        return 'Excluir produto'
    }
}