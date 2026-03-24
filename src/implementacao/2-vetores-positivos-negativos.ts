function separarPositivosNegativo( vetor:number[]) : number[][] {

    let vetorPositivo: number[] = [];
    let vetorNegativo: number[] = [];

    for (let i = 0; i < vetor.length; i++) {

        if (vetor[i] >= 0) {
            vetorPositivo.push(vetor[i]);
        } else{
            vetorNegativo.push(vetor[i]);
        }
    }

     return [vetorNegativo, vetorPositivo]
} 

console.log(separarPositivosNegativo([-1,-2,-3,1,2,3,0]))