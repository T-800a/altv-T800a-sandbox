/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import * as chat from "chat";


chat.registerCmd("t8veh", ( player ) => {
   alt.emitClient( player, "T8VEH:client:createWebView" );
});


alt.onClient('T8VEH:server:spawnVehicle', ( player, vehicleName:string ) => {
   if ( player.vehicle ){ player.vehicle.destroy(); };
   let newVehicle = new alt.Vehicle( vehicleName, player.pos.x, player.pos.y, player.pos.z, player.rot.x, player.rot.y, player.rot.z );
   alt.emitClient( player, "T8VEH:client:vehicleSpawned" );
   alt.setTimeout(()=>{
      player.setIntoVehicle( newVehicle, 1 );
   }, 100);
   alt.log(`>> T8VEH:server:spawnVehicle >> ${ player.name } > SPAWNED > ${vehicleName}`);
});

