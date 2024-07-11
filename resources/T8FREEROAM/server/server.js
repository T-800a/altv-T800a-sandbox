// <reference types="@altv/types-server" />
import * as alt from "alt-server";
//@ts-ignore
import * as chat from "alt:chat";
//@ts-ignore
import * as ParkedVehicleSpawner from "alt:ParkedVehicleSpawner";
import JSONdb from 'simple-json-db';
import { T8WebViewServer } from './classes/webview.js';
import { getVehicleMods, setVehicleMods } from './classes/vehicle.js';
let WEBVIEW = new T8WebViewServer();
WEBVIEW.init("T8UI");
const DBV = new JSONdb('./JSONdb/db-vehicles.json');
const DBC = new JSONdb('./JSONdb/db-player-clothes.json');
const spawns = [
    {
        x: 161.3476,
        y: -1004.016,
        z: 28.9
    }
]; // Stadtpark
const spawnModel = "MP_M_Freemode_01";
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
    "tacticalrifle",
    "mg",
    "combatmg",
    "combatmg_mk2",
    "gusenberg",
    "sniperrifle",
    "heavysniper",
    "heavysniper_mk2",
    "marksmanrifle",
    "marksmanrifle_mk2",
    "precisionrifle",
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
    "ball"
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
    player.model = spawnModel;
    player.setMeta("vehicles", []);
    const spawn = spawns[getRandomListEntry(spawns)];
    player.spawn(spawn.x, spawn.y, spawn.z, 0);
    alt.emitClient(player, "freeroam:spawned");
    alt.emit('blips:Sync', player);
    let connectTimeout = alt.setTimeout(()=>{
        if (player && player.valid) {
            const playerCount = alt.Player.all.length;
            WEBVIEW.toastAll(`CONNECT: ${playerCount} players online`, `${player.name} has joined the server!`, 5, `black`);
            // chat.broadcast(`{1cacd4}${player.name} {ffffff}has {00ff00}joined {ffffff}the Server..  (${playerCount} players online)`);
            chat.send(player, "{80eb34}Press {34dfeb}/ {80eb34}and type {34dfeb}/help {80eb34}to see all available commands..");
        }
        alt.clearTimeout(connectTimeout);
    }, 1000);
    let error = false;
    error = loadClothesDB(player, "default");
    if (error) {
        error = loadClothesDB(player, "default", true);
        if (error) {
            alt.log(`~r~>> ~w~no clothing available player ~g~'${player.name}'`);
        } else {
            alt.log(`~r~>> ~w~basic clothing loaded for player ~g~'${player.name}'`);
        }
    } else {
        alt.log(`~r~>> ~w~default clothing loaded for player ~g~'${player.name}'`);
    }
});
alt.on("playerDeath", (player, killer, weapon)=>{
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
        WEBVIEW.toastAll(`PLAYER DEATH`, `${killer.name} killed ${player.name}!`, 5, `danger`);
    } else {
        alt.log(`${player.name} died!`);
        // chat.broadcast(`{1cacd4}Suicide {ffffff}${player.name}`);
        WEBVIEW.toastAll(`PLAYER DEATH`, `${player.name} killed himself!`, 5, `danger`);
    }
});
alt.on("playerDisconnect", (player, reason)=>{
    const playerCount = alt.Player.all.length;
    // chat.broadcast(`{1cacd4}${player.name} {ffffff}has {ff0000}left {ffffff}the Server.. (${playerCount} players online)`);
    WEBVIEW.toastAll(`DISCONNECT ${playerCount} players online`, `${player.name} has left the server!`, 5, `black`);
    //@ts-ignore
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
    chat.send(player, "{ff0000}| {34abeb}/veh {40eb34}(model)   {ffffff} spawn a new vehicle");
    chat.send(player, "{ff0000}| {34abeb}/vehicles   {ffffff} for all vehicle commands");
    chat.send(player, "{ff0000}| {34abeb}/clothes   {ffffff} for all clothing commands");
    chat.send(player, "{ff0000}| {34abeb}/tp {40eb34}(targetPlayer)   {ffffff} teleport to player");
    chat.send(player, "{ff0000}| {34abeb}/model {40eb34}(modelName)   {ffffff} change player model");
    chat.send(player, "{ff0000}| {34abeb}/weapons   {ffffff} get all weapons");
    chat.send(player, "{ff0000}| {34abeb}/heal   {ffffff} heal the player");
    chat.send(player, "{ff0000}| {34abeb}/time {40eb34}(hh) (mm) (ss) {ff0000}|| {34abeb}/weather {40eb34}(weather) (transition time)");
});
chat.registerCmd("vehicles", (player, args)=>{
    chat.send(player, "{ff0000}+-------------- {eb4034}HELP VEHICLES {ff0000}--------------");
    chat.send(player, "{ff0000}| {34abeb}/veh {40eb34}(model)   {ffffff} spawn a new vehicle");
    chat.send(player, "{ff0000}| {34abeb}/t8veh   {ffffff} spawn a vehicle from a menu");
    chat.send(player, "{ff0000}| {34abeb}/vehRM   {ffffff} remove your current Vehicle");
    chat.send(player, "{ff0000}| {34abeb}/vehList   {ffffff} Lists all saved Vehicles");
    chat.send(player, "{ff0000}| {34abeb}/vehSave {40eb34}(name) (licenseplate)   {ffffff} save current vehicle");
    chat.send(player, "{ff0000}| {34abeb}/vehLoad {40eb34}(name)   {ffffff} load a vehicles apperance/tuning");
    chat.send(player, "{ff0000}| {34abeb}/vehDelete {40eb34}(name)   {ffffff} deletes a saved vehicle");
});
chat.registerCmd("clothes", (player, args)=>{
    chat.send(player, "{ff0000}+-------------- {eb4034}HELP CLOTHES {ff0000}--------------");
    chat.send(player, "{ff0000}| {34abeb}/clothList   {ffffff} Lists all saved Vehicles");
    chat.send(player, "{ff0000}| {34abeb}/clothSave {40eb34}(outfit) (replace:yes)   {ffffff} save your apperance");
    chat.send(player, "{ff0000}| {34abeb}/clothLoad {40eb34}(outfit)   {ffffff} load a saved apperance");
    chat.send(player, "{ff0000}| {34abeb}/clothDelete {40eb34}(name)   {ffffff} deletes a saved outfit");
    chat.send(player, "{ff0000}| {ffffff} the oufit 'default' will load on connect/spawn");
});
chat.registerCmd("pos", (player, args)=>{
    if (args && args.length < 3) {
        chat.send(player, "Usage: /pos x y z");
        return;
    } else {
        player.pos = {
            x: args[0],
            y: args[1],
            z: args[2]
        };
    }
});
chat.registerCmd("noclip", (player, args)=>{
    alt.emit('freecam:Toggle', player);
});
chat.registerCmd("tp", (player, args)=>{
    if (args && args.length === 0) {
        chat.send(player, "Usage: /tp (target player)");
        return;
    }
    const foundPlayers = alt.Player.all.filter((p)=>p.name === args[0]);
    if (foundPlayers && foundPlayers.length > 0) {
        player.pos = foundPlayers[0].pos;
        WEBVIEW.toast(player, `TELEPORT`, `You got teleported to {1cacd4}${foundPlayers[0].name}`, 5, `black`);
    // chat.send(player, `You got teleported to {1cacd4}${foundPlayers[0].name}{ffffff}`);
    } else {
        WEBVIEW.toast(player, `TELEPORT`, `Player ${args[0]} not found...`, 5, `warning`);
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
chat.registerCmd("gender", (player, args)=>{
    if (player.model == 1885233650) {
        player.model = "MP_F_Freemode_01";
        return;
    }
    if (player.model == 2627665880) {
        player.model = "MP_M_Freemode_01";
        return;
    }
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
// ------------------------------------------------------------------------------------------------------------------------------
//     V E H I C L E   COMMANDS
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
        player.setIntoVehicle(vehicle, 1);
    } catch (e) {
        WEBVIEW.toast(player, `VEHICLE SPAWN: ${args[0]}`, `Vehicle Model ${args[0]} does not exist...`, 5, `warning`);
        // chat.send(player, `{ff0000} Vehicle Model {ff9500}${args[0]} {ff0000}does not exist..`);
        alt.log(e);
    }
});
chat.registerCmd("vehRM", (player, args)=>{
    if (player.vehicle) {
        player.vehicle.destroy();
    }
});
chat.registerCmd("vehList", (player, args)=>{
    chat.send(player, "You saved the following vehicles:");
    let vehList = DBV.JSON();
    // alt.log( typeof vehList ); 
    for(const element in vehList){
        if (vehList[element].soID == player.socialID) {
            chat.send(player, `Saved as: ${vehList[element].titel} / Model: ${vehList[element].modelName} / Plate: ${vehList[element].licencePlate}`);
        }
    }
});
chat.registerCmd("vehSave", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /vehSave (name) (numberplate) (modelName)");
        return;
    }
    if (!player.vehicle) {
        WEBVIEW.toast(player, `VEHICLES`, `You need to sit in a vehicle...`, 5, `warning`);
        // chat.send(player, ">> Du musst im zu speicherndem Fahrzeug sitzen.");
        return;
    }
    let name = args[0];
    let DBname = `${player.socialID}-${name}`;
    let licencePlate = "LS-KEKW";
    if (args.length > 1) {
        licencePlate = args[1];
    }
    if (DBV.has(DBname)) {
        WEBVIEW.toast(player, `VEHICLES: ${name}`, `A apperance with the ${name} already exists. Replacing vehicle.`, 5, `warning`);
        // chat.send(player, `>> Es existiert bereits ein Eintrag unter dem Namen: ${name}`);
        DBV.delete(name);
    }
    DBV.set(DBname, {
        titel: name,
        player: player.name,
        hwID: player.hwidHash,
        soID: player.socialID,
        modelName: args[2],
        licencePlate: licencePlate,
        model: player.vehicle.model,
        data: getVehicleMods(player)
    });
    WEBVIEW.toast(player, `VEHICLES: ${name}`, `A Vehicle with the ${name} was saved.`, 5, `success`);
});
chat.registerCmd("vehLoad", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /vehLoad (name)");
        return;
    }
    let name = args[0];
    let DBname = `${player.socialID}-${name}`;
    if (!DBV.has(DBname)) {
        WEBVIEW.toast(player, `VEHICLES:${name}`, `A vehicle with the name ${name} does not exist.`, 5, `warning`);
        // chat.send(player, `>> es existiert kein ein Eintrag unter dem Namen: ${name}`);
        return;
    }
    let savedVehicle = DBV.get(DBname);
    try {
        if (player.vehicle) {
            player.vehicle.destroy();
        }
        let vehicle = new alt.Vehicle(savedVehicle["model"], player.pos.x, player.pos.y, player.pos.z, player.rot.x, player.rot.y, player.rot.z);
        player.setIntoVehicle(vehicle, 1);
        setTimeout(()=>{
            setVehicleMods(player, savedVehicle.data);
            player.vehicle.numberPlateText = savedVehicle.licencePlate;
        // player.vehicle.setAppearanceDataBase64(savedVehicle.data.base64);
        }, 500);
    } catch (e) {
        WEBVIEW.toast(player, `VEHICLE SPAWN: ${savedVehicle["model"]}`, `Vehicle Model ${savedVehicle["model"]} does not exist...`, 5, `warning`);
        // chat.send(player, `{ff0000} Vehicle Model {ff9500}${args[0]} {ff0000}does not exist..`);
        alt.log(e);
    }
});
chat.registerCmd("vehDelete", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /vehDelete (name)");
        return;
    }
    let name = args[0];
    let DBname = `${player.socialID}-${name}`;
    if (!DBV.has(DBname)) {
        WEBVIEW.toast(player, `VEHICLES: ${name}`, `A Vehicle with the ${name} does not exist.`, 5, `warning`);
        // chat.send(player, `>> es existiert kein ein Eintrag unter dem Namen ${name}`);
        return;
    }
    WEBVIEW.toast(player, `VEHICLES: ${name}`, `A Vehicle with the ${name} was deleted.`, 5, `success`);
    DBV.delete(DBname);
});
chat.registerCmd("rims", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /rims (Rims Type : number) (Rims ID : number)");
        return;
    }
    let veh = alt.Vehicle.getByID(player.vehicle.id);
    veh.setWheels(args[0], args[1]);
    veh.setRearWheels(args[1]);
});
chat.registerCmd("time", (player, args)=>{
    if (args.length < 3) {
        chat.send(player, "Usage: /time (hour) (minute) (second)");
        return;
    }
    let hour = parseInt(args[0]);
    let minute = parseInt(args[1]);
    let second = parseInt(args[2]);
    alt.emit('changeCurrentTime', hour, minute, second);
});
chat.registerCmd("toast", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /toast (title) (text)");
        return;
    }
    let title = args.shift();
    let text = ``;
    args.forEach((word)=>{
        text = `${text} ${word}`;
    });
    WEBVIEW.toastAll(title, text, 5, `black`);
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
    if (args.length > 1) {
        transitiontime = args[1];
    }
    alt.emit('changeCurrentWeather', weather, transitiontime);
});
// ------------------------------------------------------------------------------------------------------------------------------
//     C L O T H   COMMANDS
chat.registerCmd("clothSave", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /clothSave (outfit) (replace:yes)| oufit 'default' will load on connect");
        return;
    }
    let outfitname = args[0];
    let replace = args[1];
    let dbname = `${player.socialID}-${outfitname}`;
    if (DBC.has(dbname) && replace != "yes") {
        WEBVIEW.toast(player, `CLOTHES: ${outfitname}`, `A outfit with the ${outfitname} already exists.`, 5, `warning`);
        // chat.send(player, `>> Es existiert bereits ein Eintrag unter dem Namen: ${name}`);
        return;
    }
    let outfit = {
        clothes: [
            {
                id: 0,
                name: "Head",
                data: player.getClothes(0)
            },
            {
                id: 1,
                name: "Masks",
                data: player.getClothes(1)
            },
            {
                id: 2,
                name: "Hair Styles",
                data: player.getClothes(2)
            },
            {
                id: 3,
                name: "Torsos",
                data: player.getClothes(3)
            },
            {
                id: 4,
                name: "Legs",
                data: player.getClothes(4)
            },
            {
                id: 5,
                name: "Bagpacks",
                data: player.getClothes(5)
            },
            {
                id: 6,
                name: "Shoes",
                data: player.getClothes(6)
            },
            {
                id: 7,
                name: "Accessories",
                data: player.getClothes(7)
            },
            {
                id: 8,
                name: "Undershirts",
                data: player.getClothes(8)
            },
            {
                id: 9,
                name: "Body Armor",
                data: player.getClothes(9)
            },
            {
                id: 10,
                name: "Decals",
                data: player.getClothes(10)
            },
            {
                id: 11,
                name: "Tops",
                data: player.getClothes(11)
            }
        ],
        props: [
            {
                id: 0,
                name: "Hats",
                data: player.getProp(0)
            },
            {
                id: 1,
                name: "Glasses",
                data: player.getProp(1)
            },
            {
                id: 2,
                name: "Ears",
                data: player.getProp(2)
            },
            {
                id: 6,
                name: "Watches",
                data: player.getProp(6)
            },
            {
                id: 7,
                name: "Bracelets",
                data: player.getProp(7)
            }
        ]
    };
    DBC.set(dbname, {
        player: player.name,
        playerModel: player.model,
        hwID: player.hwidHash,
        soID: player.socialID,
        name: outfitname,
        outfit: outfit
    });
    WEBVIEW.toast(player, `OUTFITS: ${outfitname}`, `A outfit with the ${outfitname} was saved.`, 5, `success`);
    alt.log(`~y~/clothSave~w~ > player  ~g~'${player.name}'~w~ saved his cloth`);
});
chat.registerCmd("clothList", (player, args)=>{
    chat.send(player, "You saved the following outfits:");
    let clothList = DBC.JSON();
    // alt.log( typeof vehList ); 
    for(const element in clothList){
        if (clothList[element].soID == player.socialID) {
            chat.send(player, `outfit name: ${clothList[element].name}`);
        }
    }
});
chat.registerCmd("clothLoad", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /clothLoad (outfit) | oufit 'default' will load on connect");
        return;
    }
    let outfitname = args[0];
    let error = loadClothesDB(player, outfitname);
    if (error) {
        WEBVIEW.toast(player, `CLOTHES: ${outfitname}`, `A outfit with the name ${outfitname} does not exist.`, 5, `warning`);
        // chat.send(player, `>> es existiert kein ein Eintrag unter dem Namen: ${name}`);
        return;
    }
    alt.log(`~y~/clothLoad~w~ > player ~g~'${player.name}'~w~ loaded his cloth`);
});
chat.registerCmd("clothDelete", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /clothDelete (name)");
        return;
    }
    let name = args[0];
    let DBname = `${player.socialID}-${name}`;
    if (name == "default") {
        WEBVIEW.toast(player, `OUTFITS: ${name}`, `You can not delete the ${name} outfit.`, 5, `danger`);
        return;
    }
    if (!DBC.has(DBname)) {
        WEBVIEW.toast(player, `OUTFITS: ${name}`, `A apperance with the ${name} does not exist.`, 5, `warning`);
        return;
    }
    DBC.delete(DBname);
    WEBVIEW.toast(player, `OUTFITS: ${name}`, `A apperance with the ${name} was deleted.`, 5, `success`);
});
chat.registerCmd("ui", (player, args)=>{
    if (args[0] === "stop") {
        alt.emitClient(player, "freeroam:WEBVIEW:stop");
        return;
    }
    if (args[0] === "start") {
        alt.emitClient(player, "freeroam:WEBVIEW:start");
        return;
    }
});
function loadClothesDB(player, outfitname, basic = false) {
    let dbname = `basic-spawn`;
    if (!basic) {
        dbname = `${player.socialID}-${outfitname}`;
    }
    if (!DBC.has(dbname)) {
        return true;
    }
    let entry = {};
    entry = DBC.get(dbname);
    // alt.log(`>> ${JSON.stringify(outfit)}`);
    let clothes = entry.outfit.clothes;
    let props = entry.outfit.props;
    player.model = entry.playerModel;
    // alt.log(`>> ${JSON.stringify(clothes)}`);
    // alt.log(`>> ${JSON.stringify(props)}`);
    entry.outfit.clothes.forEach((item)=>{
        player.setClothes(item.id, item.data.drawable, item.data.texture, item.data.palette);
    });
    entry.outfit.props.forEach((item)=>{
        player.setProp(item.id, item.data.drawable, item.data.texture);
    });
    return false;
}
// =============================== Commands End ====================================================
ParkedVehicleSpawner.spawn(500);
