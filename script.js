// 1A.
const jedi = [];

// 1B
jedi[0] = "Luke";

// 1C.
 jedi.push("Obi-Wan Kenobi");

//  1D.
 jedi.unshift("Yoda")

//  1E.
console.log(jedi[1]);

// 1F.
jedi.pop("Obi-Wan Kenobi");

// 1G.
jedi.shift("Yoda");
console.log(jedi);

// 2A.
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

// 2B.
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

// 2C.
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// 2D.
console.log(starWarsVillians.slice(0,2));

// 3A.
const droids = {
    astromech: "R2-D2",
    protocal: "C-3P0",
    assassin: "IG-88"
}

// 3B.
console.log(droids[`astromech`]);

// 3C.
console.log(droids.protocal);

// 3D.
droids['assassin'] = "IG-11";
console.log(droids);