let zucchine = [
    { varietà: "Verde", peso: 100, lunghezza: 20 },
    { varietà: "Gialla", peso: 150, lunghezza: 25 },
    { varietà: "Bianca", peso: 200, lunghezza: 15 },
    { varietà: "Arancione", peso: 120, lunghezza: 30 },
    { varietà: "Viola", peso: 180, lunghezza: 35 },
    { varietà: "Nera", peso: 220, lunghezza: 40 },
    { varietà: "Rosa", peso: 125, lunghezza: 50 },
    { varietà: "Azzurra", peso: 225, lunghezza: 55 },
    { varietà: "Marrone", peso: 50, lunghezza: 60 },
    { varietà: "Blu", peso: 110, lunghezza: 45 },
];

let pesoTotale = 0

zucchine.forEach(zucchina => {
    pesoTotale += zucchina.peso;
});

console.log("Il peso totale è di:", pesoTotale, "grammi");
