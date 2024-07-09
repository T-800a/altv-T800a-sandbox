/// <reference types="@altv/types-server" />
import alt from 'alt-server';
//@ts-ignore
import * as chat from "alt:chat";
chat.registerCmd("tune", (player)=>{
    alt.emitClient(player, "T8UNE:client:createWindow");
});
function getExt(veh, n) {
    let ext = veh.getExtra(n);
    let ret = 0;
    if (ext == true) {
        ret = 1;
    }
    return ret;
}
function setExt(extra) {
    let ret = false;
    if (extra == 1) {
        ret = true;
    }
    return ret;
}
alt.onClient('T8UNE:server:sendVehicle', (player, vehicleID)=>{
    // let veh = alt.Vehicle.getByID(Number(vehicleID));
    let veh = alt.Vehicle.getByID(player.vehicle.id);
    let vehData = {};
    if (veh.modKitsCount === 1) {
        veh.modKit = 1;
    }
    if (veh.modKitsCount === 2) {
        veh.modKit = 2;
    }
    vehData = {
        modkit: {
            current: veh.modKit,
            range: veh.modKitsCount
        },
        engine: {
            current: veh.getMod(11),
            range: veh.getModsCount(11)
        },
        brakes: {
            current: veh.getMod(12),
            range: veh.getModsCount(12)
        },
        transmission: {
            current: veh.getMod(13),
            range: veh.getModsCount(13)
        },
        suspension: {
            current: veh.getMod(15),
            range: veh.getModsCount(15)
        },
        turbo: {
            current: veh.getMod(18),
            range: veh.getModsCount(18)
        },
        exhaust: {
            current: veh.getMod(4),
            range: veh.getModsCount(4)
        },
        spoiler: {
            current: veh.getMod(0),
            range: veh.getModsCount(0)
        },
        bumperF: {
            current: veh.getMod(1),
            range: veh.getModsCount(1)
        },
        bumperR: {
            current: veh.getMod(2),
            range: veh.getModsCount(2)
        },
        skirt: {
            current: veh.getMod(3),
            range: veh.getModsCount(3)
        },
        frame: {
            current: veh.getMod(5),
            range: veh.getModsCount(5)
        },
        grille: {
            current: veh.getMod(6),
            range: veh.getModsCount(6)
        },
        bonnet: {
            current: veh.getMod(7),
            range: veh.getModsCount(7)
        },
        wingL: {
            current: veh.getMod(8),
            range: veh.getModsCount(8)
        },
        wingR: {
            current: veh.getMod(9),
            range: veh.getModsCount(9)
        },
        roof: {
            current: veh.getMod(10),
            range: veh.getModsCount(10)
        },
        plateH: {
            current: veh.getMod(25),
            range: veh.getModsCount(25)
        },
        plateV: {
            current: veh.getMod(26),
            range: veh.getModsCount(26)
        },
        trim: {
            current: veh.getMod(27),
            range: veh.getModsCount(27)
        },
        ornaments: {
            current: veh.getMod(28),
            range: veh.getModsCount(28)
        },
        dialDesign: {
            current: veh.getMod(30),
            range: veh.getModsCount(30)
        },
        doorInterior: {
            current: veh.getMod(31),
            range: veh.getModsCount(31)
        },
        seats: {
            current: veh.getMod(32),
            range: veh.getModsCount(32)
        },
        steeringWheel: {
            current: veh.getMod(33),
            range: veh.getModsCount(33)
        },
        shiftLever: {
            current: veh.getMod(34),
            range: veh.getModsCount(34)
        },
        plaques: {
            current: veh.getMod(35),
            range: veh.getModsCount(35)
        },
        rearShelf: {
            current: veh.getMod(36),
            range: veh.getModsCount(36)
        },
        trunk: {
            current: veh.getMod(37),
            range: veh.getModsCount(37)
        },
        hydraulics: {
            current: veh.getMod(38),
            range: veh.getModsCount(38)
        },
        engineBlock: {
            current: veh.getMod(39),
            range: veh.getModsCount(39)
        },
        airFilter: {
            current: veh.getMod(40),
            range: veh.getModsCount(40)
        },
        strutBar: {
            current: veh.getMod(41),
            range: veh.getModsCount(41)
        },
        archCover: {
            current: veh.getMod(42),
            range: veh.getModsCount(42)
        },
        antenna: {
            current: veh.getMod(43),
            range: veh.getModsCount(43)
        },
        exteriorParts: {
            current: veh.getMod(44),
            range: veh.getModsCount(44)
        },
        tank: {
            current: veh.getMod(45),
            range: veh.getModsCount(45)
        },
        door: {
            current: veh.getMod(46),
            range: veh.getModsCount(46)
        },
        WROH: {
            current: veh.getMod(47),
            range: veh.getModsCount(47)
        },
        livery: {
            current: veh.getMod(48),
            range: veh.getModsCount(48)
        },
        xenon: {
            current: veh.getMod(22),
            range: veh.getModsCount(22)
        },
        plates: {
            current: veh.numberPlateIndex,
            range: 5
        },
        windows: {
            current: veh.windowTint,
            range: 6
        },
        extras: [
            getExt(veh, 1),
            getExt(veh, 2),
            getExt(veh, 3),
            getExt(veh, 4),
            getExt(veh, 5),
            getExt(veh, 6),
            getExt(veh, 7),
            getExt(veh, 8),
            getExt(veh, 9),
            getExt(veh, 10),
            getExt(veh, 11),
            getExt(veh, 12)
        ],
        wheelsType: veh.wheelType,
        wheels: veh.frontWheels,
        wheelsRear: veh.rearWheels,
        rooflivery: veh.roofLivery,
        oldlivery: 0,
        colors: {
            M: veh.primaryColor,
            S: veh.secondaryColor,
            P: veh.pearlColor,
            W: veh.wheelColor
        }
    };
    /*
   } else {
      veh.modKit = 0;

      vehData = {
         engine:        { current: 0, range: 0 },
         brakes:        { current: 0, range: 0 },
         transmission:  { current: 0, range: 0 },
         suspension:    { current: 0, range: 0 },
         turbo:         { current: 0, range: 0 },
         exhaust:       { current: 0, range: 0 },

         spoiler:       { current: 0, range: 0 },
         bumperF:       { current: 0, range: 0 },
         bumperR:       { current: 0, range: 0 },
         skirt:         { current: 0, range: 0 },
         frame:         { current: 0, range: 0 },
         grille:        { current: 0, range: 0 },
         bonnet:        { current: 0, range: 0 },
         wingL:         { current: 0, range: 0 },
         wingR:         { current: 0, range: 0 },
         roof:          { current: 0, range: 0 },

         plateH:        { current: 0, range: 0 },
         plateV:        { current: 0, range: 0 },
         trim:          { current: 0, range: 0 },
         ornaments:     { current: 0, range: 0 },
         dialDesign:    { current: 0, range: 0 },
         doorInterior:  { current: 0, range: 0 },
         seats:         { current: 0, range: 0 },
         steeringWheel: { current: 0, range: 0 },
         shiftLever:    { current: 0, range: 0 },
         plaques:       { current: 0, range: 0 },
         rearShelf:     { current: 0, range: 0 },
         trunk:         { current: 0, range: 0 },
         hydraulics:    { current: 0, range: 0 },
         engineBlock:   { current: 0, range: 0 },
         airFilter:     { current: 0, range: 0 },
         strutBar:      { current: 0, range: 0 },
         archCover:     { current: 0, range: 0 },
         antenna:       { current: 0, range: 0 },
         exteriorParts: { current: 0, range: 0 },
         tank:          { current: 0, range: 0 },
         door:          { current: 0, range: 0 },
         WROH:          { current: 0, range: 0 },

         livery:        { current: 0, range: 0 },
         xenon:         { current: 0, range: 0 },
         plates:        { current: veh.numberPlateIndex, range: 5 },
         windows:       { current: veh.windowTint, range: 6 },

         extras:        [  false, false, false, false, false, false, false, false, false, false, false, false ],

         wheelsType:    veh.wheelType,
         wheels:        veh.frontWheels,
         wheelsRear:    veh.rearWheels,

         rooflivery:    veh.roofLivery,

         colors:        {
                           M: veh.primaryColor,
                           S: veh.secondaryColor,
                           P: veh.pearlColor,
                           W: veh.wheelColor
         }
      };
   };
*/ alt.log(`>> T8UNE:server:sendVehicle >> ${vehicleID}`);
    // alt.log(`>> T8UNE:server:sendVehicle >> ${JSON.stringify(vehData)}`);
    alt.emitClient(player, "T8UNE:client:sendVehicle", JSON.stringify(vehData));
});
alt.onClient('T8UNE:server:updateVehicle', (player, vehicleID, dataJSON)=>{
    let vehData = JSON.parse(dataJSON);
    // alt.log(`>> T8UNE:server:updateVehicle >> ${vehicleID} > ${player.vehicle.id}`);
    let veh = alt.Vehicle.getByID(player.vehicle.id);
    veh.repair();
    veh.dirtLevel = 0;
    veh.numberPlateText = "LS ACAB";
    veh.windowTint = vehData.windows.current;
    veh.numberPlateIndex = vehData.plates.current;
    veh.setWheels(vehData.wheelsType, vehData.wheels);
    // veh.setRearWheels( vehData.wheelsRear );
    veh.setRearWheels(vehData.wheels);
    veh.primaryColor = vehData.colors.M;
    veh.secondaryColor = vehData.colors.S;
    veh.pearlColor = vehData.colors.P;
    veh.wheelColor = vehData.colors.W;
    veh.roofLivery = vehData.rooflivery;
    if (veh.modKitsCount > 0) {
        if (veh.modKitsCount === 1) {
            veh.modKit = 1;
        }
        if (veh.modKitsCount === 2) {
            veh.modKit = 2;
        }
        veh.setMod(11, vehData.engine.current);
        veh.setMod(12, vehData.brakes.current);
        veh.setMod(13, vehData.transmission.current);
        veh.setMod(15, vehData.suspension.current);
        veh.setMod(18, vehData.turbo.current);
        veh.setMod(4, vehData.exhaust.current);
        veh.setMod(0, vehData.spoiler.current);
        veh.setMod(1, vehData.bumperF.current);
        veh.setMod(2, vehData.bumperR.current);
        veh.setMod(3, vehData.skirt.current);
        veh.setMod(5, vehData.frame.current);
        veh.setMod(6, vehData.grille.current);
        veh.setMod(7, vehData.bonnet.current);
        veh.setMod(8, vehData.wingL.current);
        veh.setMod(9, vehData.wingR.current);
        veh.setMod(10, vehData.roof.current);
        veh.setMod(25, vehData.plateH.current);
        veh.setMod(26, vehData.plateV.current);
        veh.setMod(27, vehData.trim.current);
        veh.setMod(28, vehData.ornaments.current);
        veh.setMod(30, vehData.dialDesign.current);
        veh.setMod(31, vehData.doorInterior.current);
        veh.setMod(32, vehData.seats.current);
        veh.setMod(33, vehData.steeringWheel.current);
        veh.setMod(34, vehData.shiftLever.current);
        veh.setMod(35, vehData.plaques.current);
        veh.setMod(36, vehData.rearShelf.current);
        veh.setMod(37, vehData.trunk.current);
        //    veh.setMod( 38, vehData.hydraulics.current );
        veh.setMod(39, vehData.engineBlock.current);
        veh.setMod(40, vehData.airFilter.current);
        veh.setMod(41, vehData.strutBar.current);
        veh.setMod(42, vehData.archCover.current);
        veh.setMod(43, vehData.antenna.current);
        veh.setMod(44, vehData.exteriorParts.current);
        veh.setMod(45, vehData.tank.current);
        veh.setMod(46, vehData.door.current);
        veh.setMod(47, vehData.WROH.current);
        veh.setMod(48, vehData.livery.current);
        veh.setMod(22, vehData.xenon.current);
    // for ( let n = 1; n < 13; n++ ){ veh.setExtra( n, [ n - 1 ]); };
    }
    let n = 1;
    vehData.extras.forEach((extra)=>{
        veh.setExtra(n, setExt(extra));
        n++;
    });
});
