function gerarVetorParesDobroImparesTriplo( vetorOriginal : number[] ): number[]{
    const vetorResultado: number[] = [];

    for (let i = 0; i < vetorOriginal.length; i++) {

        let contagemHumana = i + 1

        if ( contagemHumana % 2 == 0 ) {
            vetorResultado[i] = vetorOriginal[i] * 2
        } else{
            vetorResultado[i] = vetorOriginal[i] * 3
        }
    }

    return vetorResultado;
}

console.log(gerarVetorParesDobroImparesTriplo([1,2,3,4,5,6,7,8,9,10]))