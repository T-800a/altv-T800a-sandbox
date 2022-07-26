var color_grps = [
    /*
   { text: "Metallic", id: 1 },
   { text: "Matte", id: 2 },
   { text: "Worm", id: 3 },
   { text: "Utility", id: 4 },
   { text: "Divers", id: 5 }
*/ "Metallic",
    "Matte",
    "Worm",
    "Utility",
    "Divers"
];
var wheelsTypeArray = [
    //   { id: -1, text: "Stock" },
    {
        id: 0,
        text: "Sport"
    },
    {
        id: 1,
        text: "Muscle"
    },
    {
        id: 2,
        text: "Lowrider"
    },
    {
        id: 3,
        text: "SUV"
    },
    {
        id: 4,
        text: "OffRoad"
    },
    {
        id: 5,
        text: "Tuner"
    },
    {
        id: 6,
        text: "Bike"
    },
    {
        id: 7,
        text: "HighEnd"
    },
    {
        id: 8,
        text: "Bennys Ogriginal"
    },
    {
        id: 9,
        text: "Bennys Bespoke"
    },
    {
        id: 10,
        text: "Open Wheel"
    },
    {
        id: 11,
        text: "Street"
    },
    {
        id: 12,
        text: "Track"
    }
];
var wheelsArray = [
    // ---------- SPORT
    {
        id: 0,
        type: 0,
        text: "Default"
    },
    {
        id: 1,
        type: 0,
        text: "Inferno"
    },
    {
        id: 2,
        type: 0,
        text: "Deep Five"
    },
    {
        id: 3,
        type: 0,
        text: "Lozspeed Mk.V"
    },
    {
        id: 4,
        type: 0,
        text: "Diamond Cut"
    },
    {
        id: 5,
        type: 0,
        text: "Chrono"
    },
    {
        id: 6,
        type: 0,
        text: "Feroci RR"
    },
    {
        id: 7,
        type: 0,
        text: "FiftyNine"
    },
    {
        id: 8,
        type: 0,
        text: "Mercie"
    },
    {
        id: 9,
        type: 0,
        text: "Synthetic Z"
    },
    {
        id: 10,
        type: 0,
        text: "Organic Type 0"
    },
    {
        id: 11,
        type: 0,
        text: "Endo v.1"
    },
    {
        id: 12,
        type: 0,
        text: "GT One"
    },
    {
        id: 13,
        type: 0,
        text: "Duper 7"
    },
    {
        id: 14,
        type: 0,
        text: "Uzer"
    },
    {
        id: 15,
        type: 0,
        text: "GroundRide"
    },
    {
        id: 16,
        type: 0,
        text: "S Racer"
    },
    {
        id: 17,
        type: 0,
        text: "Venum"
    },
    {
        id: 18,
        type: 0,
        text: "Cosmo"
    },
    {
        id: 19,
        type: 0,
        text: "Dash VIP"
    },
    {
        id: 20,
        type: 0,
        text: "Ice Kid"
    },
    {
        id: 21,
        type: 0,
        text: "Ruff Weld"
    },
    {
        id: 22,
        type: 0,
        text: "Wangan Master"
    },
    {
        id: 23,
        type: 0,
        text: "Super Five"
    },
    {
        id: 25,
        type: 0,
        text: "Split Six"
    },
    {
        id: 24,
        type: 0,
        text: "Endo v.2"
    },
    {
        id: 26,
        type: 0,
        text: "Inferno"
    },
    {
        id: 27,
        type: 0,
        text: "Deep Five"
    },
    {
        id: 28,
        type: 0,
        text: "Lozspeed Mk.V"
    },
    {
        id: 29,
        type: 0,
        text: "Diamond Cut"
    },
    {
        id: 30,
        type: 0,
        text: "Chrono"
    },
    {
        id: 31,
        type: 0,
        text: "Feroci RR"
    },
    {
        id: 32,
        type: 0,
        text: "FiftyNine"
    },
    {
        id: 33,
        type: 0,
        text: "Mercie"
    },
    {
        id: 34,
        type: 0,
        text: "Synthetic Z"
    },
    {
        id: 35,
        type: 0,
        text: "Organic Type 0"
    },
    {
        id: 36,
        type: 0,
        text: "Endo v.1"
    },
    {
        id: 37,
        type: 0,
        text: "GT One"
    },
    {
        id: 38,
        type: 0,
        text: "Duper 7"
    },
    {
        id: 39,
        type: 0,
        text: "Uzer"
    },
    {
        id: 40,
        type: 0,
        text: "GroundRide"
    },
    {
        id: 41,
        type: 0,
        text: "S Racer"
    },
    {
        id: 42,
        type: 0,
        text: "Venum"
    },
    {
        id: 43,
        type: 0,
        text: "Cosmo"
    },
    {
        id: 44,
        type: 0,
        text: "Dash VIP"
    },
    {
        id: 45,
        type: 0,
        text: "Ice Kid"
    },
    {
        id: 46,
        type: 0,
        text: "Ruff Weld"
    },
    {
        id: 47,
        type: 0,
        text: "Wangan Master"
    },
    {
        id: 48,
        type: 0,
        text: "Super Five"
    },
    {
        id: 49,
        type: 0,
        text: "Endo v.2"
    },
    {
        id: 50,
        type: 0,
        text: "Split Six"
    },
    // ---------- MUSCLE
    {
        id: 0,
        type: 1,
        text: "Default"
    },
    {
        id: 1,
        type: 1,
        text: "Classic Five"
    },
    {
        id: 2,
        type: 1,
        text: "Dukes"
    },
    {
        id: 3,
        type: 1,
        text: "Muscle Freak"
    },
    {
        id: 4,
        type: 1,
        text: "Kracka"
    },
    {
        id: 5,
        type: 1,
        text: "Azreal"
    },
    {
        id: 6,
        type: 1,
        text: "Mecha"
    },
    {
        id: 7,
        type: 1,
        text: "Black Top"
    },
    {
        id: 8,
        type: 1,
        text: "Drag SPL"
    },
    {
        id: 9,
        type: 1,
        text: "Revolver"
    },
    {
        id: 10,
        type: 1,
        text: "Classic Rod"
    },
    {
        id: 11,
        type: 1,
        text: "Fairlie"
    },
    {
        id: 12,
        type: 1,
        text: "Spooner"
    },
    {
        id: 13,
        type: 1,
        text: "Five Star"
    },
    {
        id: 14,
        type: 1,
        text: "Old School"
    },
    {
        id: 15,
        type: 1,
        text: "El Jefe"
    },
    {
        id: 16,
        type: 1,
        text: "Dodman"
    },
    {
        id: 17,
        type: 1,
        text: "Six Gun"
    },
    {
        id: 18,
        type: 1,
        text: "Mercenary"
    },
    {
        id: 19,
        type: 1,
        text: "Classic Five"
    },
    {
        id: 20,
        type: 1,
        text: "Dukes"
    },
    {
        id: 21,
        type: 1,
        text: "Muscle Freak"
    },
    {
        id: 22,
        type: 1,
        text: "Kracka"
    },
    {
        id: 23,
        type: 1,
        text: "Azreal"
    },
    {
        id: 24,
        type: 1,
        text: "Mecha"
    },
    {
        id: 26,
        type: 1,
        text: "Drag SPL"
    },
    {
        id: 25,
        type: 1,
        text: "Black Top"
    },
    {
        id: 28,
        type: 1,
        text: "Classic Rod"
    },
    {
        id: 27,
        type: 1,
        text: "Revolver"
    },
    {
        id: 29,
        type: 1,
        text: "Fairlie"
    },
    {
        id: 30,
        type: 1,
        text: "Spooner"
    },
    {
        id: 31,
        type: 1,
        text: "Five Star"
    },
    {
        id: 33,
        type: 1,
        text: "El Jefe"
    },
    {
        id: 32,
        type: 1,
        text: "Old School"
    },
    {
        id: 34,
        type: 1,
        text: "Dodman"
    },
    {
        id: 35,
        type: 1,
        text: "Six Gun"
    },
    {
        id: 36,
        type: 1,
        text: "Mercenary"
    },
    // ---------- LOWRIDER
    {
        id: 0,
        type: 2,
        text: "Default"
    },
    {
        id: 1,
        type: 2,
        text: "Flare"
    },
    {
        id: 2,
        type: 2,
        text: "Wired"
    },
    {
        id: 3,
        type: 2,
        text: "Triple Golds"
    },
    {
        id: 4,
        type: 2,
        text: "Big Worm"
    },
    {
        id: 5,
        type: 2,
        text: "Seven Fives"
    },
    {
        id: 6,
        type: 2,
        text: "Split Six"
    },
    {
        id: 7,
        type: 2,
        text: "Fresh Mesh"
    },
    {
        id: 8,
        type: 2,
        text: "Lead Sled"
    },
    {
        id: 9,
        type: 2,
        text: "Turbine"
    },
    {
        id: 10,
        type: 2,
        text: "Super Fin"
    },
    {
        id: 12,
        type: 2,
        text: "Dollar"
    },
    {
        id: 11,
        type: 2,
        text: "Classic Rod"
    },
    {
        id: 13,
        type: 2,
        text: "Dukes"
    },
    {
        id: 14,
        type: 2,
        text: "Low Five"
    },
    {
        id: 15,
        type: 2,
        text: "Gooch"
    },
    {
        id: 16,
        type: 2,
        text: "Flare"
    },
    {
        id: 17,
        type: 2,
        text: "Wired"
    },
    {
        id: 18,
        type: 2,
        text: "Triple Golds"
    },
    {
        id: 19,
        type: 2,
        text: "Big Worm"
    },
    {
        id: 20,
        type: 2,
        text: "Seven Fives"
    },
    {
        id: 21,
        type: 2,
        text: "Split Six"
    },
    {
        id: 22,
        type: 2,
        text: "Fresh Mesh"
    },
    {
        id: 23,
        type: 2,
        text: "Lead Sled"
    },
    {
        id: 24,
        type: 2,
        text: "Turbine"
    },
    {
        id: 25,
        type: 2,
        text: "Super Fin"
    },
    {
        id: 26,
        type: 2,
        text: "Classic Rod"
    },
    {
        id: 27,
        type: 2,
        text: "Dollar"
    },
    {
        id: 28,
        type: 2,
        text: "Dukes"
    },
    {
        id: 29,
        type: 2,
        text: "Low Five"
    },
    {
        id: 30,
        type: 2,
        text: "Gooch"
    },
    // ---------- SUV
    {
        id: 0,
        type: 3,
        text: "Default"
    },
    {
        id: 1,
        type: 3,
        text: "VIP"
    },
    {
        id: 2,
        type: 3,
        text: "Benefactor"
    },
    {
        id: 3,
        type: 3,
        text: "Cosmo"
    },
    {
        id: 4,
        type: 3,
        text: "Bippu"
    },
    {
        id: 5,
        type: 3,
        text: "Royal Six"
    },
    {
        id: 6,
        type: 3,
        text: "Fagorme"
    },
    {
        id: 7,
        type: 3,
        text: "Deluxe"
    },
    {
        id: 8,
        type: 3,
        text: "Iced Out"
    },
    {
        id: 9,
        type: 3,
        text: "Cognoscenti"
    },
    {
        id: 10,
        type: 3,
        text: "LozSpeed Ten"
    },
    {
        id: 11,
        type: 3,
        text: "Supernova"
    },
    {
        id: 12,
        type: 3,
        text: "Obey RS"
    },
    {
        id: 13,
        type: 3,
        text: "LozSpeed Baller"
    },
    {
        id: 14,
        type: 3,
        text: "Extravaganzo"
    },
    {
        id: 15,
        type: 3,
        text: "Split Six"
    },
    {
        id: 16,
        type: 3,
        text: "Empowered"
    },
    {
        id: 17,
        type: 3,
        text: "Sunrise"
    },
    {
        id: 18,
        type: 3,
        text: "Dash VIP"
    },
    {
        id: 19,
        type: 3,
        text: "Cutter"
    },
    {
        id: 20,
        type: 3,
        text: "VIP"
    },
    {
        id: 21,
        type: 3,
        text: "Benefactor"
    },
    {
        id: 22,
        type: 3,
        text: "Cosmo"
    },
    {
        id: 23,
        type: 3,
        text: "Bippu"
    },
    {
        id: 24,
        type: 3,
        text: "Royal Six"
    },
    {
        id: 25,
        type: 3,
        text: "Fagorme"
    },
    {
        id: 26,
        type: 3,
        text: "Deluxe"
    },
    {
        id: 27,
        type: 3,
        text: "Iced Out"
    },
    {
        id: 28,
        type: 3,
        text: "Cognoscenti"
    },
    {
        id: 29,
        type: 3,
        text: "LozSpeed Ten"
    },
    {
        id: 30,
        type: 3,
        text: "Supernova"
    },
    {
        id: 31,
        type: 3,
        text: "Obey RS"
    },
    {
        id: 32,
        type: 3,
        text: "LozSpeed Baller"
    },
    {
        id: 33,
        type: 3,
        text: "Extravaganzo"
    },
    {
        id: 34,
        type: 3,
        text: "Split Six"
    },
    {
        id: 35,
        type: 3,
        text: "Empowered"
    },
    {
        id: 36,
        type: 3,
        text: "Sunrise"
    },
    {
        id: 37,
        type: 3,
        text: "Dash VIP"
    },
    {
        id: 38,
        type: 3,
        text: "Cutter"
    },
    // ---------- OFFROAD
    {
        id: 0,
        type: 4,
        text: "Default"
    },
    {
        id: 1,
        type: 4,
        text: "Raider"
    },
    {
        id: 2,
        type: 4,
        text: "Mudslinger"
    },
    {
        id: 3,
        type: 4,
        text: "Nevis"
    },
    {
        id: 4,
        type: 4,
        text: "Cairngorm"
    },
    {
        id: 5,
        type: 4,
        text: "Amazon"
    },
    {
        id: 6,
        type: 4,
        text: "Challenger"
    },
    {
        id: 7,
        type: 4,
        text: "Dune Basher"
    },
    {
        id: 8,
        type: 4,
        text: "Five Star"
    },
    {
        id: 9,
        type: 4,
        text: "Rock Crawler"
    },
    {
        id: 10,
        type: 4,
        text: "Mil Spec Steelie"
    },
    {
        id: 11,
        type: 4,
        text: "Raider"
    },
    {
        id: 12,
        type: 4,
        text: "Mudslinger"
    },
    {
        id: 13,
        type: 4,
        text: "Nevis"
    },
    {
        id: 14,
        type: 4,
        text: "Cairngorm"
    },
    {
        id: 15,
        type: 4,
        text: "Amazon"
    },
    {
        id: 16,
        type: 4,
        text: "Challenger"
    },
    {
        id: 17,
        type: 4,
        text: "Dune Basher"
    },
    {
        id: 18,
        type: 4,
        text: "Five Star"
    },
    {
        id: 19,
        type: 4,
        text: "Rock Crawler"
    },
    {
        id: 20,
        type: 4,
        text: "Mil Spec Steelie"
    },
    {
        id: 21,
        type: 4,
        text: "Retro Steelie"
    },
    {
        id: 22,
        type: 4,
        text: "Heavy Duty Steelie"
    },
    {
        id: 23,
        type: 4,
        text: "Concave Steelie"
    },
    {
        id: 24,
        type: 4,
        text: "Police Issue Steelie"
    },
    {
        id: 25,
        type: 4,
        text: "Lightweight Steelie"
    },
    {
        id: 26,
        type: 4,
        text: "Dukes"
    },
    {
        id: 27,
        type: 4,
        text: "Avalanche"
    },
    {
        id: 28,
        type: 4,
        text: "Mountain Man"
    },
    {
        id: 29,
        type: 4,
        text: "Ridge Climber"
    },
    {
        id: 30,
        type: 4,
        text: "Concave 5"
    },
    {
        id: 31,
        type: 4,
        text: "Flat Six"
    },
    {
        id: 32,
        type: 4,
        text: "All Terrain Monster"
    },
    {
        id: 33,
        type: 4,
        text: "Drag SPL"
    },
    {
        id: 34,
        type: 4,
        text: "Concave Rally Master"
    },
    {
        id: 35,
        type: 4,
        text: "Rugged Snowflake"
    },
    // ---------- TUNER
    {
        id: 0,
        type: 5,
        text: "Default"
    },
    {
        id: 1,
        type: 5,
        text: "Cosmo"
    },
    {
        id: 2,
        type: 5,
        text: "Super Mesh"
    },
    {
        id: 4,
        type: 5,
        text: "Rollas"
    },
    {
        id: 3,
        type: 5,
        text: "Outsider"
    },
    {
        id: 5,
        type: 5,
        text: "Driftmeister"
    },
    {
        id: 6,
        type: 5,
        text: "Slicer"
    },
    {
        id: 7,
        type: 5,
        text: "El Quatro"
    },
    {
        id: 8,
        type: 5,
        text: "Dubbed"
    },
    {
        id: 9,
        type: 5,
        text: "Five Star"
    },
    {
        id: 10,
        type: 5,
        text: "Slideways"
    },
    {
        id: 11,
        type: 5,
        text: "Apex"
    },
    {
        id: 12,
        type: 5,
        text: "Stanced EG"
    },
    {
        id: 13,
        type: 5,
        text: "Countersteer"
    },
    {
        id: 14,
        type: 5,
        text: "Endo v.1"
    },
    {
        id: 15,
        type: 5,
        text: "Endo v.2 Dish"
    },
    {
        id: 16,
        type: 5,
        text: "Gruppe Z"
    },
    {
        id: 17,
        type: 5,
        text: "Choku-Dori"
    },
    {
        id: 18,
        type: 5,
        text: "Chicane"
    },
    {
        id: 19,
        type: 5,
        text: "Saisoku"
    },
    {
        id: 20,
        type: 5,
        text: "Dished Eight"
    },
    {
        id: 21,
        type: 5,
        text: "Fujiwara"
    },
    {
        id: 22,
        type: 5,
        text: "Zokusha"
    },
    {
        id: 23,
        type: 5,
        text: "Battle VIII"
    },
    {
        id: 24,
        type: 5,
        text: "Rally Master"
    },
    {
        id: 25,
        type: 5,
        text: "Cosmo"
    },
    {
        id: 26,
        type: 5,
        text: "Super Mesh"
    },
    {
        id: 27,
        type: 5,
        text: "Outsider"
    },
    {
        id: 28,
        type: 5,
        text: "Rollas"
    },
    {
        id: 29,
        type: 5,
        text: "Driftmeister"
    },
    {
        id: 30,
        type: 5,
        text: "Slicer"
    },
    {
        id: 31,
        type: 5,
        text: "El Quatro"
    },
    {
        id: 32,
        type: 5,
        text: "Dubbed"
    },
    {
        id: 33,
        type: 5,
        text: "Five Star"
    },
    {
        id: 34,
        type: 5,
        text: "Slideways"
    },
    {
        id: 35,
        type: 5,
        text: "Apex"
    },
    {
        id: 36,
        type: 5,
        text: "Stanced EG"
    },
    {
        id: 37,
        type: 5,
        text: "Countersteer"
    },
    {
        id: 38,
        type: 5,
        text: "Endo v.1"
    },
    {
        id: 39,
        type: 5,
        text: "Endo v.2 Dish"
    },
    {
        id: 40,
        type: 5,
        text: "Gruppe Z"
    },
    {
        id: 41,
        type: 5,
        text: "Choku-Dori"
    },
    {
        id: 42,
        type: 5,
        text: "Chicane"
    },
    {
        id: 43,
        type: 5,
        text: "Saisoku"
    },
    {
        id: 44,
        type: 5,
        text: "Dished Eight"
    },
    {
        id: 45,
        type: 5,
        text: "Fujiwara"
    },
    {
        id: 46,
        type: 5,
        text: "Zokusha"
    },
    {
        id: 47,
        type: 5,
        text: "Battle VIII"
    },
    {
        id: 48,
        type: 5,
        text: "Rally Master"
    },
    // ---------- BIKE
    {
        id: 0,
        type: 6,
        text: "Default"
    },
    {
        id: 1,
        type: 6,
        text: "Speedway"
    },
    {
        id: 2,
        type: 6,
        text: "Street Special"
    },
    {
        id: 3,
        type: 6,
        text: "Racer"
    },
    {
        id: 4,
        type: 6,
        text: "Track Star"
    },
    {
        id: 5,
        type: 6,
        text: "Overlord"
    },
    {
        id: 6,
        type: 6,
        text: "Trident"
    },
    {
        id: 7,
        type: 6,
        text: "Triple Threat"
    },
    {
        id: 8,
        type: 6,
        text: "Stilleto"
    },
    {
        id: 9,
        type: 6,
        text: "Wires"
    },
    {
        id: 10,
        type: 6,
        text: "Bobber"
    },
    {
        id: 11,
        type: 6,
        text: "Solidus"
    },
    {
        id: 12,
        type: 6,
        text: "Ice Shield"
    },
    {
        id: 13,
        type: 6,
        text: "Loops"
    },
    {
        id: 14,
        type: 6,
        text: "Speedway"
    },
    {
        id: 15,
        type: 6,
        text: "Street Special"
    },
    {
        id: 16,
        type: 6,
        text: "Racer"
    },
    {
        id: 17,
        type: 6,
        text: "Track Star"
    },
    {
        id: 18,
        type: 6,
        text: "Overlord"
    },
    {
        id: 19,
        type: 6,
        text: "Trident"
    },
    {
        id: 20,
        type: 6,
        text: "Triple Threat"
    },
    {
        id: 21,
        type: 6,
        text: "Stilleto"
    },
    {
        id: 22,
        type: 6,
        text: "Wires"
    },
    {
        id: 23,
        type: 6,
        text: "Bobber"
    },
    {
        id: 24,
        type: 6,
        text: "Solidus"
    },
    {
        id: 25,
        type: 6,
        text: "Ice Shield"
    },
    {
        id: 26,
        type: 6,
        text: "Loops"
    },
    {
        id: 27,
        type: 6,
        text: "Romper Racing"
    },
    {
        id: 28,
        type: 6,
        text: "Warp Drive"
    },
    {
        id: 29,
        type: 6,
        text: "Snowflake"
    },
    {
        id: 30,
        type: 6,
        text: "Holy Spoke"
    },
    {
        id: 31,
        type: 6,
        text: "Old Skool Triple"
    },
    {
        id: 32,
        type: 6,
        text: "Futura"
    },
    {
        id: 33,
        type: 6,
        text: "Quarter Mile King"
    },
    {
        id: 34,
        type: 6,
        text: "Cartwheel"
    },
    {
        id: 35,
        type: 6,
        text: "Double Five"
    },
    {
        id: 36,
        type: 6,
        text: "Shuriken"
    },
    {
        id: 37,
        type: 6,
        text: "Simple Six"
    },
    {
        id: 38,
        type: 6,
        text: "Celtic"
    },
    {
        id: 39,
        type: 6,
        text: "Razer"
    },
    {
        id: 40,
        type: 6,
        text: "Twisted"
    },
    {
        id: 41,
        type: 6,
        text: "Morning Star"
    },
    {
        id: 42,
        type: 6,
        text: "Jagged Spokes"
    },
    {
        id: 43,
        type: 6,
        text: "Eidolon"
    },
    {
        id: 44,
        type: 6,
        text: "Enigma"
    },
    {
        id: 45,
        type: 6,
        text: "Big Spokes"
    },
    {
        id: 46,
        type: 6,
        text: "Webs"
    },
    {
        id: 47,
        type: 6,
        text: "Hotplate"
    },
    {
        id: 48,
        type: 6,
        text: "Bobsta"
    },
    {
        id: 49,
        type: 6,
        text: "Loops"
    },
    {
        id: 50,
        type: 6,
        text: "Romper Racing"
    },
    {
        id: 51,
        type: 6,
        text: "Warp Drive"
    },
    {
        id: 52,
        type: 6,
        text: "Snowflake"
    },
    {
        id: 53,
        type: 6,
        text: "Holy Spoke"
    },
    {
        id: 54,
        type: 6,
        text: "Old Skool Triple"
    },
    {
        id: 55,
        type: 6,
        text: "Futura"
    },
    {
        id: 56,
        type: 6,
        text: "Quarter Mile King"
    },
    {
        id: 57,
        type: 6,
        text: "Cartwheel"
    },
    {
        id: 58,
        type: 6,
        text: "Double Five"
    },
    {
        id: 59,
        type: 6,
        text: "Shuriken"
    },
    {
        id: 60,
        type: 6,
        text: "Simple Six"
    },
    {
        id: 61,
        type: 6,
        text: "Celtic"
    },
    {
        id: 62,
        type: 6,
        text: "Razer"
    },
    {
        id: 63,
        type: 6,
        text: "Twisted"
    },
    {
        id: 64,
        type: 6,
        text: "Morning Star"
    },
    {
        id: 65,
        type: 6,
        text: "Jagged Spokes"
    },
    {
        id: 66,
        type: 6,
        text: "Eidolon"
    },
    {
        id: 67,
        type: 6,
        text: "Enigma"
    },
    {
        id: 68,
        type: 6,
        text: "Big Spokes"
    },
    {
        id: 69,
        type: 6,
        text: "Webs"
    },
    {
        id: 70,
        type: 6,
        text: "Hotplate"
    },
    {
        id: 71,
        type: 6,
        text: "Bobsta"
    },
    {
        id: 72,
        type: 6,
        text: "Grouch"
    },
    // ---------- HIGHEND
    {
        id: 0,
        type: 7,
        text: "Default"
    },
    {
        id: 1,
        type: 7,
        text: "Shadow"
    },
    {
        id: 2,
        type: 7,
        text: "Hypher"
    },
    {
        id: 3,
        type: 7,
        text: "Blade"
    },
    {
        id: 4,
        type: 7,
        text: "Diamond"
    },
    {
        id: 5,
        type: 7,
        text: "Supa Gee"
    },
    {
        id: 6,
        type: 7,
        text: "Chromatic Z"
    },
    {
        id: 7,
        type: 7,
        text: "Mercie Ch.Lip"
    },
    {
        id: 8,
        type: 7,
        text: "Obey RS"
    },
    {
        id: 9,
        type: 7,
        text: "GT Chrome"
    },
    {
        id: 10,
        type: 7,
        text: "Cheetah RR"
    },
    {
        id: 11,
        type: 7,
        text: "Solar"
    },
    {
        id: 12,
        type: 7,
        text: "Split Ten"
    },
    {
        id: 13,
        type: 7,
        text: "Dash VIP"
    },
    {
        id: 14,
        type: 7,
        text: "LozSpeed Ten"
    },
    {
        id: 15,
        type: 7,
        text: "Carbon Inferno"
    },
    {
        id: 16,
        type: 7,
        text: "Carbon Shadow"
    },
    {
        id: 17,
        type: 7,
        text: "Carbonic Z"
    },
    {
        id: 18,
        type: 7,
        text: "Carbon Solar"
    },
    {
        id: 19,
        type: 7,
        text: "Cheetah Carbon R"
    },
    {
        id: 20,
        type: 7,
        text: "Carbon S Racer"
    },
    {
        id: 21,
        type: 7,
        text: "Shadow"
    },
    {
        id: 22,
        type: 7,
        text: "Hypher"
    },
    {
        id: 23,
        type: 7,
        text: "Blade"
    },
    {
        id: 24,
        type: 7,
        text: "Diamond"
    },
    {
        id: 25,
        type: 7,
        text: "Supa Gee"
    },
    {
        id: 26,
        type: 7,
        text: "Chromatic Z"
    },
    {
        id: 27,
        type: 7,
        text: "Mercie"
    },
    {
        id: 28,
        type: 7,
        text: "Obey RS"
    },
    {
        id: 29,
        type: 7,
        text: "GT Chrome"
    },
    {
        id: 30,
        type: 7,
        text: "Cheetah RR"
    },
    {
        id: 31,
        type: 7,
        text: "Solar"
    },
    {
        id: 32,
        type: 7,
        text: "Split Ten"
    },
    {
        id: 33,
        type: 7,
        text: "Dash VIP"
    },
    {
        id: 34,
        type: 7,
        text: "LozSpeed Ten"
    },
    {
        id: 35,
        type: 7,
        text: "Carbon Inferno"
    },
    {
        id: 36,
        type: 7,
        text: "Carbon Shadow"
    },
    {
        id: 37,
        type: 7,
        text: "Carbonic Z"
    },
    {
        id: 38,
        type: 7,
        text: "Carbon Solar"
    },
    {
        id: 39,
        type: 7,
        text: "Cheetah Carbon R"
    },
    {
        id: 40,
        type: 7,
        text: "Carbon S Racer"
    },
    // ---------- Bennys Original
    {
        id: 0,
        type: 8,
        text: "Default"
    },
    {
        id: 1,
        type: 8,
        text: "OG Hunnets"
    },
    {
        id: 2,
        type: 8,
        text: "OG Hunnets (Chrome Lip)"
    },
    {
        id: 3,
        type: 8,
        text: "Knock-Offs"
    },
    {
        id: 4,
        type: 8,
        text: "Knock-Offs (Chrome Lip)"
    },
    {
        id: 5,
        type: 8,
        text: "Spoked Out"
    },
    {
        id: 6,
        type: 8,
        text: "Spoked Out (Chrome Lip)"
    },
    {
        id: 7,
        type: 8,
        text: "Vintage Wire"
    },
    {
        id: 8,
        type: 8,
        text: "Vintage Wire (Chrome Lip)"
    },
    {
        id: 9,
        type: 8,
        text: "Smoothie"
    },
    {
        id: 10,
        type: 8,
        text: "Smoothie (Chrome Lip)"
    },
    {
        id: 11,
        type: 8,
        text: "Smoothie (Solid Color)"
    },
    {
        id: 12,
        type: 8,
        text: "Rod Me Up"
    },
    {
        id: 14,
        type: 8,
        text: "Rod Me Up (Solid Color)"
    },
    {
        id: 13,
        type: 8,
        text: "Rod Me Up (Chrome Lip)"
    },
    {
        id: 15,
        type: 8,
        text: "Clean"
    },
    {
        id: 16,
        type: 8,
        text: "Lotta Chrome"
    },
    {
        id: 17,
        type: 8,
        text: "Spindles"
    },
    {
        id: 18,
        type: 8,
        text: "Viking"
    },
    {
        id: 19,
        type: 8,
        text: "Triple Spoke"
    },
    {
        id: 20,
        type: 8,
        text: "Pharohe"
    },
    {
        id: 21,
        type: 8,
        text: "Tiger Style"
    },
    {
        id: 22,
        type: 8,
        text: "Three Wheelin"
    },
    {
        id: 23,
        type: 8,
        text: "Big Bar"
    },
    {
        id: 24,
        type: 8,
        text: "Biohazard"
    },
    {
        id: 25,
        type: 8,
        text: "Waves"
    },
    {
        id: 26,
        type: 8,
        text: "Lick Lick"
    },
    {
        id: 27,
        type: 8,
        text: "Spiralizer"
    },
    {
        id: 28,
        type: 8,
        text: "Hypnotics"
    },
    {
        id: 29,
        type: 8,
        text: "Psycho-Delic"
    },
    {
        id: 30,
        type: 8,
        text: "Half Cut"
    },
    {
        id: 31,
        type: 8,
        text: "Super Electric"
    },
    {
        id: 32,
        type: 8,
        text: "OG Hunnets"
    },
    {
        id: 33,
        type: 8,
        text: "OG Hunnets (Chrome Lip)"
    },
    {
        id: 34,
        type: 8,
        text: "Knock-Offs"
    },
    {
        id: 35,
        type: 8,
        text: "Knock-Offs (Chrome Lip)"
    },
    {
        id: 36,
        type: 8,
        text: "Spoked Out"
    },
    {
        id: 37,
        type: 8,
        text: "Spoked Out (Chrome Lip)"
    },
    {
        id: 38,
        type: 8,
        text: "Vintage Wire"
    },
    {
        id: 39,
        type: 8,
        text: "Vintage Wire (Chrome Lip)"
    },
    {
        id: 40,
        type: 8,
        text: "Smoothie"
    },
    {
        id: 41,
        type: 8,
        text: "Smoothie (Chrome Lip)"
    },
    {
        id: 42,
        type: 8,
        text: "Smoothie (Solid Color)"
    },
    {
        id: 43,
        type: 8,
        text: "Rod Me Up"
    },
    {
        id: 44,
        type: 8,
        text: "Rod Me Up (Chrome Lip)"
    },
    {
        id: 45,
        type: 8,
        text: "Rod Me Up (Solid Color)"
    },
    {
        id: 46,
        type: 8,
        text: "Clean"
    },
    {
        id: 47,
        type: 8,
        text: "Lotta Chrome"
    },
    {
        id: 48,
        type: 8,
        text: "Spindles"
    },
    {
        id: 49,
        type: 8,
        text: "Viking"
    },
    {
        id: 50,
        type: 8,
        text: "Triple Spoke"
    },
    {
        id: 51,
        type: 8,
        text: "Pharohe"
    },
    {
        id: 52,
        type: 8,
        text: "Tiger Style"
    },
    {
        id: 53,
        type: 8,
        text: "Three Wheelin"
    },
    {
        id: 54,
        type: 8,
        text: "Big Bar"
    },
    {
        id: 55,
        type: 8,
        text: "Biohazard"
    },
    {
        id: 56,
        type: 8,
        text: "Waves"
    },
    {
        id: 57,
        type: 8,
        text: "Lick Lick"
    },
    {
        id: 58,
        type: 8,
        text: "Spiralizer"
    },
    {
        id: 59,
        type: 8,
        text: "Hypnotics"
    },
    {
        id: 60,
        type: 8,
        text: "Psycho-Delic"
    },
    {
        id: 61,
        type: 8,
        text: "Half Cut"
    },
    {
        id: 62,
        type: 8,
        text: "Super Electric"
    },
    {
        id: 63,
        type: 8,
        text: "OG Hunnets"
    },
    {
        id: 64,
        type: 8,
        text: "OG Hunnets (Chrome Lip)"
    },
    {
        id: 65,
        type: 8,
        text: "Knock-Offs"
    },
    {
        id: 66,
        type: 8,
        text: "Knock-Offs (Chrome Lip)"
    },
    {
        id: 67,
        type: 8,
        text: "Spoked Out"
    },
    {
        id: 68,
        type: 8,
        text: "Spoked Out (Chrome Lip)"
    },
    {
        id: 69,
        type: 8,
        text: "Vintage Wire"
    },
    {
        id: 70,
        type: 8,
        text: "Vintage Wire (Chrome Lip)"
    },
    {
        id: 71,
        type: 8,
        text: "Smoothie"
    },
    {
        id: 72,
        type: 8,
        text: "Smoothie (Chrome Lip)"
    },
    {
        id: 73,
        type: 8,
        text: "Smoothie (Solid Color)"
    },
    {
        id: 74,
        type: 8,
        text: "Rod Me Up"
    },
    {
        id: 75,
        type: 8,
        text: "Rod Me Up (Chrome Lip)"
    },
    {
        id: 76,
        type: 8,
        text: "Rod Me Up (Solid Color)"
    },
    {
        id: 77,
        type: 8,
        text: "Clean"
    },
    {
        id: 78,
        type: 8,
        text: "Lotta Chrome"
    },
    {
        id: 79,
        type: 8,
        text: "Spindles"
    },
    {
        id: 80,
        type: 8,
        text: "Viking"
    },
    {
        id: 81,
        type: 8,
        text: "Triple Spoke"
    },
    {
        id: 82,
        type: 8,
        text: "Pharohe"
    },
    {
        id: 83,
        type: 8,
        text: "Tiger Style"
    },
    {
        id: 84,
        type: 8,
        text: "Three Wheelin"
    },
    {
        id: 85,
        type: 8,
        text: "Big Bar"
    },
    {
        id: 86,
        type: 8,
        text: "Biohazard"
    },
    {
        id: 87,
        type: 8,
        text: "Waves"
    },
    {
        id: 88,
        type: 8,
        text: "Lick Lick"
    },
    {
        id: 89,
        type: 8,
        text: "Spiralizer"
    },
    {
        id: 90,
        type: 8,
        text: "Hypnotics"
    },
    {
        id: 91,
        type: 8,
        text: "Psycho-Delic"
    },
    {
        id: 92,
        type: 8,
        text: "Half Cut"
    },
    {
        id: 93,
        type: 8,
        text: "Super Electric"
    },
    {
        id: 94,
        type: 8,
        text: "OG Hunnets"
    },
    {
        id: 95,
        type: 8,
        text: "OG Hunnets (Chrome Lip)"
    },
    {
        id: 96,
        type: 8,
        text: "Knock-Offs"
    },
    {
        id: 97,
        type: 8,
        text: "Knock-Offs (Chrome Lip)"
    },
    {
        id: 98,
        type: 8,
        text: "Spoked Out"
    },
    {
        id: 99,
        type: 8,
        text: "Spoked Out (Chrome Lip)"
    },
    {
        id: 100,
        type: 8,
        text: "Vintage Wire"
    },
    {
        id: 101,
        type: 8,
        text: "Vintage Wire (Chrome Lip)"
    },
    {
        id: 102,
        type: 8,
        text: "Smoothie"
    },
    {
        id: 103,
        type: 8,
        text: "Smoothie (Chrome Lip)"
    },
    {
        id: 104,
        type: 8,
        text: "Smoothie (Solid Color)"
    },
    {
        id: 105,
        type: 8,
        text: "Rod Me Up"
    },
    {
        id: 106,
        type: 8,
        text: "Rod Me Up (Chrome Lip)"
    },
    {
        id: 107,
        type: 8,
        text: "Rod Me Up (Solid Color)"
    },
    {
        id: 108,
        type: 8,
        text: "Clean"
    },
    {
        id: 109,
        type: 8,
        text: "Lotta Chrome"
    },
    {
        id: 110,
        type: 8,
        text: "Spindles"
    },
    {
        id: 111,
        type: 8,
        text: "Viking"
    },
    {
        id: 112,
        type: 8,
        text: "Triple Spoke"
    },
    {
        id: 113,
        type: 8,
        text: "Pharohe"
    },
    {
        id: 114,
        type: 8,
        text: "Tiger Style"
    },
    {
        id: 115,
        type: 8,
        text: "Three Wheelin"
    },
    {
        id: 116,
        type: 8,
        text: "Big Bar"
    },
    {
        id: 117,
        type: 8,
        text: "Biohazard"
    },
    {
        id: 118,
        type: 8,
        text: "Waves"
    },
    {
        id: 119,
        type: 8,
        text: "Lick Lick"
    },
    {
        id: 120,
        type: 8,
        text: "Spiralizer"
    },
    {
        id: 121,
        type: 8,
        text: "Hypnotics"
    },
    {
        id: 122,
        type: 8,
        text: "Psycho-Delic"
    },
    {
        id: 123,
        type: 8,
        text: "Half Cut"
    },
    {
        id: 124,
        type: 8,
        text: "Super Electric"
    },
    {
        id: 125,
        type: 8,
        text: "OG Hunnets"
    },
    {
        id: 126,
        type: 8,
        text: "OG Hunnets (Chrome Lip)"
    },
    {
        id: 127,
        type: 8,
        text: "Knock-Offs"
    },
    {
        id: 128,
        type: 8,
        text: "Knock-Offs (Chrome Lip)"
    },
    {
        id: 129,
        type: 8,
        text: "Spoked Out"
    },
    {
        id: 130,
        type: 8,
        text: "Spoked Out (Chrome Lip)"
    },
    {
        id: 131,
        type: 8,
        text: "Vintage Wire"
    },
    {
        id: 132,
        type: 8,
        text: "Vintage Wire (Chrome Lip)"
    },
    {
        id: 133,
        type: 8,
        text: "Smoothie"
    },
    {
        id: 134,
        type: 8,
        text: "Smoothie (Chrome Lip)"
    },
    {
        id: 135,
        type: 8,
        text: "Smoothie (Solid Color)"
    },
    {
        id: 136,
        type: 8,
        text: "Rod Me Up"
    },
    {
        id: 137,
        type: 8,
        text: "Rod Me Up (Chrome Lip)"
    },
    {
        id: 138,
        type: 8,
        text: "Rod Me Up (Solid Color)"
    },
    {
        id: 139,
        type: 8,
        text: "Clean"
    },
    {
        id: 140,
        type: 8,
        text: "Lotta Chrome"
    },
    {
        id: 141,
        type: 8,
        text: "Spindles"
    },
    {
        id: 142,
        type: 8,
        text: "Viking"
    },
    {
        id: 143,
        type: 8,
        text: "Triple Spoke"
    },
    {
        id: 144,
        type: 8,
        text: "Pharohe"
    },
    {
        id: 145,
        type: 8,
        text: "Tiger Style"
    },
    {
        id: 146,
        type: 8,
        text: "Three Wheelin"
    },
    {
        id: 147,
        type: 8,
        text: "Big Bar"
    },
    {
        id: 148,
        type: 8,
        text: "Biohazard"
    },
    {
        id: 149,
        type: 8,
        text: "Waves"
    },
    {
        id: 150,
        type: 8,
        text: "Lick Lick"
    },
    {
        id: 151,
        type: 8,
        text: "Spiralizer"
    },
    {
        id: 152,
        type: 8,
        text: "Hypnotics"
    },
    {
        id: 153,
        type: 8,
        text: "Psycho-Delic"
    },
    {
        id: 154,
        type: 8,
        text: "Half Cut"
    },
    {
        id: 155,
        type: 8,
        text: "Super Electric"
    },
    {
        id: 156,
        type: 8,
        text: "OG Hunnets"
    },
    {
        id: 157,
        type: 8,
        text: "OG Hunnets (Chrome Lip)"
    },
    {
        id: 158,
        type: 8,
        text: "Knock-Offs"
    },
    {
        id: 159,
        type: 8,
        text: "Knock-Offs (Chrome Lip)"
    },
    {
        id: 160,
        type: 8,
        text: "Spoked Out"
    },
    {
        id: 161,
        type: 8,
        text: "Spoked Out (Chrome Lip)"
    },
    {
        id: 162,
        type: 8,
        text: "Vintage Wire"
    },
    {
        id: 163,
        type: 8,
        text: "Vintage Wire (Chrome Lip)"
    },
    {
        id: 164,
        type: 8,
        text: "Smoothie"
    },
    {
        id: 165,
        type: 8,
        text: "Smoothie (Chrome Lip)"
    },
    {
        id: 166,
        type: 8,
        text: "Smoothie (Solid Color)"
    },
    {
        id: 167,
        type: 8,
        text: "Rod Me Up"
    },
    {
        id: 168,
        type: 8,
        text: "Rod Me Up (Chrome Lip)"
    },
    {
        id: 169,
        type: 8,
        text: "Rod Me Up (Solid Color)"
    },
    {
        id: 170,
        type: 8,
        text: "Clean"
    },
    {
        id: 171,
        type: 8,
        text: "Lotta Chrome"
    },
    {
        id: 172,
        type: 8,
        text: "Spindles"
    },
    {
        id: 173,
        type: 8,
        text: "Viking"
    },
    {
        id: 174,
        type: 8,
        text: "Triple Spoke"
    },
    {
        id: 175,
        type: 8,
        text: "Pharohe"
    },
    {
        id: 176,
        type: 8,
        text: "Tiger Style"
    },
    {
        id: 177,
        type: 8,
        text: "Three Wheelin"
    },
    {
        id: 178,
        type: 8,
        text: "Big Bar"
    },
    {
        id: 179,
        type: 8,
        text: "Biohazard"
    },
    {
        id: 180,
        type: 8,
        text: "Waves"
    },
    {
        id: 181,
        type: 8,
        text: "Lick Lick"
    },
    {
        id: 182,
        type: 8,
        text: "Spiralizer"
    },
    {
        id: 183,
        type: 8,
        text: "Hypnotics"
    },
    {
        id: 184,
        type: 8,
        text: "Psycho-Delic"
    },
    {
        id: 185,
        type: 8,
        text: "Half Cut"
    },
    {
        id: 186,
        type: 8,
        text: "Super Electric"
    },
    {
        id: 187,
        type: 8,
        text: "OG Hunnets"
    },
    {
        id: 188,
        type: 8,
        text: "OG Hunnets (Chrome Lip)"
    },
    {
        id: 189,
        type: 8,
        text: "Knock-Offs"
    },
    {
        id: 190,
        type: 8,
        text: "Knock-Offs (Chrome Lip)"
    },
    {
        id: 191,
        type: 8,
        text: "Spoked Out"
    },
    {
        id: 192,
        type: 8,
        text: "Spoked Out (Chrome Lip)"
    },
    {
        id: 193,
        type: 8,
        text: "Vintage Wire"
    },
    {
        id: 194,
        type: 8,
        text: "Vintage Wire (Chrome Lip)"
    },
    {
        id: 195,
        type: 8,
        text: "Smoothie"
    },
    {
        id: 196,
        type: 8,
        text: "Smoothie (Chrome Lip)"
    },
    {
        id: 197,
        type: 8,
        text: "Smoothie (Solid Color)"
    },
    {
        id: 198,
        type: 8,
        text: "Rod Me Up"
    },
    {
        id: 199,
        type: 8,
        text: "Rod Me Up (Chrome Lip)"
    },
    {
        id: 200,
        type: 8,
        text: "Rod Me Up (Solid Color)"
    },
    {
        id: 201,
        type: 8,
        text: "Clean"
    },
    {
        id: 202,
        type: 8,
        text: "Lotta Chrome"
    },
    {
        id: 203,
        type: 8,
        text: "Spindles"
    },
    {
        id: 204,
        type: 8,
        text: "Viking"
    },
    {
        id: 205,
        type: 8,
        text: "Triple Spoke"
    },
    {
        id: 206,
        type: 8,
        text: "Pharohe"
    },
    {
        id: 207,
        type: 8,
        text: "Tiger Style"
    },
    {
        id: 208,
        type: 8,
        text: "Three Wheelin"
    },
    {
        id: 209,
        type: 8,
        text: "Big Bar"
    },
    {
        id: 210,
        type: 8,
        text: "Biohazard"
    },
    {
        id: 211,
        type: 8,
        text: "Waves"
    },
    {
        id: 212,
        type: 8,
        text: "Lick Lick"
    },
    {
        id: 213,
        type: 8,
        text: "Spiralizer"
    },
    {
        id: 214,
        type: 8,
        text: "Hypnotics"
    },
    {
        id: 215,
        type: 8,
        text: "Psycho-Delic"
    },
    {
        id: 216,
        type: 8,
        text: "Half Cut"
    },
    {
        id: 217,
        type: 8,
        text: "Super Electric"
    },
    // ---------- Bennys Bespoke
    {
        id: 0,
        type: 9,
        text: "Default"
    },
    {
        id: 1,
        type: 9,
        text: "Chrome OG Hunnets"
    },
    {
        id: 2,
        type: 9,
        text: "Gold OG Hunnets"
    },
    {
        id: 3,
        type: 9,
        text: "Chrome Wires"
    },
    {
        id: 4,
        type: 9,
        text: "Gold Wires"
    },
    {
        id: 5,
        type: 9,
        text: "Chrome Spoked Out"
    },
    {
        id: 6,
        type: 9,
        text: "Gold Spoked Out"
    },
    {
        id: 7,
        type: 9,
        text: "Chrome Knock-Offs"
    },
    {
        id: 8,
        type: 9,
        text: "Gold Knock-Offs"
    },
    {
        id: 9,
        type: 9,
        text: "Chrome Bigger Worm"
    },
    {
        id: 10,
        type: 9,
        text: "Gold Bigger Worm"
    },
    {
        id: 11,
        type: 9,
        text: "Chrome Vintage Wire"
    },
    {
        id: 12,
        type: 9,
        text: "Gold Vintage Wire"
    },
    {
        id: 13,
        type: 9,
        text: "Chrome Classic Wire"
    },
    {
        id: 14,
        type: 9,
        text: "Gold Classic Wire"
    },
    {
        id: 15,
        type: 9,
        text: "Chrome Smoothie"
    },
    {
        id: 16,
        type: 9,
        text: "Gold Smoothie"
    },
    {
        id: 17,
        type: 9,
        text: "Chrome Classic Rod"
    },
    {
        id: 18,
        type: 9,
        text: "Gold Classic Rod"
    },
    {
        id: 19,
        type: 9,
        text: "Chrome Dollar"
    },
    {
        id: 20,
        type: 9,
        text: "Gold Dollar"
    },
    {
        id: 21,
        type: 9,
        text: "Chrome Mighty Star"
    },
    {
        id: 22,
        type: 9,
        text: "Gold Mighty Star"
    },
    {
        id: 23,
        type: 9,
        text: "Chrome Decadent Dish"
    },
    {
        id: 24,
        type: 9,
        text: "Gold Decadent Dish"
    },
    {
        id: 25,
        type: 9,
        text: "Chrome Razor Style"
    },
    {
        id: 26,
        type: 9,
        text: "Gold Razor Style"
    },
    {
        id: 27,
        type: 9,
        text: "Chrome Celtic Knot"
    },
    {
        id: 29,
        type: 9,
        text: "Chrome Warrior Dish"
    },
    {
        id: 28,
        type: 9,
        text: "Gold Celtic Knot"
    },
    {
        id: 30,
        type: 9,
        text: "Gold Warrior Dish"
    },
    {
        id: 31,
        type: 9,
        text: "Gold Big Dog Spokes"
    },
    {
        id: 32,
        type: 9,
        text: "Chrome OG Hunnets"
    },
    {
        id: 33,
        type: 9,
        text: "Gold OG Hunnets"
    },
    {
        id: 34,
        type: 9,
        text: "Chrome Wires"
    },
    {
        id: 35,
        type: 9,
        text: "Gold Wires"
    },
    {
        id: 36,
        type: 9,
        text: "Chrome Spoked Out"
    },
    {
        id: 37,
        type: 9,
        text: "Gold Spoked Out"
    },
    {
        id: 38,
        type: 9,
        text: "Chrome Knock-Offs"
    },
    {
        id: 39,
        type: 9,
        text: "Gold Knock-Offs"
    },
    {
        id: 40,
        type: 9,
        text: "Chrome Bigger Worm"
    },
    {
        id: 41,
        type: 9,
        text: "Gold Bigger Worm"
    },
    {
        id: 42,
        type: 9,
        text: "Chrome Vintage Wire"
    },
    {
        id: 43,
        type: 9,
        text: "Gold Vintage Wire"
    },
    {
        id: 44,
        type: 9,
        text: "Chrome Classic Wire"
    },
    {
        id: 45,
        type: 9,
        text: "Gold Classic Wire"
    },
    {
        id: 46,
        type: 9,
        text: "Chrome Smoothie"
    },
    {
        id: 47,
        type: 9,
        text: "Gold Smoothie"
    },
    {
        id: 48,
        type: 9,
        text: "Chrome Classic Rod"
    },
    {
        id: 49,
        type: 9,
        text: "Gold Classic Rod"
    },
    {
        id: 50,
        type: 9,
        text: "Chrome Dollar"
    },
    {
        id: 51,
        type: 9,
        text: "Gold Dollar"
    },
    {
        id: 52,
        type: 9,
        text: "Chrome Mighty Star"
    },
    {
        id: 53,
        type: 9,
        text: "Gold Mighty Star"
    },
    {
        id: 54,
        type: 9,
        text: "Chrome Decadent Dish"
    },
    {
        id: 55,
        type: 9,
        text: "Gold Decadent Dish"
    },
    {
        id: 56,
        type: 9,
        text: "Chrome Razor Style"
    },
    {
        id: 57,
        type: 9,
        text: "Gold Razor Style"
    },
    {
        id: 58,
        type: 9,
        text: "Chrome Celtic Knot"
    },
    {
        id: 59,
        type: 9,
        text: "Gold Celtic Knot"
    },
    {
        id: 60,
        type: 9,
        text: "Chrome Warrior Dish"
    },
    {
        id: 61,
        type: 9,
        text: "Gold Warrior Dish"
    },
    {
        id: 62,
        type: 9,
        text: "Gold Big Dog Spokes"
    },
    {
        id: 63,
        type: 9,
        text: "Chrome OG Hunnets"
    },
    {
        id: 64,
        type: 9,
        text: "Gold OG Hunnets"
    },
    {
        id: 65,
        type: 9,
        text: "Chrome Wires"
    },
    {
        id: 66,
        type: 9,
        text: "Gold Wires"
    },
    {
        id: 67,
        type: 9,
        text: "Chrome Spoked Out"
    },
    {
        id: 68,
        type: 9,
        text: "Gold Spoked Out"
    },
    {
        id: 69,
        type: 9,
        text: "Chrome Knock-Offs"
    },
    {
        id: 70,
        type: 9,
        text: "Gold Knock-Offs"
    },
    {
        id: 71,
        type: 9,
        text: "Chrome Bigger Worm"
    },
    {
        id: 72,
        type: 9,
        text: "Gold Bigger Worm"
    },
    {
        id: 73,
        type: 9,
        text: "Chrome Vintage Wire"
    },
    {
        id: 74,
        type: 9,
        text: "Gold Vintage Wire"
    },
    {
        id: 75,
        type: 9,
        text: "Chrome Classic Wire"
    },
    {
        id: 76,
        type: 9,
        text: "Gold Classic Wire"
    },
    {
        id: 77,
        type: 9,
        text: "Chrome Smoothie"
    },
    {
        id: 78,
        type: 9,
        text: "Gold Smoothie"
    },
    {
        id: 79,
        type: 9,
        text: "Chrome Classic Rod"
    },
    {
        id: 80,
        type: 9,
        text: "Gold Classic Rod"
    },
    {
        id: 81,
        type: 9,
        text: "Chrome Dollar"
    },
    {
        id: 82,
        type: 9,
        text: "Gold Dollar"
    },
    {
        id: 83,
        type: 9,
        text: "Chrome Mighty Star"
    },
    {
        id: 84,
        type: 9,
        text: "Gold Mighty Star"
    },
    {
        id: 85,
        type: 9,
        text: "Chrome Decadent Dish"
    },
    {
        id: 86,
        type: 9,
        text: "Gold Decadent Dish"
    },
    {
        id: 87,
        type: 9,
        text: "Chrome Razor Style"
    },
    {
        id: 88,
        type: 9,
        text: "Gold Razor Style"
    },
    {
        id: 89,
        type: 9,
        text: "Chrome Celtic Knot"
    },
    {
        id: 90,
        type: 9,
        text: "Gold Celtic Knot"
    },
    {
        id: 91,
        type: 9,
        text: "Chrome Warrior Dish"
    },
    {
        id: 92,
        type: 9,
        text: "Gold Warrior Dish"
    },
    {
        id: 93,
        type: 9,
        text: "Gold Big Dog Spokes"
    },
    {
        id: 94,
        type: 9,
        text: "Chrome OG Hunnets"
    },
    {
        id: 95,
        type: 9,
        text: "Gold OG Hunnets"
    },
    {
        id: 96,
        type: 9,
        text: "Chrome Wires"
    },
    {
        id: 97,
        type: 9,
        text: "Gold Wires"
    },
    {
        id: 98,
        type: 9,
        text: "Chrome Spoked Out"
    },
    {
        id: 99,
        type: 9,
        text: "Gold Spoked Out"
    },
    {
        id: 100,
        type: 9,
        text: "Chrome Knock-Offs"
    },
    {
        id: 101,
        type: 9,
        text: "Gold Knock-Offs"
    },
    {
        id: 102,
        type: 9,
        text: "Chrome Bigger Worm"
    },
    {
        id: 103,
        type: 9,
        text: "Gold Bigger Worm"
    },
    {
        id: 104,
        type: 9,
        text: "Chrome Vintage Wire"
    },
    {
        id: 105,
        type: 9,
        text: "Gold Vintage Wire"
    },
    {
        id: 106,
        type: 9,
        text: "Chrome Classic Wire"
    },
    {
        id: 107,
        type: 9,
        text: "Gold Classic Wire"
    },
    {
        id: 108,
        type: 9,
        text: "Chrome Smoothie"
    },
    {
        id: 109,
        type: 9,
        text: "Gold Smoothie"
    },
    {
        id: 110,
        type: 9,
        text: "Chrome Classic Rod"
    },
    {
        id: 111,
        type: 9,
        text: "Gold Classic Rod"
    },
    {
        id: 112,
        type: 9,
        text: "Chrome Dollar"
    },
    {
        id: 113,
        type: 9,
        text: "Gold Dollar"
    },
    {
        id: 114,
        type: 9,
        text: "Chrome Mighty Star"
    },
    {
        id: 115,
        type: 9,
        text: "Gold Mighty Star"
    },
    {
        id: 116,
        type: 9,
        text: "Chrome Decadent Dish"
    },
    {
        id: 117,
        type: 9,
        text: "Gold Decadent Dish"
    },
    {
        id: 118,
        type: 9,
        text: "Chrome Razor Style"
    },
    {
        id: 119,
        type: 9,
        text: "Gold Razor Style"
    },
    {
        id: 120,
        type: 9,
        text: "Chrome Celtic Knot"
    },
    {
        id: 121,
        type: 9,
        text: "Gold Celtic Knot"
    },
    {
        id: 122,
        type: 9,
        text: "Chrome Warrior Dish"
    },
    {
        id: 123,
        type: 9,
        text: "Gold Warrior Dish"
    },
    {
        id: 124,
        type: 9,
        text: "Gold Big Dog Spokes"
    },
    {
        id: 125,
        type: 9,
        text: "Chrome OG Hunnets"
    },
    {
        id: 126,
        type: 9,
        text: "Gold OG Hunnets"
    },
    {
        id: 127,
        type: 9,
        text: "Chrome Wires"
    },
    {
        id: 128,
        type: 9,
        text: "Gold Wires"
    },
    {
        id: 129,
        type: 9,
        text: "Chrome Spoked Out"
    },
    {
        id: 130,
        type: 9,
        text: "Gold Spoked Out"
    },
    {
        id: 131,
        type: 9,
        text: "Chrome Knock-Offs"
    },
    {
        id: 132,
        type: 9,
        text: "Gold Knock-Offs"
    },
    {
        id: 133,
        type: 9,
        text: "Chrome Bigger Worm"
    },
    {
        id: 134,
        type: 9,
        text: "Gold Bigger Worm"
    },
    {
        id: 135,
        type: 9,
        text: "Chrome Vintage Wire"
    },
    {
        id: 136,
        type: 9,
        text: "Gold Vintage Wire"
    },
    {
        id: 137,
        type: 9,
        text: "Chrome Classic Wire"
    },
    {
        id: 138,
        type: 9,
        text: "Gold Classic Wire"
    },
    {
        id: 139,
        type: 9,
        text: "Chrome Smoothie"
    },
    {
        id: 140,
        type: 9,
        text: "Gold Smoothie"
    },
    {
        id: 141,
        type: 9,
        text: "Chrome Classic Rod"
    },
    {
        id: 142,
        type: 9,
        text: "Gold Classic Rod"
    },
    {
        id: 143,
        type: 9,
        text: "Chrome Dollar"
    },
    {
        id: 144,
        type: 9,
        text: "Gold Dollar"
    },
    {
        id: 145,
        type: 9,
        text: "Chrome Mighty Star"
    },
    {
        id: 146,
        type: 9,
        text: "Gold Mighty Star"
    },
    {
        id: 147,
        type: 9,
        text: "Chrome Decadent Dish"
    },
    {
        id: 148,
        type: 9,
        text: "Gold Decadent Dish"
    },
    {
        id: 149,
        type: 9,
        text: "Chrome Razor Style"
    },
    {
        id: 150,
        type: 9,
        text: "Gold Razor Style"
    },
    {
        id: 151,
        type: 9,
        text: "Chrome Celtic Knot"
    },
    {
        id: 152,
        type: 9,
        text: "Gold Celtic Knot"
    },
    {
        id: 153,
        type: 9,
        text: "Chrome Warrior Dish"
    },
    {
        id: 154,
        type: 9,
        text: "Gold Warrior Dish"
    },
    {
        id: 155,
        type: 9,
        text: "Gold Big Dog Spokes"
    },
    {
        id: 156,
        type: 9,
        text: "Chrome OG Hunnets"
    },
    {
        id: 157,
        type: 9,
        text: "Gold OG Hunnets"
    },
    {
        id: 158,
        type: 9,
        text: "Chrome Wires"
    },
    {
        id: 159,
        type: 9,
        text: "Gold Wires"
    },
    {
        id: 160,
        type: 9,
        text: "Chrome Spoked Out"
    },
    {
        id: 161,
        type: 9,
        text: "Gold Spoked Out"
    },
    {
        id: 162,
        type: 9,
        text: "Chrome Knock-Offs"
    },
    {
        id: 163,
        type: 9,
        text: "Gold Knock-Offs"
    },
    {
        id: 164,
        type: 9,
        text: "Chrome Bigger Worm"
    },
    {
        id: 165,
        type: 9,
        text: "Gold Bigger Worm"
    },
    {
        id: 166,
        type: 9,
        text: "Chrome Vintage Wire"
    },
    {
        id: 167,
        type: 9,
        text: "Gold Vintage Wire"
    },
    {
        id: 168,
        type: 9,
        text: "Chrome Classic Wire"
    },
    {
        id: 169,
        type: 9,
        text: "Gold Classic Wire"
    },
    {
        id: 170,
        type: 9,
        text: "Chrome Smoothie"
    },
    {
        id: 171,
        type: 9,
        text: "Gold Smoothie"
    },
    {
        id: 172,
        type: 9,
        text: "Chrome Classic Rod"
    },
    {
        id: 173,
        type: 9,
        text: "Gold Classic Rod"
    },
    {
        id: 174,
        type: 9,
        text: "Chrome Dollar"
    },
    {
        id: 175,
        type: 9,
        text: "Gold Dollar"
    },
    {
        id: 176,
        type: 9,
        text: "Chrome Mighty Star"
    },
    {
        id: 177,
        type: 9,
        text: "Gold Mighty Star"
    },
    {
        id: 178,
        type: 9,
        text: "Chrome Decadent Dish"
    },
    {
        id: 179,
        type: 9,
        text: "Gold Decadent Dish"
    },
    {
        id: 180,
        type: 9,
        text: "Chrome Razor Style"
    },
    {
        id: 181,
        type: 9,
        text: "Gold Razor Style"
    },
    {
        id: 182,
        type: 9,
        text: "Chrome Celtic Knot"
    },
    {
        id: 183,
        type: 9,
        text: "Gold Celtic Knot"
    },
    {
        id: 184,
        type: 9,
        text: "Chrome Warrior Dish"
    },
    {
        id: 185,
        type: 9,
        text: "Gold Warrior Dish"
    },
    {
        id: 186,
        type: 9,
        text: "Gold Big Dog Spokes"
    },
    {
        id: 187,
        type: 9,
        text: "Chrome OG Hunnets"
    },
    {
        id: 188,
        type: 9,
        text: "Gold OG Hunnets"
    },
    {
        id: 189,
        type: 9,
        text: "Chrome Wires"
    },
    {
        id: 190,
        type: 9,
        text: "Gold Wires"
    },
    {
        id: 191,
        type: 9,
        text: "Chrome Spoked Out"
    },
    {
        id: 192,
        type: 9,
        text: "Gold Spoked Out"
    },
    {
        id: 193,
        type: 9,
        text: "Chrome Knock-Offs"
    },
    {
        id: 194,
        type: 9,
        text: "Gold Knock-Offs"
    },
    {
        id: 195,
        type: 9,
        text: "Chrome Bigger Worm"
    },
    {
        id: 196,
        type: 9,
        text: "Gold Bigger Worm"
    },
    {
        id: 197,
        type: 9,
        text: "Chrome Vintage Wire"
    },
    {
        id: 198,
        type: 9,
        text: "Gold Vintage Wire"
    },
    {
        id: 199,
        type: 9,
        text: "Chrome Classic Wire"
    },
    {
        id: 200,
        type: 9,
        text: "Gold Classic Wire"
    },
    {
        id: 201,
        type: 9,
        text: "Chrome Smoothie"
    },
    {
        id: 202,
        type: 9,
        text: "Gold Smoothie"
    },
    {
        id: 203,
        type: 9,
        text: "Chrome Classic Rod"
    },
    {
        id: 204,
        type: 9,
        text: "Gold Classic Rod"
    },
    {
        id: 205,
        type: 9,
        text: "Chrome Dollar"
    },
    {
        id: 206,
        type: 9,
        text: "Gold Dollar"
    },
    {
        id: 207,
        type: 9,
        text: "Chrome Mighty Star"
    },
    {
        id: 208,
        type: 9,
        text: "Gold Mighty Star"
    },
    {
        id: 209,
        type: 9,
        text: "Chrome Decadent Dish"
    },
    {
        id: 210,
        type: 9,
        text: "Gold Decadent Dish"
    },
    {
        id: 211,
        type: 9,
        text: "Chrome Razor Style"
    },
    {
        id: 212,
        type: 9,
        text: "Gold Razor Style"
    },
    {
        id: 213,
        type: 9,
        text: "Chrome Celtic Knot"
    },
    {
        id: 214,
        type: 9,
        text: "Gold Celtic Knot"
    },
    {
        id: 215,
        type: 9,
        text: "Chrome Warrior Dish"
    },
    {
        id: 216,
        type: 9,
        text: "Gold Warrior Dish"
    },
    {
        id: 217,
        type: 9,
        text: "Gold Big Dog Spokes"
    },
    // ----- OPEN WHEEL
    {
        id: 0,
        type: 10,
        text: "Default"
    },
    {
        id: 1,
        type: 10,
        text: "Classic 5"
    },
    {
        id: 2,
        type: 10,
        text: "Classic 5 (Striped)"
    },
    {
        id: 3,
        type: 10,
        text: "Retro Star"
    },
    {
        id: 4,
        type: 10,
        text: "Retro Star (Striped)"
    },
    {
        id: 5,
        type: 10,
        text: "Triplex"
    },
    {
        id: 6,
        type: 10,
        text: "Triplex (Striped)"
    },
    {
        id: 7,
        type: 10,
        text: "70s Spec"
    },
    {
        id: 8,
        type: 10,
        text: "70s Spec (Striped)"
    },
    {
        id: 9,
        type: 10,
        text: "Super 5R"
    },
    {
        id: 10,
        type: 10,
        text: "Super 5R (Striped)"
    },
    {
        id: 11,
        type: 10,
        text: "Speedster"
    },
    {
        id: 12,
        type: 10,
        text: "Speedster (Striped)"
    },
    {
        id: 13,
        type: 10,
        text: "GP-90"
    },
    {
        id: 14,
        type: 10,
        text: "GP-90 (Striped)"
    },
    {
        id: 15,
        type: 10,
        text: "Superspoke"
    },
    {
        id: 16,
        type: 10,
        text: "Superspoke (Striped)"
    },
    {
        id: 17,
        type: 10,
        text: "Gridline"
    },
    {
        id: 18,
        type: 10,
        text: "Gridline (Striped)"
    },
    {
        id: 19,
        type: 10,
        text: "Snowflake"
    },
    {
        id: 20,
        type: 10,
        text: "Snowflake (Striped)"
    },
    {
        id: 21,
        type: 10,
        text: "Classic 5"
    },
    {
        id: 22,
        type: 10,
        text: "Classic 5 (Striped)"
    },
    {
        id: 23,
        type: 10,
        text: "Retro Star"
    },
    {
        id: 24,
        type: 10,
        text: "Retro Star (Striped)"
    },
    {
        id: 25,
        type: 10,
        text: "Triplex"
    },
    {
        id: 26,
        type: 10,
        text: "Triplex (Striped)"
    },
    {
        id: 27,
        type: 10,
        text: "70s Spec"
    },
    {
        id: 28,
        type: 10,
        text: "70s Spec (Striped)"
    },
    {
        id: 29,
        type: 10,
        text: "Super 5R"
    },
    {
        id: 30,
        type: 10,
        text: "Super 5R (Striped)"
    },
    {
        id: 31,
        type: 10,
        text: "Speedster"
    },
    {
        id: 32,
        type: 10,
        text: "Speedster (Striped)"
    },
    {
        id: 33,
        type: 10,
        text: "GP-90"
    },
    {
        id: 34,
        type: 10,
        text: "GP-90 (Striped)"
    },
    {
        id: 35,
        type: 10,
        text: "Superspoke"
    },
    {
        id: 36,
        type: 10,
        text: "Superspoke (Striped)"
    },
    {
        id: 37,
        type: 10,
        text: "Gridline"
    },
    {
        id: 38,
        type: 10,
        text: "Gridline (Striped)"
    },
    {
        id: 39,
        type: 10,
        text: "Snowflake"
    },
    {
        id: 40,
        type: 10,
        text: "Snowflake (Striped)"
    },
    {
        id: 41,
        type: 10,
        text: "Classic 5"
    },
    {
        id: 42,
        type: 10,
        text: "Classic 5 (Striped)"
    },
    {
        id: 43,
        type: 10,
        text: "Retro Star"
    },
    {
        id: 44,
        type: 10,
        text: "Retro Star (Striped)"
    },
    {
        id: 45,
        type: 10,
        text: "Triplex"
    },
    {
        id: 46,
        type: 10,
        text: "Triplex (Striped)"
    },
    {
        id: 47,
        type: 10,
        text: "70s Spec"
    },
    {
        id: 48,
        type: 10,
        text: "70s Spec (Striped)"
    },
    {
        id: 49,
        type: 10,
        text: "Super 5R"
    },
    {
        id: 50,
        type: 10,
        text: "Super 5R (Striped)"
    },
    {
        id: 51,
        type: 10,
        text: "Speedster"
    },
    {
        id: 52,
        type: 10,
        text: "Speedster (Striped)"
    },
    {
        id: 53,
        type: 10,
        text: "GP-90"
    },
    {
        id: 54,
        type: 10,
        text: "GP-90 (Striped)"
    },
    {
        id: 55,
        type: 10,
        text: "Superspoke"
    },
    {
        id: 56,
        type: 10,
        text: "Superspoke (Striped)"
    },
    {
        id: 57,
        type: 10,
        text: "Gridline"
    },
    {
        id: 58,
        type: 10,
        text: "Gridline (Striped)"
    },
    {
        id: 59,
        type: 10,
        text: "Snowflake"
    },
    {
        id: 60,
        type: 10,
        text: "Snowflake (Striped)"
    },
    {
        id: 61,
        type: 10,
        text: "Classic 5"
    },
    {
        id: 62,
        type: 10,
        text: "Classic 5 (Striped)"
    },
    {
        id: 63,
        type: 10,
        text: "Retro Star"
    },
    {
        id: 64,
        type: 10,
        text: "Retro Star (Striped)"
    },
    {
        id: 65,
        type: 10,
        text: "Triplex"
    },
    {
        id: 66,
        type: 10,
        text: "Triplex (Striped)"
    },
    {
        id: 67,
        type: 10,
        text: "70s Spec"
    },
    {
        id: 68,
        type: 10,
        text: "70s Spec (Striped)"
    },
    {
        id: 69,
        type: 10,
        text: "Super 5R"
    },
    {
        id: 70,
        type: 10,
        text: "Super 5R (Striped)"
    },
    {
        id: 71,
        type: 10,
        text: "Speedster"
    },
    {
        id: 72,
        type: 10,
        text: "Speedster (Striped)"
    },
    {
        id: 73,
        type: 10,
        text: "GP-90"
    },
    {
        id: 74,
        type: 10,
        text: "GP-90 (Striped)"
    },
    {
        id: 75,
        type: 10,
        text: "Superspoke"
    },
    {
        id: 76,
        type: 10,
        text: "Superspoke (Striped)"
    },
    {
        id: 77,
        type: 10,
        text: "Gridline"
    },
    {
        id: 78,
        type: 10,
        text: "Gridline (Striped)"
    },
    {
        id: 79,
        type: 10,
        text: "Snowflake"
    },
    {
        id: 80,
        type: 10,
        text: "Snowflake (Striped)"
    },
    {
        id: 81,
        type: 10,
        text: "Classic 5"
    },
    {
        id: 82,
        type: 10,
        text: "Classic 5 (Striped)"
    },
    {
        id: 83,
        type: 10,
        text: "Retro Star"
    },
    {
        id: 84,
        type: 10,
        text: "Retro Star (Striped)"
    },
    {
        id: 85,
        type: 10,
        text: "Triplex"
    },
    {
        id: 86,
        type: 10,
        text: "Triplex (Striped)"
    },
    {
        id: 87,
        type: 10,
        text: "70s Spec"
    },
    {
        id: 88,
        type: 10,
        text: "70s Spec (Striped)"
    },
    {
        id: 89,
        type: 10,
        text: "Super 5R"
    },
    {
        id: 90,
        type: 10,
        text: "Super 5R (Striped)"
    },
    {
        id: 91,
        type: 10,
        text: "Speedster"
    },
    {
        id: 92,
        type: 10,
        text: "Speedster (Striped)"
    },
    {
        id: 93,
        type: 10,
        text: "GP-90"
    },
    {
        id: 94,
        type: 10,
        text: "GP-90 (Striped)"
    },
    {
        id: 95,
        type: 10,
        text: "Superspoke"
    },
    {
        id: 96,
        type: 10,
        text: "Superspoke (Striped)"
    },
    {
        id: 97,
        type: 10,
        text: "Gridline"
    },
    {
        id: 98,
        type: 10,
        text: "Gridline (Striped)"
    },
    {
        id: 99,
        type: 10,
        text: "Snowflake"
    },
    {
        id: 100,
        type: 10,
        text: "Snowflake (Striped)"
    },
    {
        id: 101,
        type: 10,
        text: "Classic 5"
    },
    {
        id: 102,
        type: 10,
        text: "Classic 5 (Striped)"
    },
    {
        id: 103,
        type: 10,
        text: "Retro Star"
    },
    {
        id: 104,
        type: 10,
        text: "Retro Star (Striped)"
    },
    {
        id: 105,
        type: 10,
        text: "Triplex"
    },
    {
        id: 106,
        type: 10,
        text: "Triplex (Striped)"
    },
    {
        id: 107,
        type: 10,
        text: "70s Spec"
    },
    {
        id: 108,
        type: 10,
        text: "70s Spec (Striped)"
    },
    {
        id: 109,
        type: 10,
        text: "Super 5R"
    },
    {
        id: 110,
        type: 10,
        text: "Super 5R (Striped)"
    },
    {
        id: 111,
        type: 10,
        text: "Speedster"
    },
    {
        id: 112,
        type: 10,
        text: "Speedster (Striped)"
    },
    {
        id: 113,
        type: 10,
        text: "GP-90"
    },
    {
        id: 114,
        type: 10,
        text: "GP-90 (Striped)"
    },
    {
        id: 115,
        type: 10,
        text: "Superspoke"
    },
    {
        id: 116,
        type: 10,
        text: "Superspoke (Striped)"
    },
    {
        id: 117,
        type: 10,
        text: "Gridline"
    },
    {
        id: 118,
        type: 10,
        text: "Gridline (Striped)"
    },
    {
        id: 119,
        type: 10,
        text: "Snowflake"
    },
    {
        id: 120,
        type: 10,
        text: "Snowflake (Striped)"
    },
    {
        id: 121,
        type: 10,
        text: "Classic 5"
    },
    {
        id: 122,
        type: 10,
        text: "Classic 5 (Striped)"
    },
    {
        id: 123,
        type: 10,
        text: "Retro Star"
    },
    {
        id: 124,
        type: 10,
        text: "Retro Star (Striped)"
    },
    {
        id: 125,
        type: 10,
        text: "Triplex"
    },
    {
        id: 126,
        type: 10,
        text: "Triplex (Striped)"
    },
    {
        id: 127,
        type: 10,
        text: "70s Spec"
    },
    {
        id: 128,
        type: 10,
        text: "70s Spec (Striped)"
    },
    {
        id: 129,
        type: 10,
        text: "Super 5R"
    },
    {
        id: 130,
        type: 10,
        text: "Super 5R (Striped)"
    },
    {
        id: 131,
        type: 10,
        text: "Speedster"
    },
    {
        id: 132,
        type: 10,
        text: "Speedster (Striped)"
    },
    {
        id: 133,
        type: 10,
        text: "GP-90"
    },
    {
        id: 134,
        type: 10,
        text: "GP-90 (Striped)"
    },
    {
        id: 135,
        type: 10,
        text: "Superspoke"
    },
    {
        id: 136,
        type: 10,
        text: "Superspoke (Striped)"
    },
    {
        id: 137,
        type: 10,
        text: "Gridline"
    },
    {
        id: 138,
        type: 10,
        text: "Gridline (Striped)"
    },
    {
        id: 139,
        type: 10,
        text: "Snowflake"
    },
    {
        id: 140,
        type: 10,
        text: "Snowflake (Striped)"
    },
    // ----- STREET
    {
        id: 0,
        type: 11,
        text: "Default"
    },
    {
        id: 1,
        type: 11,
        text: "Retro Steelie"
    },
    {
        id: 2,
        type: 11,
        text: "Poverty Spec Steelie"
    },
    {
        id: 3,
        type: 11,
        text: "Concave Steelie"
    },
    {
        id: 4,
        type: 11,
        text: "Nebula"
    },
    {
        id: 5,
        type: 11,
        text: "Hotring Steelie"
    },
    {
        id: 6,
        type: 11,
        text: "Cup Champion"
    },
    {
        id: 8,
        type: 11,
        text: "Stanced EG Custom"
    },
    {
        id: 8,
        type: 11,
        text: "Kracka Custom"
    },
    {
        id: 9,
        type: 11,
        text: "Dukes Custom"
    },
    {
        id: 10,
        type: 11,
        text: "Endo v.3 Custom"
    },
    {
        id: 11,
        type: 11,
        text: "V8 Killer"
    },
    {
        id: 12,
        type: 11,
        text: "Fujiwara Custom"
    },
    {
        id: 13,
        type: 11,
        text: "Cosmo MKII"
    },
    {
        id: 14,
        type: 11,
        text: "Aero Star"
    },
    {
        id: 15,
        type: 11,
        text: "Hype Five"
    },
    {
        id: 16,
        type: 11,
        text: "Ruff Weld Mega Deep"
    },
    {
        id: 17,
        type: 11,
        text: "Mercie Concave"
    },
    {
        id: 18,
        type: 11,
        text: "Sugoi Concave"
    },
    {
        id: 19,
        type: 11,
        text: "Synthetic Z Concave"
    },
    {
        id: 20,
        type: 11,
        text: "Endo v.4 Dished"
    },
    {
        id: 21,
        type: 11,
        text: "Hyperfresh"
    },
    {
        id: 22,
        type: 11,
        text: "Truffade Concave"
    },
    {
        id: 23,
        type: 11,
        text: "Organic Type II"
    },
    {
        id: 24,
        type: 11,
        text: "Big Mamba"
    },
    {
        id: 25,
        type: 11,
        text: "Deep Flake"
    },
    {
        id: 27,
        type: 11,
        text: "Concave Racer"
    },
    {
        id: 26,
        type: 11,
        text: "Cosmo MKIII"
    },
    {
        id: 28,
        type: 11,
        text: "Deep Flake Reverse"
    },
    {
        id: 29,
        type: 11,
        text: "Wild Wagon"
    },
    {
        id: 30,
        type: 11,
        text: "Concave Mega Mesh"
    },
    {
        id: 31,
        type: 11,
        text: "AW Retro Steelie"
    },
    {
        id: 32,
        type: 11,
        text: "AW Poverty Spec Steelie"
    },
    {
        id: 33,
        type: 11,
        text: "AW Concave Steelie"
    },
    {
        id: 34,
        type: 11,
        text: "AW Nebula"
    },
    {
        id: 35,
        type: 11,
        text: "AW Hotring Steelie"
    },
    {
        id: 36,
        type: 11,
        text: "AW Cup Champion"
    },
    {
        id: 37,
        type: 11,
        text: "AW Stanced EG Custom"
    },
    {
        id: 38,
        type: 11,
        text: "AW Kracka Custom"
    },
    {
        id: 39,
        type: 11,
        text: "AW Dukes Custom"
    },
    {
        id: 40,
        type: 11,
        text: "AW Endo v.3 Custom"
    },
    {
        id: 41,
        type: 11,
        text: "AW V8 Killer"
    },
    {
        id: 42,
        type: 11,
        text: "AW Fujiwara Custom"
    },
    {
        id: 43,
        type: 11,
        text: "AW Cosmo MKII"
    },
    {
        id: 44,
        type: 11,
        text: "AW Aero Star"
    },
    {
        id: 45,
        type: 11,
        text: "AW Hype Five"
    },
    {
        id: 46,
        type: 11,
        text: "AW Ruff Weld Mega Deep"
    },
    {
        id: 47,
        type: 11,
        text: "AW Mercie Concave"
    },
    {
        id: 48,
        type: 11,
        text: "AW Sugoi Concave"
    },
    {
        id: 49,
        type: 11,
        text: "AW Synthetic Z Concave"
    },
    {
        id: 50,
        type: 11,
        text: "AW Endo v.4 Dished"
    },
    {
        id: 51,
        type: 11,
        text: "AW Hyperfresh"
    },
    {
        id: 52,
        type: 11,
        text: "AW Truffade Concave"
    },
    {
        id: 53,
        type: 11,
        text: "AW Organic Type II"
    },
    {
        id: 54,
        type: 11,
        text: "AW Big Mamba"
    },
    {
        id: 55,
        type: 11,
        text: "AW Deep Flake"
    },
    {
        id: 56,
        type: 11,
        text: "AW Cosmo MKIII"
    },
    {
        id: 57,
        type: 11,
        text: "AW Concave Racer"
    },
    {
        id: 58,
        type: 11,
        text: "AW Deep Flake Reverse"
    },
    {
        id: 59,
        type: 11,
        text: "AW Wild Wagon"
    },
    {
        id: 60,
        type: 11,
        text: "AW Concave Mega Mesh"
    },
    {
        id: 61,
        type: 11,
        text: "AG Retro Steelie"
    },
    {
        id: 62,
        type: 11,
        text: "AG Poverty Spec Steelie"
    },
    {
        id: 63,
        type: 11,
        text: "AG Concave Steelie"
    },
    {
        id: 64,
        type: 11,
        text: "AG Nebula"
    },
    {
        id: 65,
        type: 11,
        text: "AG Hotring Steelie"
    },
    {
        id: 66,
        type: 11,
        text: "AG Cup Champion"
    },
    {
        id: 67,
        type: 11,
        text: "AG Stanced EG Custom"
    },
    {
        id: 68,
        type: 11,
        text: "AG Kracka Custom"
    },
    {
        id: 69,
        type: 11,
        text: "AG Dukes Custom"
    },
    {
        id: 70,
        type: 11,
        text: "AG Endo v.3 Custom"
    },
    {
        id: 71,
        type: 11,
        text: "AG V8 Killer"
    },
    {
        id: 72,
        type: 11,
        text: "AG Fujiwara Custom"
    },
    {
        id: 73,
        type: 11,
        text: "AG Cosmo MKII"
    },
    {
        id: 74,
        type: 11,
        text: "AG Aero Star"
    },
    {
        id: 75,
        type: 11,
        text: "AG Hype Five"
    },
    {
        id: 76,
        type: 11,
        text: "AG Ruff Weld Mega Deep"
    },
    {
        id: 77,
        type: 11,
        text: "AG Mercie Concave"
    },
    {
        id: 78,
        type: 11,
        text: "AG Sugoi Concave"
    },
    {
        id: 79,
        type: 11,
        text: "AG Synthetic Z Concave"
    },
    {
        id: 80,
        type: 11,
        text: "AG Endo v.4 Dished"
    },
    {
        id: 81,
        type: 11,
        text: "AG Hyperfresh"
    },
    {
        id: 82,
        type: 11,
        text: "AG Truffade Concave"
    },
    {
        id: 83,
        type: 11,
        text: "AG Organic Type II"
    },
    {
        id: 84,
        type: 11,
        text: "AG Big Mamba"
    },
    {
        id: 85,
        type: 11,
        text: "AG Deep Flake"
    },
    {
        id: 86,
        type: 11,
        text: "AG Cosmo MKIII"
    },
    {
        id: 87,
        type: 11,
        text: "AG Concave Racer"
    },
    {
        id: 88,
        type: 11,
        text: "AG Deep Flake Reverse"
    },
    {
        id: 89,
        type: 11,
        text: "AG Wild Wagon"
    },
    {
        id: 90,
        type: 11,
        text: "AG Concave Mega Mesh"
    },
    {
        id: 91,
        type: 11,
        text: "FW Retro Steelie"
    },
    {
        id: 92,
        type: 11,
        text: "FW Poverty Spec Steelie"
    },
    {
        id: 93,
        type: 11,
        text: "FW Concave Steelie"
    },
    {
        id: 94,
        type: 11,
        text: "FW Nebula"
    },
    {
        id: 95,
        type: 11,
        text: "FW Hotring Steelie"
    },
    {
        id: 96,
        type: 11,
        text: "FW Cup Champion"
    },
    {
        id: 97,
        type: 11,
        text: "FW Stanced EG Custom"
    },
    {
        id: 98,
        type: 11,
        text: "FW Kracka Custom"
    },
    {
        id: 99,
        type: 11,
        text: "FW Dukes Custom"
    },
    {
        id: 100,
        type: 11,
        text: "FW Endo v.3 Custom"
    },
    {
        id: 101,
        type: 11,
        text: "FW V8 Killer"
    },
    {
        id: 102,
        type: 11,
        text: "FW Fujiwara Custom"
    },
    {
        id: 103,
        type: 11,
        text: "FW Cosmo MKII"
    },
    {
        id: 104,
        type: 11,
        text: "FW Aero Star"
    },
    {
        id: 105,
        type: 11,
        text: "FW Hype Five"
    },
    {
        id: 106,
        type: 11,
        text: "FW Ruff Weld Mega Deep"
    },
    {
        id: 107,
        type: 11,
        text: "FW Mercie Concave"
    },
    {
        id: 108,
        type: 11,
        text: "FW Sugoi Concave"
    },
    {
        id: 109,
        type: 11,
        text: "FW Synthetic Z Concave"
    },
    {
        id: 100,
        type: 11,
        text: "FW Endo v.4 Dished"
    },
    {
        id: 110,
        type: 11,
        text: "FW Hyperfresh"
    },
    {
        id: 112,
        type: 11,
        text: "FW Truffade Concave"
    },
    {
        id: 113,
        type: 11,
        text: "FW Organic Type II"
    },
    {
        id: 114,
        type: 11,
        text: "FW Big Mamba"
    },
    {
        id: 115,
        type: 11,
        text: "FW Deep Flake"
    },
    {
        id: 116,
        type: 11,
        text: "FW Cosmo MKIII"
    },
    {
        id: 117,
        type: 11,
        text: "FW Concave Racer"
    },
    {
        id: 118,
        type: 11,
        text: "FW Deep Flake Reverse"
    },
    {
        id: 119,
        type: 11,
        text: "FW Wild Wagon"
    },
    {
        id: 120,
        type: 11,
        text: "FW Concave Mega Mesh"
    },
    {
        id: 121,
        type: 11,
        text: "FR Retro Steelie"
    },
    {
        id: 122,
        type: 11,
        text: "FR Poverty Spec Steelie"
    },
    {
        id: 123,
        type: 11,
        text: "FR Concave Steelie"
    },
    {
        id: 124,
        type: 11,
        text: "FR Nebula"
    },
    {
        id: 125,
        type: 11,
        text: "FR Hotring Steelie"
    },
    {
        id: 126,
        type: 11,
        text: "FR Cup Champion"
    },
    {
        id: 127,
        type: 11,
        text: "FR Stanced EG Custom"
    },
    {
        id: 128,
        type: 11,
        text: "FR Kracka Custom"
    },
    {
        id: 129,
        type: 11,
        text: "FR Dukes Custom"
    },
    {
        id: 130,
        type: 11,
        text: "FR Endo v.3 Custom"
    },
    {
        id: 131,
        type: 11,
        text: "FR V8 Killer"
    },
    {
        id: 132,
        type: 11,
        text: "FR Fujiwara Custom"
    },
    {
        id: 133,
        type: 11,
        text: "FR Cosmo MKII"
    },
    {
        id: 134,
        type: 11,
        text: "FR Aero Star"
    },
    {
        id: 135,
        type: 11,
        text: "FR Hype Five"
    },
    {
        id: 136,
        type: 11,
        text: "FR Ruff Weld Mega Deep"
    },
    {
        id: 137,
        type: 11,
        text: "FR Mercie Concave"
    },
    {
        id: 138,
        type: 11,
        text: "FR Sugoi Concave"
    },
    {
        id: 139,
        type: 11,
        text: "FR Synthetic Z Concave"
    },
    {
        id: 140,
        type: 11,
        text: "FR Endo v.4 Dished"
    },
    {
        id: 140,
        type: 11,
        text: "FR Hyperfresh"
    },
    {
        id: 142,
        type: 11,
        text: "FR Truffade Concave"
    },
    {
        id: 143,
        type: 11,
        text: "FR Organic Type II"
    },
    {
        id: 144,
        type: 11,
        text: "FR Big Mamba"
    },
    {
        id: 145,
        type: 11,
        text: "FR Deep Flake"
    },
    {
        id: 146,
        type: 11,
        text: "FR Cosmo MKIII"
    },
    {
        id: 147,
        type: 11,
        text: "FR Concave Racer"
    },
    {
        id: 148,
        type: 11,
        text: "FR Deep Flake Reverse"
    },
    {
        id: 149,
        type: 11,
        text: "FR Wild Wagon"
    },
    {
        id: 150,
        type: 11,
        text: "FR Concave Mega Mesh"
    },
    {
        id: 151,
        type: 11,
        text: "CH Retro Steelie"
    },
    {
        id: 152,
        type: 11,
        text: "CH Poverty Spec Steelie"
    },
    {
        id: 153,
        type: 11,
        text: "CH Concave Steelie"
    },
    {
        id: 154,
        type: 11,
        text: "CH Nebula"
    },
    {
        id: 155,
        type: 11,
        text: "CH Hotring Steelie"
    },
    {
        id: 156,
        type: 11,
        text: "CH Cup Champion"
    },
    {
        id: 157,
        type: 11,
        text: "CH Stanced EG Custom"
    },
    {
        id: 158,
        type: 11,
        text: "CH Kracka Custom"
    },
    {
        id: 159,
        type: 11,
        text: "CH Dukes Custom"
    },
    {
        id: 160,
        type: 11,
        text: "CH Endo v.3 Custom"
    },
    {
        id: 161,
        type: 11,
        text: "CH V8 Killer"
    },
    {
        id: 162,
        type: 11,
        text: "CH Fujiwara Custom"
    },
    {
        id: 163,
        type: 11,
        text: "CH Cosmo MKII"
    },
    {
        id: 164,
        type: 11,
        text: "CH Aero Star"
    },
    {
        id: 165,
        type: 11,
        text: "CH Hype Five"
    },
    {
        id: 166,
        type: 11,
        text: "CH Ruff Weld Mega Deep"
    },
    {
        id: 167,
        type: 11,
        text: "CH Mercie Concave"
    },
    {
        id: 168,
        type: 11,
        text: "CH Sugoi Concave"
    },
    {
        id: 169,
        type: 11,
        text: "CH Synthetic Z Concave"
    },
    {
        id: 170,
        type: 11,
        text: "CH Endo v.4 Dished"
    },
    {
        id: 171,
        type: 11,
        text: "CH Hyperfresh"
    },
    {
        id: 172,
        type: 11,
        text: "CH Truffade Concave"
    },
    {
        id: 173,
        type: 11,
        text: "CH Organic Type II"
    },
    {
        id: 174,
        type: 11,
        text: "CH Big Mamba"
    },
    {
        id: 175,
        type: 11,
        text: "CH Deep Flake"
    },
    {
        id: 176,
        type: 11,
        text: "CH Cosmo MKIII"
    },
    {
        id: 177,
        type: 11,
        text: "CH Concave Racer"
    },
    {
        id: 178,
        type: 11,
        text: "CH Deep Flake Reverse"
    },
    {
        id: 179,
        type: 11,
        text: "CH Wild Wagon"
    },
    {
        id: 180,
        type: 11,
        text: "CH Concave Mega Mesh"
    },
    {
        id: 181,
        type: 11,
        text: "CG Retro Steelie"
    },
    {
        id: 182,
        type: 11,
        text: "CG Poverty Spec Steelie"
    },
    {
        id: 183,
        type: 11,
        text: "CG Concave Steelie"
    },
    {
        id: 184,
        type: 11,
        text: "CG Nebula"
    },
    {
        id: 185,
        type: 11,
        text: "CG Hotring Steelie"
    },
    {
        id: 186,
        type: 11,
        text: "CG Cup Champion"
    },
    {
        id: 187,
        type: 11,
        text: "CG Stanced EG Custom"
    },
    {
        id: 188,
        type: 11,
        text: "CG Kracka Custom"
    },
    {
        id: 189,
        type: 11,
        text: "CG Dukes Custom"
    },
    {
        id: 190,
        type: 11,
        text: "CG Endo v.3 Custom"
    },
    {
        id: 191,
        type: 11,
        text: "CG V8 Killer"
    },
    {
        id: 192,
        type: 11,
        text: "CG Fujiwara Custom"
    },
    {
        id: 193,
        type: 11,
        text: "CG Cosmo MKII"
    },
    {
        id: 194,
        type: 11,
        text: "CG Aero Star"
    },
    {
        id: 195,
        type: 11,
        text: "CG Hype Five"
    },
    {
        id: 196,
        type: 11,
        text: "CG Ruff Weld Mega Deep"
    },
    {
        id: 197,
        type: 11,
        text: "CG Mercie Concave"
    },
    {
        id: 198,
        type: 11,
        text: "CG Sugoi Concave"
    },
    {
        id: 199,
        type: 11,
        text: "CG Synthetic Z Concave"
    },
    {
        id: 200,
        type: 11,
        text: "CG Endo v.4 Dished"
    },
    {
        id: 201,
        type: 11,
        text: "CG Hyperfresh"
    },
    {
        id: 202,
        type: 11,
        text: "CG Truffade Concave"
    },
    {
        id: 203,
        type: 11,
        text: "CG Organic Type II"
    },
    {
        id: 204,
        type: 11,
        text: "CG Big Mamba"
    },
    {
        id: 205,
        type: 11,
        text: "CG Deep Flake"
    },
    {
        id: 206,
        type: 11,
        text: "CG Cosmo MKIII"
    },
    {
        id: 207,
        type: 11,
        text: "CG Concave Racer"
    },
    {
        id: 208,
        type: 11,
        text: "CG Deep Flake Reverse"
    },
    {
        id: 209,
        type: 11,
        text: "CG Wild Wagon"
    },
    {
        id: 210,
        type: 11,
        text: "CG Concave Mega Mesh"
    },
    // ----- TRACK
    {
        id: 0,
        type: 12,
        text: "Default"
    },
    {
        id: 1,
        type: 12,
        text: "Rally Throwback"
    },
    {
        id: 2,
        type: 12,
        text: "Gravel Trap"
    },
    {
        id: 3,
        type: 12,
        text: "Stove Top"
    },
    {
        id: 4,
        type: 12,
        text: "Stove Top Mesh"
    },
    {
        id: 5,
        type: 12,
        text: "Retro 3 Piece"
    },
    {
        id: 6,
        type: 12,
        text: "Rally Monoblock"
    },
    {
        id: 7,
        type: 12,
        text: "Forged 5"
    },
    {
        id: 8,
        type: 12,
        text: "Split Star"
    },
    {
        id: 9,
        type: 12,
        text: "Speed Boy"
    },
    {
        id: 10,
        type: 12,
        text: "90s Running"
    },
    {
        id: 11,
        type: 12,
        text: "Tropos"
    },
    {
        id: 12,
        type: 12,
        text: "Exos"
    },
    {
        id: 13,
        type: 12,
        text: "High Five"
    },
    {
        id: 14,
        type: 12,
        text: "Super Luxe"
    },
    {
        id: 15,
        type: 12,
        text: "Pure Business"
    },
    {
        id: 16,
        type: 12,
        text: "Pepper Pot"
    },
    {
        id: 17,
        type: 12,
        text: "Blacktop Blender"
    },
    {
        id: 18,
        type: 12,
        text: "Throwback"
    },
    {
        id: 19,
        type: 12,
        text: "Expressway"
    },
    {
        id: 20,
        type: 12,
        text: "Hidden Six"
    },
    {
        id: 21,
        type: 12,
        text: "Dinka SPL"
    },
    {
        id: 22,
        type: 12,
        text: "Retro Turbofan"
    },
    {
        id: 23,
        type: 12,
        text: "Conical Turbofan"
    },
    {
        id: 24,
        type: 12,
        text: "Ice Storm"
    },
    {
        id: 25,
        type: 12,
        text: "Super Turbine"
    },
    {
        id: 26,
        type: 12,
        text: "Modern Mesh"
    },
    {
        id: 27,
        type: 12,
        text: "Forged Star"
    },
    {
        id: 28,
        type: 12,
        text: "Snowflake"
    },
    {
        id: 29,
        type: 12,
        text: "Giga Mesh"
    },
    {
        id: 30,
        type: 12,
        text: "Mesh Meister"
    },
    {
        id: 31,
        type: 12,
        text: "AW Rally Throwback"
    },
    {
        id: 32,
        type: 12,
        text: "AW Gravel Trap"
    },
    {
        id: 33,
        type: 12,
        text: "AW Stove Top"
    },
    {
        id: 34,
        type: 12,
        text: "AW Stove Top Mesh"
    },
    {
        id: 35,
        type: 12,
        text: "AW Retro 3 Piece"
    },
    {
        id: 36,
        type: 12,
        text: "AW Rally Monoblock"
    },
    {
        id: 37,
        type: 12,
        text: "AW Forged 5"
    },
    {
        id: 38,
        type: 12,
        text: "AW Split Star"
    },
    {
        id: 39,
        type: 12,
        text: "AW Speed Boy"
    },
    {
        id: 40,
        type: 12,
        text: "AW 90s Running"
    },
    {
        id: 41,
        type: 12,
        text: "AW Tropos"
    },
    {
        id: 42,
        type: 12,
        text: "AW Exos"
    },
    {
        id: 43,
        type: 12,
        text: "AW High Five"
    },
    {
        id: 44,
        type: 12,
        text: "AW Super Luxe"
    },
    {
        id: 45,
        type: 12,
        text: "AW Pure Business"
    },
    {
        id: 46,
        type: 12,
        text: "AW Pepper Pot"
    },
    {
        id: 47,
        type: 12,
        text: "AW Blacktop Blender"
    },
    {
        id: 48,
        type: 12,
        text: "AW Throwback"
    },
    {
        id: 49,
        type: 12,
        text: "AW Expressway"
    },
    {
        id: 50,
        type: 12,
        text: "AW Hidden Six"
    },
    {
        id: 51,
        type: 12,
        text: "AW Dinka SPL"
    },
    {
        id: 52,
        type: 12,
        text: "AW Retro Turbofan"
    },
    {
        id: 53,
        type: 12,
        text: "AW Conical Turbofan "
    },
    {
        id: 54,
        type: 12,
        text: "AW Ice Storm"
    },
    {
        id: 55,
        type: 12,
        text: "AW Super Turbine"
    },
    {
        id: 56,
        type: 12,
        text: "AW Modern Mesh"
    },
    {
        id: 57,
        type: 12,
        text: "AW Forged Star"
    },
    {
        id: 58,
        type: 12,
        text: "AW Snowflake"
    },
    {
        id: 59,
        type: 12,
        text: "AW Giga Mesh"
    },
    {
        id: 60,
        type: 12,
        text: "AW Mesh Meister"
    },
    {
        id: 61,
        type: 12,
        text: "AG Rally Throwback"
    },
    {
        id: 62,
        type: 12,
        text: "AG Gravel Trap"
    },
    {
        id: 63,
        type: 12,
        text: "AG Stove Top"
    },
    {
        id: 64,
        type: 12,
        text: "AG Stove Top Mesh"
    },
    {
        id: 65,
        type: 12,
        text: "AG Retro 3 Piece"
    },
    {
        id: 66,
        type: 12,
        text: "AG Rally Monoblock"
    },
    {
        id: 67,
        type: 12,
        text: "AG Forged 5"
    },
    {
        id: 68,
        type: 12,
        text: "AG Split Star"
    },
    {
        id: 69,
        type: 12,
        text: "AG Speed Boy"
    },
    {
        id: 70,
        type: 12,
        text: "AG 90s Running"
    },
    {
        id: 71,
        type: 12,
        text: "AG Tropos"
    },
    {
        id: 72,
        type: 12,
        text: "AG Exos"
    },
    {
        id: 73,
        type: 12,
        text: "AG High Five"
    },
    {
        id: 74,
        type: 12,
        text: "AG Super Luxe"
    },
    {
        id: 75,
        type: 12,
        text: "AG Pure Business"
    },
    {
        id: 76,
        type: 12,
        text: "AG Pepper Pot"
    },
    {
        id: 77,
        type: 12,
        text: "AG Blacktop Blender"
    },
    {
        id: 78,
        type: 12,
        text: "AG Throwback"
    },
    {
        id: 79,
        type: 12,
        text: "AG Expressway"
    },
    {
        id: 80,
        type: 12,
        text: "AG Hidden Six"
    },
    {
        id: 81,
        type: 12,
        text: "AG Dinka SPL"
    },
    {
        id: 82,
        type: 12,
        text: "AG Retro Turbofan"
    },
    {
        id: 83,
        type: 12,
        text: "AG Conical Turbofan "
    },
    {
        id: 84,
        type: 12,
        text: "AG Ice Storm"
    },
    {
        id: 85,
        type: 12,
        text: "AG Super Turbine"
    },
    {
        id: 86,
        type: 12,
        text: "AG Modern Mesh"
    },
    {
        id: 87,
        type: 12,
        text: "AG Forged Star"
    },
    {
        id: 88,
        type: 12,
        text: "AG Snowflake"
    },
    {
        id: 89,
        type: 12,
        text: "AG Giga Mesh"
    },
    {
        id: 90,
        type: 12,
        text: "AG Mesh Meister"
    },
    {
        id: 91,
        type: 12,
        text: "FW Rally Throwback"
    },
    {
        id: 92,
        type: 12,
        text: "FW Gravel Trap"
    },
    {
        id: 93,
        type: 12,
        text: "FW Stove Top"
    },
    {
        id: 94,
        type: 12,
        text: "FW Stove Top Mesh"
    },
    {
        id: 95,
        type: 12,
        text: "FW Retro 3 Piece"
    },
    {
        id: 96,
        type: 12,
        text: "FW Rally Monoblock"
    },
    {
        id: 97,
        type: 12,
        text: "FW Forged 5"
    },
    {
        id: 98,
        type: 12,
        text: "FW Split Star"
    },
    {
        id: 99,
        type: 12,
        text: "FW Speed Boy"
    },
    {
        id: 100,
        type: 12,
        text: "FW 90s Running"
    },
    {
        id: 101,
        type: 12,
        text: "FW Tropos"
    },
    {
        id: 102,
        type: 12,
        text: "FW Exos"
    },
    {
        id: 103,
        type: 12,
        text: "FW High Five"
    },
    {
        id: 104,
        type: 12,
        text: "FW Super Luxe"
    },
    {
        id: 105,
        type: 12,
        text: "FW Pure Business"
    },
    {
        id: 106,
        type: 12,
        text: "FW Pepper Pot"
    },
    {
        id: 107,
        type: 12,
        text: "FW Blacktop Blender"
    },
    {
        id: 108,
        type: 12,
        text: "FW Throwback"
    },
    {
        id: 109,
        type: 12,
        text: "FW Expressway"
    },
    {
        id: 100,
        type: 12,
        text: "FW Hidden Six"
    },
    {
        id: 111,
        type: 12,
        text: "FW Dinka SPL"
    },
    {
        id: 112,
        type: 12,
        text: "FW Retro Turbofan"
    },
    {
        id: 113,
        type: 12,
        text: "FW Conical Turbofan "
    },
    {
        id: 114,
        type: 12,
        text: "FW Ice Storm"
    },
    {
        id: 115,
        type: 12,
        text: "FW Super Turbine"
    },
    {
        id: 116,
        type: 12,
        text: "FW Modern Mesh"
    },
    {
        id: 117,
        type: 12,
        text: "FW Forged Star"
    },
    {
        id: 118,
        type: 12,
        text: "FW Snowflake"
    },
    {
        id: 119,
        type: 12,
        text: "FW Giga Mesh"
    },
    {
        id: 120,
        type: 12,
        text: "FW Mesh Meister"
    },
    {
        id: 121,
        type: 12,
        text: "FR Rally Throwback"
    },
    {
        id: 122,
        type: 12,
        text: "FR Gravel Trap"
    },
    {
        id: 123,
        type: 12,
        text: "FR Stove Top"
    },
    {
        id: 124,
        type: 12,
        text: "FR Stove Top Mesh"
    },
    {
        id: 125,
        type: 12,
        text: "FR Retro 3 Piece"
    },
    {
        id: 126,
        type: 12,
        text: "FR Rally Monoblock"
    },
    {
        id: 127,
        type: 12,
        text: "FR Forged 5"
    },
    {
        id: 128,
        type: 12,
        text: "FR Split Star"
    },
    {
        id: 129,
        type: 12,
        text: "FR Speed Boy"
    },
    {
        id: 130,
        type: 12,
        text: "FR 90s Running"
    },
    {
        id: 131,
        type: 12,
        text: "FR Tropos"
    },
    {
        id: 132,
        type: 12,
        text: "FR Exos"
    },
    {
        id: 133,
        type: 12,
        text: "FR High Five"
    },
    {
        id: 134,
        type: 12,
        text: "FR Super Luxe"
    },
    {
        id: 135,
        type: 12,
        text: "FR Pure Business"
    },
    {
        id: 136,
        type: 12,
        text: "FR Pepper Pot"
    },
    {
        id: 137,
        type: 12,
        text: "FR Blacktop Blender"
    },
    {
        id: 138,
        type: 12,
        text: "FR Throwback"
    },
    {
        id: 139,
        type: 12,
        text: "FR Expressway"
    },
    {
        id: 140,
        type: 12,
        text: "FR Hidden Six"
    },
    {
        id: 141,
        type: 12,
        text: "FR Dinka SPL"
    },
    {
        id: 142,
        type: 12,
        text: "FR Retro Turbofan"
    },
    {
        id: 143,
        type: 12,
        text: "FR Conical Turbofan "
    },
    {
        id: 144,
        type: 12,
        text: "FR Ice Storm"
    },
    {
        id: 145,
        type: 12,
        text: "FR Super Turbine"
    },
    {
        id: 146,
        type: 12,
        text: "FR Modern Mesh"
    },
    {
        id: 147,
        type: 12,
        text: "FR Forged Star"
    },
    {
        id: 148,
        type: 12,
        text: "FR Snowflake"
    },
    {
        id: 149,
        type: 12,
        text: "FR Giga Mesh"
    },
    {
        id: 150,
        type: 12,
        text: "FR Mesh Meister"
    },
    {
        id: 151,
        type: 12,
        text: "CH Rally Throwback"
    },
    {
        id: 152,
        type: 12,
        text: "CH Gravel Trap"
    },
    {
        id: 153,
        type: 12,
        text: "CH Stove Top"
    },
    {
        id: 154,
        type: 12,
        text: "CH Stove Top Mesh"
    },
    {
        id: 155,
        type: 12,
        text: "CH Retro 3 Piece"
    },
    {
        id: 156,
        type: 12,
        text: "CH Rally Monoblock"
    },
    {
        id: 157,
        type: 12,
        text: "CH Forged 5"
    },
    {
        id: 158,
        type: 12,
        text: "CH Split Star"
    },
    {
        id: 159,
        type: 12,
        text: "CH Speed Boy"
    },
    {
        id: 160,
        type: 12,
        text: "CH 90s Running"
    },
    {
        id: 161,
        type: 12,
        text: "CH Tropos"
    },
    {
        id: 162,
        type: 12,
        text: "CH Exos"
    },
    {
        id: 163,
        type: 12,
        text: "CH High Five"
    },
    {
        id: 164,
        type: 12,
        text: "CH Super Luxe"
    },
    {
        id: 165,
        type: 12,
        text: "CH Pure Business"
    },
    {
        id: 166,
        type: 12,
        text: "CH Pepper Pot"
    },
    {
        id: 167,
        type: 12,
        text: "CH Blacktop Blender"
    },
    {
        id: 168,
        type: 12,
        text: "CH Throwback"
    },
    {
        id: 169,
        type: 12,
        text: "CH Expressway"
    },
    {
        id: 170,
        type: 12,
        text: "CH Hidden Six"
    },
    {
        id: 171,
        type: 12,
        text: "CH Dinka SPL"
    },
    {
        id: 172,
        type: 12,
        text: "CH Retro Turbofan"
    },
    {
        id: 173,
        type: 12,
        text: "CH Conical Turbofan "
    },
    {
        id: 174,
        type: 12,
        text: "CH Ice Storm"
    },
    {
        id: 175,
        type: 12,
        text: "CH Super Turbine"
    },
    {
        id: 176,
        type: 12,
        text: "CH Modern Mesh"
    },
    {
        id: 177,
        type: 12,
        text: "CH Forged Star"
    },
    {
        id: 178,
        type: 12,
        text: "CH Snowflake"
    },
    {
        id: 179,
        type: 12,
        text: "CH Giga Mesh"
    },
    {
        id: 180,
        type: 12,
        text: "CH Mesh Meister"
    },
    {
        id: 181,
        type: 12,
        text: "CG Rally Throwback"
    },
    {
        id: 182,
        type: 12,
        text: "CG Gravel Trap"
    },
    {
        id: 183,
        type: 12,
        text: "CG Stove Top"
    },
    {
        id: 184,
        type: 12,
        text: "CG Stove Top Mesh"
    },
    {
        id: 185,
        type: 12,
        text: "CG Retro 3 Piece"
    },
    {
        id: 186,
        type: 12,
        text: "CG Rally Monoblock"
    },
    {
        id: 187,
        type: 12,
        text: "CG Forged 5"
    },
    {
        id: 188,
        type: 12,
        text: "CG Split Star"
    },
    {
        id: 189,
        type: 12,
        text: "CG Speed Boy"
    },
    {
        id: 190,
        type: 12,
        text: "CG 90s Running"
    },
    {
        id: 191,
        type: 12,
        text: "CG Tropos"
    },
    {
        id: 192,
        type: 12,
        text: "CG Exos"
    },
    {
        id: 193,
        type: 12,
        text: "CG High Five"
    },
    {
        id: 194,
        type: 12,
        text: "CG Super Luxe"
    },
    {
        id: 195,
        type: 12,
        text: "CG Pure Business"
    },
    {
        id: 196,
        type: 12,
        text: "CG Pepper Pot"
    },
    {
        id: 197,
        type: 12,
        text: "CG Blacktop Blender"
    },
    {
        id: 198,
        type: 12,
        text: "CG Throwback"
    },
    {
        id: 199,
        type: 12,
        text: "CG Expressway"
    },
    {
        id: 200,
        type: 12,
        text: "CG Hidden Six"
    },
    {
        id: 201,
        type: 12,
        text: "CG Dinka SPL"
    },
    {
        id: 202,
        type: 12,
        text: "CG Retro Turbofan"
    },
    {
        id: 203,
        type: 12,
        text: "CG Conical Turbofan "
    },
    {
        id: 204,
        type: 12,
        text: "CG Ice Storm"
    },
    {
        id: 205,
        type: 12,
        text: "CG Super Turbine"
    },
    {
        id: 206,
        type: 12,
        text: "CG Modern Mesh"
    },
    {
        id: 207,
        type: 12,
        text: "CG Forged Star"
    },
    {
        id: 208,
        type: 12,
        text: "CG Snowflake"
    },
    {
        id: 209,
        type: 12,
        text: "CG Giga Mesh"
    },
    {
        id: 210,
        type: 12,
        text: "CG Mesh Meister"
    }, 
];
var colorsArray = [
    {
        type: "Metallic",
        id: 0,
        text: "Black"
    },
    {
        type: "Metallic",
        id: 141,
        text: "Black Blue"
    },
    {
        type: "Metallic",
        id: 142,
        text: "Black Purple"
    },
    {
        type: "Metallic",
        id: 143,
        text: "Black Red"
    },
    {
        type: "Metallic",
        id: 111,
        text: "White"
    },
    {
        type: "Metallic",
        id: 112,
        text: "Frost White"
    },
    {
        type: "Metallic",
        id: 1,
        text: "Graphite Black"
    },
    {
        type: "Metallic",
        id: 2,
        text: "Black Steal"
    },
    {
        type: "Metallic",
        id: 3,
        text: "Dark Silver"
    },
    {
        type: "Metallic",
        id: 4,
        text: "Silver"
    },
    {
        type: "Metallic",
        id: 5,
        text: "Blue Silver"
    },
    {
        type: "Metallic",
        id: 6,
        text: "Steel Gray"
    },
    {
        type: "Metallic",
        id: 7,
        text: "Shadow Silver"
    },
    {
        type: "Metallic",
        id: 8,
        text: "Stone Silver"
    },
    {
        type: "Metallic",
        id: 9,
        text: "Midnight Silver"
    },
    {
        type: "Metallic",
        id: 10,
        text: "Gun Metal"
    },
    {
        type: "Metallic",
        id: 11,
        text: "Anthracite Grey"
    },
    {
        type: "Metallic",
        id: 27,
        text: "Red"
    },
    {
        type: "Metallic",
        id: 28,
        text: "Torino Red"
    },
    {
        type: "Metallic",
        id: 29,
        text: "Formula Red"
    },
    {
        type: "Metallic",
        id: 30,
        text: "Blaze Red"
    },
    {
        type: "Metallic",
        id: 31,
        text: "Graceful Red"
    },
    {
        type: "Metallic",
        id: 32,
        text: "Garnet Red"
    },
    {
        type: "Metallic",
        id: 33,
        text: "Desert Red"
    },
    {
        type: "Metallic",
        id: 34,
        text: "Cabernet Red"
    },
    {
        type: "Metallic",
        id: 35,
        text: "Candy Red"
    },
    {
        type: "Metallic",
        id: 150,
        text: "Lava Red"
    },
    {
        type: "Metallic",
        id: 36,
        text: "Sunrise Orange"
    },
    {
        type: "Metallic",
        id: 37,
        text: "Classic Gold"
    },
    {
        type: "Metallic",
        id: 38,
        text: "Orange"
    },
    {
        type: "Metallic",
        id: 49,
        text: "Dark Green"
    },
    {
        type: "Metallic",
        id: 50,
        text: "Racing Green"
    },
    {
        type: "Metallic",
        id: 51,
        text: "Sea Green"
    },
    {
        type: "Metallic",
        id: 52,
        text: "Olive Green"
    },
    {
        type: "Metallic",
        id: 53,
        text: "Green"
    },
    {
        type: "Metallic",
        id: 54,
        text: "Gasoline Blue Green"
    },
    {
        type: "Metallic",
        id: 125,
        text: "Securicor Green"
    },
    {
        type: "Metallic",
        id: 61,
        text: "Midnight Blue"
    },
    {
        type: "Metallic",
        id: 62,
        text: "Dark Blue"
    },
    {
        type: "Metallic",
        id: 146,
        text: "V Dark Blue"
    },
    {
        type: "Metallic",
        id: 63,
        text: "Saxony Blue"
    },
    {
        type: "Metallic",
        id: 64,
        text: "Blue"
    },
    {
        type: "Metallic",
        id: 65,
        text: "Mariner Blue"
    },
    {
        type: "Metallic",
        id: 66,
        text: "Harbor Blue"
    },
    {
        type: "Metallic",
        id: 67,
        text: "Diamond Blue"
    },
    {
        type: "Metallic",
        id: 68,
        text: "Surf Blue"
    },
    {
        type: "Metallic",
        id: 69,
        text: "Nautical Blue"
    },
    {
        type: "Metallic",
        id: 70,
        text: "Bright Blue"
    },
    {
        type: "Metallic",
        id: 71,
        text: "Purple Blue"
    },
    {
        type: "Metallic",
        id: 72,
        text: "Spinnaker Blue"
    },
    {
        type: "Metallic",
        id: 73,
        text: "Ultra Blue"
    },
    {
        type: "Metallic",
        id: 74,
        text: "Bright Blue"
    },
    {
        type: "Metallic",
        id: 88,
        text: "Taxi Yellow"
    },
    {
        type: "Metallic",
        id: 89,
        text: "Race Yellow"
    },
    {
        type: "Metallic",
        id: 90,
        text: "Bronze"
    },
    {
        type: "Metallic",
        id: 91,
        text: "Yellow Bird"
    },
    {
        type: "Metallic",
        id: 92,
        text: "Lime"
    },
    {
        type: "Metallic",
        id: 107,
        text: "Cream"
    },
    {
        type: "Metallic",
        id: 93,
        text: "Champagne"
    },
    {
        type: "Metallic",
        id: 94,
        text: "Pueblo Beige"
    },
    {
        type: "Metallic",
        id: 95,
        text: "Dark Ivory"
    },
    {
        type: "Metallic",
        id: 96,
        text: "Choco Brown"
    },
    {
        type: "Metallic",
        id: 97,
        text: "Golden Brown"
    },
    {
        type: "Metallic",
        id: 98,
        text: "Light Brown"
    },
    {
        type: "Metallic",
        id: 99,
        text: "Straw Beige"
    },
    {
        type: "Metallic",
        id: 100,
        text: "Moss Brown"
    },
    {
        type: "Metallic",
        id: 101,
        text: "Biston Brown"
    },
    {
        type: "Metallic",
        id: 102,
        text: "Beechwood"
    },
    {
        type: "Metallic",
        id: 103,
        text: "Dark Beechwood"
    },
    {
        type: "Metallic",
        id: 104,
        text: "Choco Orange"
    },
    {
        type: "Metallic",
        id: 105,
        text: "Beach Sand"
    },
    {
        type: "Metallic",
        id: 106,
        text: "Sun Bleeched Sand"
    },
    {
        type: "Metallic",
        id: 137,
        text: "Vermillion Pink"
    },
    {
        type: "Metallic",
        id: 145,
        text: "Purple"
    },
    {
        type: "Matte",
        id: 12,
        text: "Black"
    },
    {
        type: "Matte",
        id: 13,
        text: "Gray"
    },
    {
        type: "Matte",
        id: 14,
        text: "Light Grey"
    },
    {
        type: "Matte",
        id: 131,
        text: "White"
    },
    {
        type: "Matte",
        id: 39,
        text: "Red"
    },
    {
        type: "Matte",
        id: 40,
        text: "Dark Red"
    },
    {
        type: "Matte",
        id: 41,
        text: "Orange"
    },
    {
        type: "Matte",
        id: 42,
        text: "Yellow"
    },
    {
        type: "Matte",
        id: 55,
        text: "Lime Green"
    },
    {
        type: "Matte",
        id: 128,
        text: "Green"
    },
    {
        type: "Matte",
        id: 155,
        text: "Foilage Green"
    },
    {
        type: "Matte",
        id: 151,
        text: "Forest Green"
    },
    {
        type: "Matte",
        id: 152,
        text: "Olive Drab"
    },
    {
        type: "Matte",
        id: 82,
        text: "Dark Blue"
    },
    {
        type: "Matte",
        id: 83,
        text: "Blue"
    },
    {
        type: "Matte",
        id: 84,
        text: "Midnight Blue"
    },
    {
        type: "Matte",
        id: 148,
        text: "Purple"
    },
    {
        type: "Matte",
        id: 149,
        text: "Dark Purple"
    },
    {
        type: "Matte",
        id: 153,
        text: "Desert Brown"
    },
    {
        type: "Matte",
        id: 154,
        text: "Desert Tan"
    },
    {
        type: "Matte",
        id: 129,
        text: "Brown"
    },
    {
        type: "Worm",
        id: 21,
        text: "Black"
    },
    {
        type: "Worm",
        id: 22,
        text: "Graphite"
    },
    {
        type: "Worm",
        id: 23,
        text: "Silver Grey"
    },
    {
        type: "Worm",
        id: 24,
        text: "Silver"
    },
    {
        type: "Worm",
        id: 25,
        text: "Blue Silver"
    },
    {
        type: "Worm",
        id: 26,
        text: "Shadow Silver"
    },
    {
        type: "Worm",
        id: 121,
        text: "Off White"
    },
    {
        type: "Worm",
        id: 132,
        text: "White"
    },
    {
        type: "Worm",
        id: 46,
        text: "Red"
    },
    {
        type: "Worm",
        id: 47,
        text: "Golden Red"
    },
    {
        type: "Worm",
        id: 48,
        text: "Dark Red"
    },
    {
        type: "Worm",
        id: 123,
        text: "Orange"
    },
    {
        type: "Worm",
        id: 124,
        text: "Light Orange"
    },
    {
        type: "Worm",
        id: 130,
        text: "Orange"
    },
    {
        type: "Worm",
        id: 126,
        text: "Taxi Yellow"
    },
    {
        type: "Worm",
        id: 58,
        text: "Dark Green"
    },
    {
        type: "Worm",
        id: 59,
        text: "Green"
    },
    {
        type: "Worm",
        id: 133,
        text: "Olive Army Green"
    },
    {
        type: "Worm",
        id: 60,
        text: "Sea Wash"
    },
    {
        type: "Worm",
        id: 85,
        text: "Dark blue"
    },
    {
        type: "Worm",
        id: 86,
        text: "Blue"
    },
    {
        type: "Worm",
        id: 87,
        text: "Light blue"
    },
    {
        type: "Worm",
        id: 113,
        text: "Honey Beige"
    },
    {
        type: "Worm",
        id: 114,
        text: "Brown"
    },
    {
        type: "Worm",
        id: 115,
        text: "Dark Brown"
    },
    {
        type: "Worm",
        id: 116,
        text: "straw beige"
    },
    {
        type: "Utility",
        id: 15,
        text: "Black"
    },
    {
        type: "Utility",
        id: 16,
        text: "Black Poly"
    },
    {
        type: "Utility",
        id: 17,
        text: "Dark silver"
    },
    {
        type: "Utility",
        id: 18,
        text: "Silver"
    },
    {
        type: "Utility",
        id: 19,
        text: "Gun Metal"
    },
    {
        type: "Utility",
        id: 20,
        text: "Shadow Silver"
    },
    {
        type: "Utility",
        id: 122,
        text: "Off White"
    },
    {
        type: "Utility",
        id: 43,
        text: "Red"
    },
    {
        type: "Utility",
        id: 44,
        text: "Bright Red"
    },
    {
        type: "Utility",
        id: 45,
        text: "Garnet Red"
    },
    {
        type: "Utility",
        id: 56,
        text: "Dark Green"
    },
    {
        type: "Utility",
        id: 57,
        text: "Green"
    },
    {
        type: "Utility",
        id: 75,
        text: "Dark Blue"
    },
    {
        type: "Utility",
        id: 76,
        text: "Midnight Blue"
    },
    {
        type: "Utility",
        id: 77,
        text: "Blue"
    },
    {
        type: "Utility",
        id: 78,
        text: "Sea Foam Blue"
    },
    {
        type: "Utility",
        id: 79,
        text: "Lightning blue"
    },
    {
        type: "Utility",
        id: 80,
        text: "Maui Blue Poly"
    },
    {
        type: "Utility",
        id: 81,
        text: "Bright Blue"
    },
    {
        type: "Utility",
        id: 108,
        text: "Brown"
    },
    {
        type: "Utility",
        id: 109,
        text: "Medium Brown"
    },
    {
        type: "Utility",
        id: 110,
        text: "Light Brown"
    },
    {
        type: "Divers",
        id: 147,
        text: "Modshop Black"
    },
    {
        type: "Divers",
        id: 134,
        text: "Pure White"
    },
    {
        type: "Divers",
        id: 120,
        text: "Chrome"
    },
    {
        type: "Divers",
        id: 117,
        text: "Brushed Steel"
    },
    {
        type: "Divers",
        id: 118,
        text: "Brushed Black steel"
    },
    {
        type: "Divers",
        id: 119,
        text: "Brushed Aluminium"
    },
    {
        type: "Divers",
        id: 158,
        text: "Pure Gold"
    },
    {
        type: "Divers",
        id: 159,
        text: "Brushed Gold"
    },
    {
        type: "Divers",
        id: 138,
        text: "Orange"
    },
    {
        type: "Divers",
        id: 139,
        text: "Green"
    },
    {
        type: "Divers",
        id: 144,
        text: "Hunter Green"
    },
    {
        type: "Divers",
        id: 140,
        text: "Blue"
    },
    {
        type: "Divers",
        id: 157,
        text: "Epsilon Blue"
    },
    {
        type: "Divers",
        id: 127,
        text: "Policecar Blue"
    },
    {
        type: "Divers",
        id: 135,
        text: "Hot Pink"
    },
    {
        type: "Divers",
        id: 136,
        text: "Salmon pink"
    },
    {
        type: "Divers",
        id: 156,
        text: "DEFAULT ALLOY COLOR"
    }
];
//@ts-ignore
const app = Vue.createApp({
    data () {
        return {
            jsonexchange: "",
            reset: {
                colors: "",
                vehicle: ""
            },
            vehicle: {
                engine: {
                    current: 0,
                    range: 4
                },
                brakes: {
                    current: 0,
                    range: 4
                },
                transmission: {
                    current: 0,
                    range: 3
                },
                suspension: {
                    current: 0,
                    range: 5
                },
                turbo: {
                    current: 0,
                    range: 1
                },
                exhaust: {
                    current: 0,
                    range: 0
                },
                spoiler: {
                    current: 0,
                    range: 0
                },
                bumperF: {
                    current: 0,
                    range: 0
                },
                bumperR: {
                    current: 0,
                    range: 0
                },
                skirt: {
                    current: 0,
                    range: 0
                },
                frame: {
                    current: 0,
                    range: 0
                },
                grille: {
                    current: 0,
                    range: 0
                },
                bonnet: {
                    current: 0,
                    range: 0
                },
                wingL: {
                    current: 0,
                    range: 0
                },
                wingR: {
                    current: 0,
                    range: 0
                },
                roof: {
                    current: 0,
                    range: 0
                },
                plateH: {
                    current: 0,
                    range: 0
                },
                plateV: {
                    current: 0,
                    range: 0
                },
                trim: {
                    current: 0,
                    range: 0
                },
                ornaments: {
                    current: 0,
                    range: 0
                },
                dialDesign: {
                    current: 0,
                    range: 0
                },
                doorInterior: {
                    current: 0,
                    range: 0
                },
                seats: {
                    current: 0,
                    range: 0
                },
                steeringWheel: {
                    current: 0,
                    range: 0
                },
                shiftLever: {
                    current: 0,
                    range: 0
                },
                plaques: {
                    current: 0,
                    range: 0
                },
                rearShelf: {
                    current: 0,
                    range: 0
                },
                trunk: {
                    current: 0,
                    range: 0
                },
                hydraulics: {
                    current: 0,
                    range: 0
                },
                engineBlock: {
                    current: 0,
                    range: 0
                },
                airFilter: {
                    current: 0,
                    range: 0
                },
                strutBar: {
                    current: 0,
                    range: 0
                },
                archCover: {
                    current: 0,
                    range: 0
                },
                antenna: {
                    current: 0,
                    range: 0
                },
                exteriorParts: {
                    current: 0,
                    range: 0
                },
                tank: {
                    current: 0,
                    range: 0
                },
                door: {
                    current: 0,
                    range: 0
                },
                WROH: {
                    current: 0,
                    range: 0
                },
                livery: {
                    current: 0,
                    range: 0
                },
                xenon: {
                    current: 0,
                    range: 0
                },
                plates: {
                    current: 0,
                    range: 5
                },
                windows: {
                    current: 0,
                    range: 6
                },
                extras: [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                wheelsType: 0,
                wheels: 0,
                wheelsRear: 0,
                rooflivery: 0,
                colors: {
                    M: null,
                    S: null,
                    P: null,
                    W: null
                }
            },
            wheels_sel: wheelsArray,
            wheels_grp: wheelsTypeArray,
            color_grps: color_grps,
            colors_sel: colorsArray,
            colorM_grp: "auswählen",
            colorS_grp: "auswählen",
            colorP_grp: "auswählen",
            colorW_grp: "auswählen",
            selected: {
                MG: "auswählen",
                SG: "auswählen",
                PG: "auswählen",
                WG: "auswählen",
                RG: "auswählen",
                M: "auswählen",
                S: "auswählen",
                P: "auswählen",
                W: "auswählen",
                R: "auswählen"
            },
            isOpen: {
                performance: true,
                colors: false,
                kit: false,
                kit2: false,
                extras: false,
                MG: null,
                SG: null,
                PG: null,
                WG: null,
                RG: null,
                M: null,
                S: null,
                P: null,
                W: null,
                R: null
            }
        };
    },
    watch: {
        vehicle: {
            handler (val) {
                applyTuning();
            },
            deep: true
        }
    }
});
const view = app.mount('#app');
let firstload = false;
document.addEventListener("DOMContentLoaded", function() {
    if ('alt' in window) {
        alt.on('T8UNE:Webview:exec', T8UNE_handleFromClient);
        alt.emit('T8UNE:client:exec', 'load_vehicle');
    }
});
function closeWebview() {
    alt.emit('T8UNE:client:exec', 'close');
}
function T8UNE_handleFromClient(task, dataJSON) {
    if (task == 'load_vehicle') {
        view.reset.vehicle = dataJSON;
        view.vehicle = JSON.parse(dataJSON);
        view.selected = {
            MG: getFromArray(colorsArray, "type", view.vehicle.colors.M),
            SG: getFromArray(colorsArray, "type", view.vehicle.colors.S),
            PG: getFromArray(colorsArray, "type", view.vehicle.colors.P),
            WG: getFromArray(colorsArray, "type", view.vehicle.colors.W),
            RG: getFromArray(wheelsTypeArray, "text", view.vehicle.wheelsType),
            M: getFromArray(colorsArray, "text", view.vehicle.colors.M),
            S: getFromArray(colorsArray, "text", view.vehicle.colors.S),
            P: getFromArray(colorsArray, "text", view.vehicle.colors.P),
            W: getFromArray(colorsArray, "text", view.vehicle.colors.W),
            R: getFromArray(wheelsArray, "wheel", view.vehicle.wheels)
        };
        setTimeout(function() {
            firstload = true;
        }, 500);
    }
}
function resetCar() {
    view.vehicle = JSON.parse(view.reset.vehicle);
    view.selected = {
        MG: getFromArray(colorsArray, "type", view.vehicle.colors.M),
        SG: getFromArray(colorsArray, "type", view.vehicle.colors.S),
        PG: getFromArray(colorsArray, "type", view.vehicle.colors.P),
        WG: getFromArray(colorsArray, "type", view.vehicle.colors.W),
        RG: getFromArray(wheelsTypeArray, "text", view.vehicle.wheelsType),
        M: getFromArray(colorsArray, "text", view.vehicle.colors.M),
        S: getFromArray(colorsArray, "text", view.vehicle.colors.S),
        P: getFromArray(colorsArray, "text", view.vehicle.colors.P),
        W: getFromArray(colorsArray, "text", view.vehicle.colors.W),
        R: getFromArray(wheelsArray, "wheel", view.vehicle.wheels, view.vehicle.wheelsType)
    };
}
function applyTuning() {
    if (firstload) {
        let dataJSON = JSON.stringify(view.vehicle);
        alt.emit('T8UNE:client:exec', 'update_vehicle', dataJSON);
    }
}
function getFromArray(array, type, var1, var2 = 0) {
    for(let key in array){
        if (type == "type" && array[key].id == var1) {
            return array[key].type;
        }
        if (type == "text" && array[key].id == var1) {
            return array[key].text;
        }
        if (type == "wheel" && array[key].id == var1 && array[key].type == var2) {
            return array[key].text;
        }
    }
    return "auswählen";
}
function openWindow(window) {
    view.isOpen.performance = false;
    view.isOpen.colors = false;
    view.isOpen.kit = false;
    view.isOpen.kit2 = false;
    view.isOpen.extras = false;
    view.isOpen.jsonexchange = false;
    if (window == "performance") {
        view.isOpen.performance = true;
        return;
    }
    if (window == "colors") {
        view.isOpen.colors = true;
        return;
    }
    if (window == "kit") {
        view.isOpen.kit = true;
        return;
    }
    if (window == "kit2") {
        view.isOpen.kit2 = true;
        return;
    }
    if (window == "extras") {
        view.isOpen.extras = true;
        return;
    }
    if (window == "jsonexchange") {
        view.isOpen.jsonexchange = true;
        return;
    }
}
function handleJSON(task) {
    if (task == "import") {
        view.vehicle = JSON.parse(view.jsonexchange);
        view.jsonexchange = "--- IPORTIERT ---";
    }
    if (task == "export") {
        view.jsonexchange = JSON.stringify(view.vehicle);
    }
}
