import alt from 'alt-server';
import JSONdb from 'simple-json-db';
import * as chat from "chat";
import { T8INT_Interactions } from './classes/t8int_interactions';
let INTER = new T8INT_Interactions();
const DBM = new JSONdb('./JSONdb/db-menus.json');
const DBO = new JSONdb('./JSONdb/db-objects.json');
alt.onClient('T8INT:CLI>SRV:requestINT3D', (player)=>{
    alt.log('>> T8INT:CLI>SRV:requestINT3D >> ' + player.name);
    let fullJSON = DBO.JSON();
    let int3Darray = [];
    for(let key in fullJSON){
        let element = fullJSON[key];
        if ("INT3D" in element && element["INT3D"]) {
            int3Darray.push(key);
        }
    }
    let int3DJSON = JSON.stringify(int3Darray);
    alt.log('>> T8INT:CLI>SRV:requestINT3D >> ' + int3DJSON);
    alt.emitClient(player, 'T8INT:SRV>CLI:initINT3D', int3DJSON);
});
alt.onClient('T8INT:CLI>SRV:requestMenu', (player, entityType, entityHash)=>{
    // alt.log( '>> T8INT:CLI>SRV:requestMenu >> ' + player.name, entityType, entityHash );
    if (entityType === 99) {
        if (DBM.has("insidevehicle_menu")) {
            let interaction = JSON.stringify(DBM.get("insidevehicle_menu"));
            alt.emitClient(player, 'T8INT:SRV>CLI:openMenu', interaction);
        }
        return;
    }
    if (entityType === 101) {
        if (DBM.has("F3_menu")) {
            let interaction = JSON.stringify(DBM.get("F3_menu"));
            alt.emitClient(player, 'T8INT:SRV>CLI:openMenu', interaction);
        }
    }
    if (entityType === 3) {
        if (DBO.has(entityHash)) {
            let object = DBO.get(entityHash);
            let menu = object["menu"];
            if (DBM.has(menu)) {
                let interaction = JSON.stringify(DBM.get(menu));
                alt.emitClient(player, 'T8INT:SRV>CLI:openMenu', interaction);
            }
        }
        return;
    }
    if (entityType === 2) {
        if (DBM.has("vehicle_menu")) {
            let interaction = JSON.stringify(DBM.get("vehicle_menu"));
            alt.emitClient(player, 'T8INT:SRV>CLI:openMenu', interaction);
        }
        return;
    }
    if (entityType === 1) {
        if (DBM.has("player_menu")) {
            let interaction = JSON.stringify(DBM.get("player_menu"));
            alt.emitClient(player, 'T8INT:SRV>CLI:openMenu', interaction);
        }
        return;
    }
});
INTER.init();
/*
alt.onClient('T8INT:CLI>SRV:TEMP', ( player, _obj ) => {
   alt.log(`>> T8INT:CLI>SRV:TEMP >> ${player.name} >> ${_obj} >> ${( alt.Entity.getByID(_obj) )}`);
});
*/ // =========== CHAT COMMANDS ================================================================
chat.registerCmd("nm", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /nm (Menu Key[string]) (name:optional) (action:optional)");
        return;
    }
    let name = "NEUES MENU";
    let action = "Neue Interaktion ";
    if (args[1]) {
        name = args[1];
    }
    if (args[2]) {
        action = args[2];
    }
    if (DBM.has(args[0])) {
        chat.send(player, `>> es existiert bereits ein Eintrag mit dem Namen ${args[0]}`);
        return;
    }
    DBM.set(args[0], {
        titel: name,
        items: [
            {
                name: action,
                img: "img/empty.png",
                keepOpen: false,
                target: "none",
                call: "",
                data: ""
            }
        ]
    });
    chat.send(player, `>> neuen Eintrag mit dem Namen ${args[0]} erstellt`);
});
chat.registerCmd("ni", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /ni (Modelhash) (Name:optional) (Menu:optional) (3D Interaction [y/n]:optional)");
        return;
    }
    let name = "NEUES OBJECT";
    let menu = "new_menu";
    let doint3d = true;
    if (args[1]) {
        name = args[1];
    }
    if (args[2]) {
        menu = args[2];
    }
    if (args[3] === "y") {
        doint3d = true;
    }
    if (args[3] === "n") {
        doint3d = false;
    }
    if (DBO.has(args[0])) {
        chat.send(player, `>> es existiert bereits ein Eintrag für den Modelhash ${args[0]}`);
        return;
    }
    DBO.set(args[0], {
        titel: name,
        menu: menu,
        INT3D: doint3d
    });
    chat.send(player, `>> neuen Eintrag für den Modelhash ${args[0]} erstellt`);
});
