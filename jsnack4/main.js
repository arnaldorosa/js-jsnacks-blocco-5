let array1 = ['a', 'b', 'c'];
let array2 = [1, 2, 3];
let combinazioneElemeti = newArray(array1, array2);
console.log(combinazioneElemeti); 

function newArray(array1, array2) {
    if (array1.length !== array2.length) {}

    let risultato = [];

    for (let i = 0; i < array1.length; i++) {
        risultato.push(array1[i]); 
        risultato.push(array2[i]); 
    }

    return risultato;
}

