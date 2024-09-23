let alunos = [
    {nome:'Lucas', nota: 3.5},
    {nome:'Sara', nota: 10.0},
    {nome:'Matheus', nota: 7.5},
    {nome:'Leandro', nota: 5.5},
    {nome:'Samanta', nota: 6.0},
    {nome:'Leonardo', nota: 9.0},
    {nome:'Tavares', nota: 4.5},
    {nome:'Klebar', nota: 6.5},
    {nome:'Junior', nota: 8.0},
    {nome:'Fernado', nota: 7.0},
    {nome:'Marcos', nota: 6.5},
    {nome:'Ana Clara', nota: 9.0}
];

function filtroAprovados(alunos){
    return alunos.filter(aluno => aluno.nota >= 6);
}

let alunosAprovados = filtroAprovados(alunos);

console.log(alunosAprovados)