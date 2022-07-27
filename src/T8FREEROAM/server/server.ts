// <reference types="@altv/types-server" />
import { Player } from "alt-client";
import * as alt from "alt-server";
import * as chat from "chat";
//@ts-ignore
import * as ParkedVehicleSpawner from "ParkedVehicleSpawner";
import JSONdb from 'simple-json-db';

import { T8WebViewServer } from './classes/webview';

let WEBVIEW = new T8WebViewServer();
WEBVIEW.init( "T8UI" );

const DBV = new JSONdb('./JSONdb/db-vehicles.json');
const DBC = new JSONdb('./JSONdb/db-player-clothes.json');

const spawns = [
    {
        x: 1055.9204,
        y: -715.712,
        z: 56.2666
    }
];
const spawnModels = [
    "MP_M_Freemode_01"
];
const weapons = [
    "dagger",
    "bat",
    "bottle",
    "crowbar",
    "flashlight",
    "golfclub",
    "hammer",
    "hatchet",
    "knuckle",
    "knife",
    "machete",
    "switchblade",
    "nightstick",
    "wrench",
    "battleaxe",
    "poolcue",
    "stone_hatchet",
    "pistol",
    "pistol_mk2",
    "combatpistol",
    "appistol",
    "stungun",
    "pistol50",
    "snspistol",
    "snspistol_mk2",
    "heavypistol",
    "vintagepistol",
    "flaregun",
    "marksmanpistol",
    "revolver",
    "revolver_mk2",
    "doubleaction",
    "raypistol",
    "microsmg",
    "smg",
    "smg_mk2",
    "assaultsmg",
    "combatpdw",
    "machinepistol",
    "minismg",
    "raycarbine",
    "pumpshotgun",
    "pumpshotgun_mk2",
    "sawnoffshotgun",
    "assaultshotgun",
    "bullpupshotgun",
    "musket",
    "heavyshotgun",
    "dbshotgun",
    "autoshotgun",
    "assaultrifle",
    "assaultrifle_mk2",
    "carbinerifle",
    "carbinerifle_mk2",
    "advancedrifle",
    "specialcarbine",
    "specialcarbine_mk2",
    "bullpuprifle",
    "bullpuprifle_mk2",
    "compactrifle",
    "mg",
    "combatmg",
    "combatmg_mk2",
    "gusenberg",
    "sniperrifle",
    "heavysniper",
    "heavysniper_mk2",
    "marksmanrifle",
    "marksmanrifle_mk2",
    "rpg",
    "grenadelauncher",
    "grenadelauncher_smoke",
    "minigun",
    "firework",
    "railgun",
    "hominglauncher",
    "compactlauncher",
    "rayminigun",
    "grenade",
    "bzgas",
    "smokegrenade",
    "flare",
    "molotov",
    "stickybomb",
    "proxmine",
    "snowball",
    "pipebomb",
    "ball",
    "metaldetector",
    "precisionrifle",
    "tacticalrifle"
];
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getRandomListEntry(list) {
    return randomNumber(0, list.length - 1);
}
alt.on("playerConnect", (player)=>{
    if (player.name.includes("admin")) {
        player.kick();
        return;
    }

    alt.log(`~r~>> ~w~new player ~g~'${player.name}'~w~ connected...`);
    alt.log(`~r~>> ~w~hwID: ~y~${player.hwidHash}`);
    alt.log(`~r~>> ~w~soID: ~y~${player.socialID}`);

    player.model = spawnModels[getRandomListEntry(spawnModels)];
    player.setMeta("vehicles", []);
    const spawn = spawns[getRandomListEntry(spawns)];
    player.spawn(spawn.x, spawn.y, spawn.z, 0);
    alt.emitClient(player, "freeroam:spawned");
    alt.emit('blips:Sync', player);

    let connectTimeout = alt.setTimeout(()=>{
        if (player && player.valid) {
            const playerCount = alt.Player.all.length;
            WEBVIEW.toastAll( `CONNECT: ${playerCount} players online`, `${player.name} has joined the server!`, 5,`black`);
            // chat.broadcast(`{1cacd4}${player.name} {ffffff}has {00ff00}joined {ffffff}the Server..  (${playerCount} players online)`);
            chat.send(player, "{80eb34}Press {34dfeb}T {80eb34}and type {34dfeb}/help {80eb34}to see all available commands..");
        }
        alt.clearTimeout(connectTimeout);
    }, 1000);
    let error = false;
    error = loadClothesDB( player, "default" );
    if ( error ) { 
        error = loadClothesDB( player, "default", true );
        if ( error ) {
            alt.log(`~r~>> ~w~no clothing available player ~g~'${player.name}'`);
        } else {
            alt.log(`~r~>> ~w~basic clothing loaded for player ~g~'${player.name}'`);    
        };
    } else {
        alt.log(`~r~>> ~w~default clothing loaded for player ~g~'${player.name}'`);
    };
});

alt.on("playerDeath", (player, killer:any, weapon)=>{
    const spawn = spawns[randomNumber(0, spawns.length - 1)];
    alt.emitClient(player, "freeroam:switchInOutPlayer", false, 0, 2);
    let playerDeathTimeout = alt.setTimeout(()=>{
        if (player && player.valid) {
            player.spawn(spawn.x, spawn.y, spawn.z, 0);
            alt.emitClient(player, "freeroam:switchInOutPlayer", true);
            player.clearBloodDamage();
        }
        alt.clearTimeout(playerDeathTimeout);
    }, 3000);
    if (killer) {
        alt.log(`${killer.name} gave ${player.name} the rest!`);
        // chat.broadcast(`{1cacd4}${killer.name}{ffffff} killed {1cacd4}${player.name}`);
        WEBVIEW.toastAll( `PLAYER DEATH`, `${killer.name} killed ${player.name}!`, 5,`danger`);
    } else {
        alt.log(`${player.name} died!`);
        // chat.broadcast(`{1cacd4}Suicide {ffffff}${player.name}`);
        WEBVIEW.toastAll( `PLAYER DEATH`, `${player.name} killed himself!`, 5,`danger`);
    }
});


alt.on("playerDisconnect", (player, reason)=>{
    const playerCount = alt.Player.all.length;
    // chat.broadcast(`{1cacd4}${player.name} {ffffff}has {ff0000}left {ffffff}the Server.. (${playerCount} players online)`);
    WEBVIEW.toastAll( `DISCONNECT ${playerCount} players online`, `${player.name} has left the server!`, 5,`black`);
    player.getMeta("vehicles").forEach((vehicle)=>{
        if (vehicle != null) {
            vehicle.destroy();
        }
    });
    player.setMeta("vehicles", undefined);
    alt.log(`${player.name} has left the server because of ${reason}`);
});
// =============================== Commands Begin ==================================================
chat.registerCmd("help", (player, args)=>{
    chat.send(player, "{ff0000}+-------------- {eb4034}HELP {ff0000}--------------");
    chat.send(player, "{ff0000}| {34abeb}/veh {40eb34}(model)   {ffffff} Spawn a Vehicle");
    chat.send(player, "{ff0000}| {34abeb}/t8veh     {ffffff}Spawn a Vehicle from Menu");
    chat.send(player, "{ff0000}| {34abeb}/vehSave {40eb34}(name) (licenseplate)   {ffffff} Save Vehicle apperance");
    chat.send(player, "{ff0000}| {34abeb}/vehLoad {40eb34}(name)   {ffffff} Load Vehicle apperance");
    chat.send(player, "{ff0000}| {34abeb}/tp {40eb34}(targetPlayer)   {ffffff} Teleport to Player");
    chat.send(player, "{ff0000}| {34abeb}/model {40eb34}(modelName)   {ffffff} Change Player Model");
    chat.send(player, "{ff0000}| {34abeb}/weapons {ffffff} Get all weapons");
    chat.send(player, "{ff0000}| {34abeb}/heal {ffffff} Heal the Player");
    chat.send(player, "{ff0000}| {34abeb}/time {40eb34}(hh) (mm) (ss) {ff0000}|| {34abeb}/weather {40eb34}(weather) (transition time)");
    chat.send(player, "{ff0000}+--------------------------------------------------");
});
chat.registerCmd("pos", (player, args)=>{
    alt.log(`Position: ${player.pos.x}, ${player.pos.y}, ${player.pos.z}`);
    chat.send(player, `Position: ${player.pos.x}, ${player.pos.y}, ${player.pos.z}`);
});
chat.registerCmd("tp", (player, args)=>{
    if (args && args.length === 0) {
        chat.send(player, "Usage: /tp (target player)");
        return;
    }
    const foundPlayers = alt.Player.all.filter((p)=>p.name === args[0]
    );
    if (foundPlayers && foundPlayers.length > 0) {
        player.pos = foundPlayers[0].pos;
        WEBVIEW.toast( player, `TELEPORT`, `You got teleported to {1cacd4}${foundPlayers[0].name}`, 5,`black`);
        // chat.send(player, `You got teleported to {1cacd4}${foundPlayers[0].name}{ffffff}`);
    } else {
        WEBVIEW.toast( player, `TELEPORT`, `Player ${args[0]} not found...`, 5,`warning`);
        // chat.send(player, `{ff0000} Player {ff9500}${args[0]} {ff0000}not found..`);
    }
});
chat.registerCmd("model", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /model (modelName)");
        return;
    }
    player.model = args[0];
});
chat.registerCmd("weapon", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /weapon (modelName)");
        return;
    }
    player.giveWeapon(alt.hash("weapon_" + args[0]), 500, true);
});
chat.registerCmd("weapons", (player, args)=>{
    for (let weapon of weapons){
        player.giveWeapon(alt.hash("weapon_" + weapon), 500, true);
    }
});
chat.registerCmd("heal", (player)=>{
    player.health = 199;
    player.armour = 100;
});
chat.registerCmd("veh", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /veh (vehicleModel)");
        return;
    }
    try {
        if (player.vehicle) {
            player.vehicle.destroy();
        }
        let vehicle = new alt.Vehicle(args[0], player.pos.x, player.pos.y, player.pos.z, player.rot.x, player.rot.y, player.rot.z);
        let pvehs = player.getMeta("vehicles");
        if (pvehs.length >= 3) {
            let toDestroy = pvehs.pop();
            if (toDestroy != null) {
                toDestroy.destroy();
            }
        }
        pvehs.unshift(vehicle);
        player.setMeta("vehicles", pvehs);
        player.setIntoVehicle(vehicle, 1);
    } catch (e) {
        WEBVIEW.toast( player, `VEHICLE SPAWN: ${args[0]}`, `Vehicle Model ${args[0]} does not exist...`, 5,`warning`);
        // chat.send(player, `{ff0000} Vehicle Model {ff9500}${args[0]} {ff0000}does not exist..`);
        alt.log(e);
    }
});
chat.registerCmd("vehSave", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /vehSave (name) (numberplate) (modelName)");
        return;
    }
    if (!player.vehicle) {
        WEBVIEW.toast( player, `VEHICLES`, `You need to sit in a vehicle...`, 5,`warning`);
        // chat.send(player, ">> Du musst im zu speicherndem Fahrzeug sitzen.");
        return;
    }
    let name = args[0];
    let licencePlate = "LS-KEKW";
    if (args.length > 1) {
        licencePlate = args[1];
    }
    if (DBV.has(name)) {
        WEBVIEW.toast( player, `VEHICLES: ${name}`, `A apperance with the ${name} already exists.`, 5,`warning`);
        // chat.send(player, `>> Es existiert bereits ein Eintrag unter dem Namen: ${name}`);
        return;
    }
    DBV.set(name, {
        titel: name,
        modelName: args[2],
        licencePlate: licencePlate,
        model: player.vehicle.model,
        base64: player.vehicle.getAppearanceDataBase64()
    });
});
chat.registerCmd("vehLoad", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /vehLoad (name)");
        return;
    }
    if (!player.vehicle) {
        WEBVIEW.toast( player, `VEHICLES`, `You need to sit in a vehicle to load it's appereance...`, 5,`warning`);
        // chat.send(player, ">> Du musst dem Fahrzeug sitzen für das du das Aussehen laden willst.");
        return;
    }
    let name = args[0];
    if (!DBV.has(name)) {
        WEBVIEW.toast( player, `VEHICLES:${name}`, `A apperance with the name ${name} does not exist.`, 5,`warning`);
        // chat.send(player, `>> es existiert kein ein Eintrag unter dem Namen: ${name}`);
        return;
    }
    let savedVehicle = DBV.get(name);
    if (savedVehicle["model"] && savedVehicle["model"] != player.vehicle.model) {
        WEBVIEW.toast( player, `VEHICLES: ${name}`, `The apperance with the name ${name} can not be applied to this vehicle.`, 5,`warning`);
        // chat.send(player, `>> das hinterlgete Fahrzeugaushsen für: ${name} ist für ein anderes Fahrzeug bestimmt`);
    }
    player.vehicle.setAppearanceDataBase64(savedVehicle["base64"]);
    player.vehicle.numberPlateText = savedVehicle["licencePlate"];
});
chat.registerCmd("vehDelet", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /vehDelet (name)");
        return;
    }
    let name = args[0];
    if (!DBV.has(name)) {
        WEBVIEW.toast( player, `VEHICLES: ${name}`, `A apperance with the ${name} does not exist.`, 5,`warning`);
        // chat.send(player, `>> es existiert kein ein Eintrag unter dem Namen ${name}`);
        return;
    }
    DBV.delete(name);
});

chat.registerCmd("time", (player, args)=>{
    if (args.length < 3) {
        chat.send(player, "Usage: /time (hour) (minute) (second)");
        return;
    }

    let hour    = parseInt(args[0]);
    let minute  = parseInt(args[1]);
    let second  = parseInt(args[2]);

    alt.emit('changeCurrentTime', hour, minute, second); 
});

chat.registerCmd("toast", (player, args)=>{

    if (args.length === 0 ) {
        chat.send(player, "Usage: /toast (title) (text)");
        return;
    }

    let title = args.shift();
    let text = ``;
    args.forEach(( word ) => { text = `${text} ${word}`; });

    WEBVIEW.toastAll( title, text, 5,`black`);
});

chat.registerCmd("weather", (player, args)=>{
    if (args.length < 1) {
        chat.send(player, "Usage: /weather WEATHER (transitiontime)");
        chat.send(player, "> EXTRASUNNY CLEAR NEUTRAL SMOG FOGGY OVERCAST CLOUDS");
        chat.send(player, "> CLEARING RAIN THUNDER SNOW BLIZZARD SNOWLIGHT XMAS HALLOWEEN");
        return;
    }

    let weather = args[0];
    let transitiontime = 1000;

    if ( args.length > 1){
        transitiontime = args[1];
    };
    alt.emit('changeCurrentWeather', weather, transitiontime);
});


chat.registerCmd("clothSave", (player, args)=>{

    if (args.length === 0 ) {
        chat.send(player, "Usage: /clothSave (outfit) (replace:yes)| oufit 'default' will load on connect");
        return;
    }

    let outfitname = args[0];
    let replace = args[1];
    let dbname = `${player.socialID}-${outfitname}`;

    if (DBC.has(dbname) && replace != "yes" ) {
        WEBVIEW.toast( player, `CLOTHES: ${outfitname}`, `A outfit with the ${outfitname} already exists.`, 5,`warning`);
        // chat.send(player, `>> Es existiert bereits ein Eintrag unter dem Namen: ${name}`);
        return;
    }

    let outfit = {
        clothes: [
            { id:  0, name: "Head",         data: player.getClothes(0) },
            { id:  1, name: "Masks",        data: player.getClothes(1) },
            { id:  2, name: "Hair Styles",  data: player.getClothes(2) },
            { id:  3, name: "Torsos",       data: player.getClothes(3) },            
            { id:  4, name: "Legs",         data: player.getClothes(4) },
            { id:  5, name: "Bagpacks",     data: player.getClothes(5) },
            { id:  6, name: "Shoes",        data: player.getClothes(6) },
            { id:  7, name: "Accessories",  data: player.getClothes(7) },
            { id:  8, name: "Undershirts",  data: player.getClothes(8) },
            { id:  9, name: "Body Armor",   data: player.getClothes(9) },
            { id: 10, name: "Decals",       data: player.getClothes(10) },
            { id: 11, name: "Tops",         data: player.getClothes(11) }
        ],
        props: [
            { id:  0, name: "Hats",         data: player.getProp(0) },
            { id:  1, name: "Glasses",      data: player.getProp(1) },
            { id:  2, name: "Ears",         data: player.getProp(2) },
            { id:  6, name: "Watches",      data: player.getProp(6) },
            { id:  7, name: "Bracelets",    data: player.getProp(7) }            
        ]
    };

    DBC.set(dbname, {
        player: player.name,
        hwID: player.hwidHash,
        soID: player.socialID,
        name: outfitname,
        outfit: outfit,
    });

    alt.log(`~y~/clothSave~w~ > player  ~g~'${player.name}'~w~ saved his cloth`);
});

chat.registerCmd("clothLoad", (player, args)=>{

    if (args.length === 0 ) {
        chat.send(player, "Usage: /clothLoad (outfit) | oufit 'default' will load on connect");
        return;
    }

    let outfitname = args[0];

    let error = loadClothesDB( player, outfitname );

    if ( error ) {
        WEBVIEW.toast( player, `CLOTHES: ${outfitname}`, `A outfit with the name ${outfitname} does not exist.`, 5,`warning`);
        // chat.send(player, `>> es existiert kein ein Eintrag unter dem Namen: ${name}`);
        return;
    }

    alt.log(`~y~/clothLoad~w~ > player ~g~'${player.name}'~w~ loaded his cloth`);
});


function loadClothesDB( player:any, outfitname:string, basic:boolean = false ){

    let dbname = `basic-spawn`;
    if ( !basic ) { dbname = `${player.socialID}-${outfitname}`; };

    if (!DBC.has(dbname)) {
        return true;
    }

    let entry:any = {};
    entry = DBC.get(dbname);

    // alt.log(`>> ${JSON.stringify(outfit)}`);
    
    let clothes = entry.outfit.clothes;
    let props = entry.outfit.props;

    // alt.log(`>> ${JSON.stringify(clothes)}`);
    // alt.log(`>> ${JSON.stringify(props)}`);

    entry.outfit.clothes.forEach(( item ) => { player.setClothes( item.id, item.data.drawable, item.data.texture, item.data.palette ); });
    entry.outfit.props.forEach(( item ) => { player.setProp( item.id, item.data.drawable, item.data.texture ); });

    return false;
};

// =============================== Commands End ====================================================
ParkedVehicleSpawner.spawn(2000);
