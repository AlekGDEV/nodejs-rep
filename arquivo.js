let fs = require('fs');

// fs.writeFile('contatos.txt', 'Testando', () => {})
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

let alunos = [
    'Maria',
    'Chiquim',
    'Zezin',
    'Tiao',
];

let alunoConc = [];

fs.mkdir('exercicio01', () => {
    fs.mkdir(`exercicio01/${currentYear}`, () => {
        fs.mkdir(`exercicio01/${currentYear}/${currentMonth}`, () => {
            fs.mkdir(`exercicio01/${currentYear}/${currentMonth}/${currentDay}`, () => {
                alunos.map((cadaAluno) => {
                    alunoConc += `${cadaAluno}\n`;
                    return alunoConc;
                });
                fs.writeFile(`exercicio01/${currentYear}/${currentMonth}/${currentDay}/alunos.txt`, `${alunoConc}`, () => {});
            });
        });
    });
});





