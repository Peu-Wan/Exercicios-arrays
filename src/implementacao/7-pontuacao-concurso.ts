interface competidor{
 nome:string,
 pontos:number
}

function listarAprovados(competidores :competidor[]) : competidor[] {
    let aprovados: competidor[] = [];

    competidores.forEach(competidor => {
        if (competidor.pontos > 70) {
            aprovados.push(competidor);
        }
    });


    return aprovados;
}

const listaCompetidores: competidor[] = [
    { nome: "Pedro", pontos: 85 },    // Aprovado
    { nome: "Mariana", pontos: 68 },  // Reprovado
    { nome: "Lucas", pontos: 92 },    // Aprovado
    { nome: "Ana", pontos: 70 },      // Reprovado (limite é > 70)
    { nome: "João", pontos: 45 },     // Reprovado
    { nome: "Clara", pontos: 71 }     // Aprovado
];

console.log("--- Lista de Aprovados ---");
console.log(listarAprovados(listaCompetidores));