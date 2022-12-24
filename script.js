const numberOfSeries = +prompt("Nechta serial kurdingiz", "");
const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("oxirgi kurgan serialingiz", ""),
    b = prompt("Nechchi baxo berasiz", "");
  if (a != null && b != null && a != "" && b != "") {
    seriesDB.series[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}
if (seriesDB.count < 5) {
  console.log("Kam serial kuribsiz");
} else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
  console.log("siz klassik tomoshabin ekansiz");
} else if (seriesDB.count >= 10) {
  console.log("Siz serialchi ekansiz");
} else {
  console.log("error");
}

console.log(seriesDB);
