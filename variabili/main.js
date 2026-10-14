const materie = ['Storia', 'Matematica', 'Inglese', 'Informatica'];
const voti = [8, 9, 5, 4];
const presenze = [true, false, true, false];

const numeroVoti = voti.length;
let sommaVoti = 0;
let mediaVoti = 0;
let mediaPonderata = 0;

for (let i = 0; i < numeroVoti; i++) {
    console.log(materie[i] + ':' + voti[i] + presenze[i]);
    sommaVoti = sommaVoti + voti[i];
    mediaVoti = sommaVoti / numeroVoti;
}

for (let i = 0; i < numeroVoti; i++) {
    if (presenze[i]) {
        mediaPonderata = mediaPonderata + voti[i];
    }
}

mediaPonderata = mediaPonderata / numeroVoti;

console.log('Media voti:' + mediaVoti);
console.log('Media ponderata:' + mediaPonderata);
