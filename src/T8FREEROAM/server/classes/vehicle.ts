
import alt from 'alt-server';

export function getVehicleMods( player ){
   let veh = alt.Vehicle.getByID(player.vehicle.id);
   let vehData = {};
   
   if ( veh.modKitsCount === 1 ){ veh.modKit = 1; };
   if ( veh.modKitsCount === 2 ){ veh.modKit = 2; };
   
   vehData = {

      base64:        veh.getAppearanceDataBase64(),
      modkit:        veh.modKit,
   
      engine:        veh.getMod( 11 ),
      brakes:        veh.getMod( 12 ),
      transmission:  veh.getMod( 13 ),
      suspension:    veh.getMod( 15 ),
      turbo:         veh.getMod( 18 ),
      exhaust:       veh.getMod(  4 ),
   
      spoiler:       veh.getMod(  0 ),
      bumperF:       veh.getMod(  1 ),
      bumperR:       veh.getMod(  2 ),
      skirt:         veh.getMod(  3 ),
      frame:         veh.getMod(  5 ),
      grille:        veh.getMod(  6 ),
      bonnet:        veh.getMod(  7 ),
      wingL:         veh.getMod(  8 ),
      wingR:         veh.getMod(  9 ),
      roof:          veh.getMod( 10 ),
   
      plateH:        veh.getMod( 25 ),
      plateV:        veh.getMod( 26 ),
      trim:          veh.getMod( 27 ),
      ornaments:     veh.getMod( 28 ),
      dialDesign:    veh.getMod( 30 ),
      doorInterior:  veh.getMod( 31 ),
      seats:         veh.getMod( 32 ),
      steeringWheel: veh.getMod( 33 ),
      shiftLever:    veh.getMod( 34 ),
      plaques:       veh.getMod( 35 ),
      rearShelf:     veh.getMod( 36 ),
      trunk:         veh.getMod( 37 ),
      hydraulics:    veh.getMod( 38 ),
      engineBlock:   veh.getMod( 39 ),
      airFilter:     veh.getMod( 40 ),
      strutBar:      veh.getMod( 41 ),
      archCover:     veh.getMod( 42 ),
      antenna:       veh.getMod( 43 ),
      exteriorParts: veh.getMod( 44 ),
      tank:          veh.getMod( 45 ),
      door:          veh.getMod( 46 ),
      WROH:          veh.getMod( 47 ),
   
      livery:        veh.getMod( 48 ),
      xenon:         veh.getMod( 22 ),
      plates:        veh.numberPlateIndex,
      windows:       veh.windowTint,
   
//    extras:        [  getExt( veh, 1 ), getExt( veh, 2 ), getExt( veh, 3 ), getExt( veh, 4 ),  getExt( veh, 5 ),  getExt( veh, 6 ),
//                      getExt( veh, 7 ), getExt( veh, 8 ), getExt( veh, 9 ), getExt( veh, 10 ), getExt( veh, 11 ), getExt( veh, 12 ) ],
   
      wheelsType:    veh.wheelType,
      wheels:        veh.frontWheels,
      wheelsRear:    veh.rearWheels,
   
      rooflivery:    veh.roofLivery,
      oldlivery:     0,
   
      colors:        {
                        M: veh.primaryColor,
                        S: veh.secondaryColor,
                        P: veh.pearlColor,
                        W: veh.wheelColor
      }
   };

   return vehData;
};


export function setVehicleMods( player, data:any ){

   let veh = alt.Vehicle.getByID(player.vehicle.id);
   veh.repair();

   veh.dirtLevel = 0;
   veh.windowTint = data.windows;
   veh.numberPlateIndex = data.plates;

   veh.primaryColor     = data.colors.M;
   veh.secondaryColor   = data.colors.S;
   veh.pearlColor       = data.colors.P;
   veh.wheelColor       = data.colors.W;

   veh.roofLivery       = data.rooflivery;

   if ( veh.modKitsCount > 0 ){

      if ( veh.modKitsCount === 1 ){ veh.modKit = 1; };
      if ( veh.modKitsCount === 2 ){ veh.modKit = 2; };

      veh.setWheels( data.wheelsType, data.wheels );
      veh.setRearWheels( data.wheels ) ;
//    veh.setRearWheels( vehData.wheelsRear );

      veh.setMod( 11, data.engine );
      veh.setMod( 12, data.brakes );
      veh.setMod( 13, data.transmission );
      veh.setMod( 15, data.suspension );
      veh.setMod( 18, data.turbo );
      veh.setMod(  4, data.exhaust );

      veh.setMod(  0, data.spoiler );
      veh.setMod(  1, data.bumperF );
      veh.setMod(  2, data.bumperR );
      veh.setMod(  3, data.skirt );
      veh.setMod(  5, data.frame );
      veh.setMod(  6, data.grille );
      veh.setMod(  7, data.bonnet );
      veh.setMod(  8, data.wingL );
      veh.setMod(  9, data.wingR );
      veh.setMod( 10, data.roof );

      veh.setMod( 25, data.plateH );
      veh.setMod( 26, data.plateV );
      veh.setMod( 27, data.trim );
      veh.setMod( 28, data.ornaments );
      veh.setMod( 30, data.dialDesign );
      veh.setMod( 31, data.doorInterior );
      veh.setMod( 32, data.seats );
      veh.setMod( 33, data.steeringWheel );
      veh.setMod( 34, data.shiftLever );
      veh.setMod( 35, data.plaques );
      veh.setMod( 36, data.rearShelf );
      veh.setMod( 37, data.trunk );
//    veh.setMod( 38, data.hydraulics );
      veh.setMod( 39, data.engineBlock );
      veh.setMod( 40, data.airFilter );
      veh.setMod( 41, data.strutBar );
      veh.setMod( 42, data.archCover );
      veh.setMod( 43, data.antenna );
      veh.setMod( 44, data.exteriorParts );
      veh.setMod( 45, data.tank );
      veh.setMod( 46, data.door );
      veh.setMod( 47, data.WROH );

      veh.setMod( 48, data.livery );
      veh.setMod( 22, data.xenon );
   };

   // let n = 1;
   // data.extras.forEach(( extra ) => { veh.setExtra( n, setExt( extra )); n++; });
};