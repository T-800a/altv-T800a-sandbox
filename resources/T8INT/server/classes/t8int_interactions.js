import alt from 'alt-server';
import * as chat from "chat";
/*
intResult:object = { 
   isHit: false, 
   pos: { x:0, y:0, z:0 }, 
   rot: { x:0, y:0, z:0 }, 
   entity: null, 
   entityType: 0, 
   entityHash: 0, 
   entityID: 0 
};
*/ export class T8INT_Interactions {
    init() {
        alt.onClient('T8INT:CLI>SRV:interaction', (player, call, data, intResult)=>{
            alt.log(`T8INT >> ${player.name} >> interaction >> call: ${call} >> data: ${data} >> intResult: ${JSON.stringify(intResult)}`);
            this[call](player, call, data, intResult);
        });
    }
    sitzen_bank(player, call, data) {
        alt.emitClient(player, 'T8INT:CLI:interaction', call, data);
    }
    muell_durchsuchen(player) {
        let array = [
            "eine abgebissene Wurst",
            "einen halbfaulen Apfel",
            "eine Bananen Schale",
            "eine Käsige Socke",
            "ne Mark",
            "nix",
            "nix",
            "nix"
        ];
        let random = array[Math.floor(Math.random() * array.length)];
        chat.send(player, `Du hast im Müll ${random} gefunden.`);
        alt.emitClient(player, 'T8INT:CLI:interaction', 'animation', [
            'gestures@f@standing@casual',
            'gesture_point',
            1,
            700
        ]);
    }
    automat(player, call, data) {
        chat.send(player, `Du hast eine(n) ${data} gekauft.`);
        alt.emitClient(player, 'T8INT:CLI:interaction', 'animation', [
            'gestures@f@standing@casual',
            'gesture_point',
            1,
            700
        ]);
    }
    teleport(player) {
        const spawns = [
            {
                x: -695.1956176757813,
                y: 83.94725036621094,
                z: 55.85205078125
            },
            {
                x: -527.6835327148438,
                y: -678.7252807617188,
                z: 33.6607666015625
            },
            {
                x: 200.6637420654297,
                y: -935.2879028320313,
                z: 30.6783447265625
            },
            {
                x: 897.7318725585938,
                y: -1054.6944580078125,
                z: 32.818359375
            },
            {
                x: 363.1516418457031,
                y: -2123.156005859375,
                z: 16.052734375
            },
            {
                x: -265.3582458496094,
                y: -1898.0703125,
                z: 27.7464599609375
            }, 
        ];
        let random = spawns[Math.floor(Math.random() * spawns.length)];
        player.pos = random;
    }
    vehicle_repair(player, call, data, intResult) {
        let veh = alt.Vehicle.getByID(intResult.entityID);
        veh.repair();
        chat.send(player, `Dein Fahrzeug [${veh.numberPlateText}] wurde repariert (du cheater).`);
    }
    vehicle_quicktune(player, call, data, intResult) {
        let veh = alt.Vehicle.getByID(intResult.entityID);
        veh.repair();
        veh.numberPlateText = "Tuuuned";
        veh.modKit = 1;
        veh.setMod(11, 4); // Engine
        veh.setMod(12, 3); // Brakes
        veh.setMod(13, 3); // Transmission
        veh.setMod(15, 3); // Suspension
        veh.setMod(18, 1); // Turbo
        veh.setMod(22, 1); // Xenon
        veh.primaryColor = 50; // Metallic Racing Green
        veh.secondaryColor = 1; // Metallic Graphite Black 
        veh.pearlColor = 92; // Metallic Lime 
        veh.wheelColor = 158; // Pure Gold 
        chat.send(player, `Dein Fahrzeug [${veh.numberPlateText}] wurde gepimpt (du cheater).`);
    }
}
