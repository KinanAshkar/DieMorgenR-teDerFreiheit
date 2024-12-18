const element = document.querySelector(".container");

const arr = [
  "Die",
  "Morgenröte",
  "der",
  "Freiheit : ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "Das",
  "Unrecht",
  "ist",
  "gefallen",
  "das",
  "Leid",
  "vorbei, ",
  "Das",
  "Volk",
  "atmet",
  "den",
  "Morgen",
  "des",
  "Lichts",
  "herbei. ",
  "Die",
  "Jahre",
  "der",
  "Dunkelheit",
  "vergingen",
  "im",
  "Nichts, ",
  "Und",
  "das",
  "Licht",
  "erfüllte",
  "das",
  "Haus",
  "der",
  "Treue",
  "schlicht. ",
  "Die",
  "Ketten",
  "der",
  "Unterdrückung",
  "zerbrachen",
  "mit",
  "Gewalt, ",
  "Die",
  "Fahnen",
  "der",
  "Gerechtigkeit",
  "wurden",
  "aufgestellt",
  "laut",
  "und",
  "bald. ",
  "Oh",
  "Scham,",
  "sei",
  "der",
  "Puls",
  "der",
  "Würde",
  "rein, ",
  "Eine",
  "Stimme",
  "die",
  "von",
  "Klarheit",
  "mag",
  "sein. ",
  "Freiheit",
  "singt,",
  "Gerechtigkeit",
  "blüht, ",
  "Ein",
  "Volk",
  "lebt",
  "ohne",
  "Kummer,",
  "das",
  "Glück",
  "es",
  "sieht.",
  " ",
  " ",
  " ",
  " ",
  " ",
];

let counter = 0;
let letter = 0;

function getInfo() {
  letter++;
  element.innerHTML = `<h1> ${arr[counter].slice(0, letter)}</h1>`;
  if (letter === arr[counter].length) {
    counter++;
    letter = 0;
  }
  if (counter === arr.length) {
    counter = 0;
  }
  setTimeout(getInfo, 400);
}

getInfo();
