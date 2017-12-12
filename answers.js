// Answers for Datatypes
// 1.
//Boolean.
const lightSwitch = true;

// 2.
// String:
const userEmail = "user@emaildomain.com";

// Or a key/value pair on an object (with the value equal to a string representing
// the email address):
const user = {
  emailAddress: "user@emaildomain.com"
}

// 3.
// Array (becuase I don't know how I would arrange the "hull", "laser blast" as key/value properties):
const spaceship = [
  "hull",
  "laser blasters",
  "tractor beam",
  "warp drive"
]

// 4.
// Array:
const studentNames = [
  "Lillian",
  "Fred",
  "Tim"
]

// 5.
// Array of objects:
const studentNames2 = [
  {name: "Lillian", location: "Austin, TX"},
  {name: "Fred", location: "Nashville, TN"},
  {name: "Tim", location: "Nashville, TN"}
]
// 6.
// Array of objects with a nested array on the objects for the list of fav tv shows:

const studentNames3 = [
  {name: "Lillian", location: "Austin, TX", favTvShows: []},
  {name: "Fred", location: "Nashville, TN", favTvShows: ["Murder She Wrote", "Stranger Things"]},
  {name: "Tim", location: "Nashville, TN", favTvShows: ["60 Minutes", "Law and Order"]}
]

// Answers for Take it Easy

// 1.
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// 2.
rainbowColors[4];

// 3.
const lillian = {
  favoriteFood: "Curry",
  hobby: "play piano",
  hometown: "Austin, TX",
  favoriteDatatype: "Array"
}

// 4.
lillian.hobby;

// Answers for Crazy Object!

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// 1.
console.log(crazyObject.taco[1].salsa[5]);

// 2.
console.log(crazyObject.larry.quotes[0]);

// 3.
console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4.
console.log(crazyObject.larry.nicknames[1]);

// 5.
console.log(crazyObject.larry.characters[1]);

// Answer for Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// Answer for Bond Films

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

const bondTitles = [];

for (let i = 0; i < bondFilms.length; i++) {
  bondTitles.push(bondFilms[i]["title"]);
}

console.log(bondTitles);


// Per the wording of the question I am assuming that the entire film object of the odd-numbered
// year bond films should be on the oddBonds array (not just the title like in the last problem)
const oddBonds = [];

for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i]["year"] % 2 !== 0) {
    oddBonds.push(bondFilms[i]);
  }
}
let bondFranchiseGross = 0;

for (let i = 0; i < bondFilms.length; i++) {
  let gross = bondFilms[i]["gross"].split(",").join("");
  let updatedGross = Number(gross.slice(1, gross.length));
  bondFranchiseGross = bondFranchiseGross + updatedGross;
}

console.log(bondFranchiseGross);

// Answer to Hungry For More?
const determineMostInfrequentBond = () => {
  const bondActorFrequency = {}
  for (let i = 0; i < bondFilms.length; i++) {
    let matchCount = 0;
    for (let key in bondActorFrequency) {
      if (bondFilms[i]["actor"] === key) {
        bondActorFrequency[key] = bondActorFrequency[key] + 1;
        matchCount++;
      }
    }
    if (matchCount === 0) {
      bondActorFrequency[bondFilms[i]["actor"]] = 1;
    }
  }
  let actorInLeastFilms = "";
  let leastNumOfFilms = bondFilms.length;
  for (let key in bondActorFrequency) {
    if (leastNumOfFilms > bondActorFrequency[key]) {
      actorInLeastFilms = key;
      leastNumOfFilms = bondActorFrequency[key]
    }
  }
  for (let i = 0; i < bondFilms.length; i++) {
    if (bondFilms[i]["actor"] === actorInLeastFilms) {
      return bondFilms[i];
    }
  }
}

determineMostInfrequentBond();
