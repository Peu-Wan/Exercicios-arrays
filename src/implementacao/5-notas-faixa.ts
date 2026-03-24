function contarNotasNaFaixa( notas : number[], media : number) : string {
    let filtro : number = 0
    
    const minimo : number = media * 0.9
    const maximo: number = media * 1.1;

    notas.forEach(nota => {
        nota >= minimo && nota <= maximo ? filtro++ : 0 
    });
        
    return `notas que condizem com o filtro: ${filtro} `;
}

console.log(contarNotasNaFaixa([7.5, 8.0, 8.2, 9.0, 6.0, 8.5], 7.0))