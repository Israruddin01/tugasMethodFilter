const mobil = [
  {
    namaMobil: "Angkot",
    pintu: 3,
    tahun: 1943,
    merek: "sedan",
  },
  {
    namaMobil: "Bajaj",
    pintu: 2,
    tahun: 1970,
    merek: "nissan",
  },
  {
    namaMobil: "taxi",
    pintu: 4,
    tahun: 2008,
    merek: "nissan",
  },
  {
    namaMobil: "lamborgini",
    pintu: 2,
    tahun: 2007,
    merek: "nissan",
  },
];

let dataMobil = prompt("masukan merek mobil");

const merekMobil = mobil.filter((mobil) => mobil.merek === dataMobil);
console.log(merekMobil);
