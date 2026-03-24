export function intercalarVetores(vetorA: number[], vetorB: number[]): number[] {
  const vetorResultante: number[] = [];
  
  for (let i = 0; i < 10; i++) {
     vetorResultante.push(vetorA[i]);
     vetorResultante.push(vetorB[i]);
  }

  return vetorResultante;
}


const v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const v2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const resultado = intercalarVetores(v1, v2);
console.log("Vetor Intercalado:", resultado);