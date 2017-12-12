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

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
