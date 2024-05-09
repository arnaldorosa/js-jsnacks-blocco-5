let arrayNumbers = [10, 20, 30, 40, 50, 60,];
let a = 2;
let b = 5;

let risultato = newElements(arrayNumbers, a, b);
console.log(risultato); 

function newElements(array, a, b) {
  
    let risultato = [];

    for (let i = a; i <= b; i++) {
        risultato.push(array[i]);
    }
    return risultato;
}

