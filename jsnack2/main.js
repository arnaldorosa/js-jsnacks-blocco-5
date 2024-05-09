const zucchine = [
    { varietà: "Zucchina arancione", peso: 50, lunghezza: 14 },
    { varietà: "Zucchina marrone", peso: 60, lunghezza: 18 },
    { varietà: "Zucchina tonda", peso: 40, lunghezza: 12 },
    { varietà: "Zucchina lunga", peso: 70, lunghezza: 20 },
    { varietà: "Zucchina viola", peso: 30, lunghezza: 16 },
    { varietà: "Zucchina gialla", peso: 35, lunghezza: 14 },
    { varietà: "Zucchina bianca", peso: 55, lunghezza: 17 },
    { varietà: "Zucchina nera", peso: 15, lunghezza: 19 },
    { varietà: "Zucchina azzurra", peso: 20, lunghezza: 22 },
    { varietà: "Zucchina blu", peso: 25, lunghezza: 13 }
];

let zucchineCorte = [];
let zucchineLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
    let zucchina = zucchine[i];
    if (zucchina.lunghezza < 15) {
        zucchineCorte.push(zucchina);
    } else {
        zucchineLunghe.push(zucchina);
    }
}

let pesoTotaleZucchineCorte = 0;
for (let i = 0; i < zucchineCorte.length; i++) {
    pesoTotaleZucchineCorte += zucchineCorte[i].peso;
}

let pesoTotaleZucchineLunghe = 0;
for (let i = 0; i < zucchineLunghe.length; i++) {
    pesoTotaleZucchineLunghe += zucchineLunghe[i].peso;
}

console.log(`Il peso totale delle zucchine corte è di: ${pesoTotaleZucchineCorte} kg`);
console.log(`Il peso totale delle zucchine lunghe è di: ${pesoTotaleZucchineLunghe} kg`);
