import alt from 'alt-server';
import JSONdb from 'simple-json-db';
//@ts-ignore
import * as chat from "alt:chat";
import { ServerInteractions } from './classes/serverInteractions.js';


const DBM = new JSONdb('./JSONdb/db-menus.json');
const DBO = new JSONdb('./JSONdb/db-objects.json');


let INTER = new ServerInteractions( true );
INTER.init( DBO.JSON());


alt.onClient('T8INT:CLI>SRV:requestINTOBJ', player => {
   
   alt.emitClient( player, 'T8INT:SRV>CLI:initINTOBJ', JSON.stringify(INTER.intObjArray), JSON.stringify(INTER.gasPumpArray) );

   alt.log( '>> T8INT:CLI>SRV:requestINTOBJ >> ' + player.name );
   alt.log( '>> T8INT:CLI>SRV:requestINTOBJ >> intObjarray: ' + JSON.stringify(INTER.intObjArray));
   alt.log( '>> T8INT:CLI>SRV:requestINTOBJ >> gasPumpArray: ' + JSON.stringify(INTER.gasPumpArray));
});


alt.onClient('T8INT:CLI>SRV:requestMenu', ( player, type:number = 0, result:any = {}) => {
   // alt.log( `>> T8INT:CLI>SRV:requestMenu >> ${player.name} >> type: ${type} result: ${JSON.stringify(result)}`);

   let hash = result.entityHash;

   if (type === 99 ){
      if ( DBM.has("insidevehicle_menu") ){
         let interaction = JSON.stringify(DBM.get("insidevehicle_menu"));
         alt.emitClient( player, 'T8INT:SRV>CLI:openMenu', interaction);
      };
      return;
   };

   if (type === 9999 && ( typeof result === "string" )){
      if ( DBM.has( result ) ){
         let interaction = JSON.stringify(DBM.get( result ));
         alt.emitClient( player, 'T8INT:SRV>CLI:openMenu', interaction );
      };
   };

   if (type === 3 ){
      if ( DBO.has( hash ) ){
         let object = DBO.get( hash );
         let menu = object["menu"];
         if ( DBM.has( menu ) ){
            let interaction = JSON.stringify(DBM.get( menu ));
            alt.emitClient( player, 'T8INT:SRV>CLI:openMenu', interaction );
         };
      };
      return;
   };

   if (type === 2 ){
      if ( DBM.has("vehicle_menu") ){
         
         let menu = DBM.get("vehicle_menu" );
         menu = INTER.checkForFlag( menu, [[ 'neargaspump', result.nearGasPump ], ['admin', false]] );

         // alt.log( `>> T8INT:CLI>SRV:requestMenu >> ${player.name} >> vehMenu: ${vehMenu}`);
         // alt.log( `>> T8INT:CLI>SRV:requestMenu >> ${player.name} >> menu: ${JSON.stringify(menu)}`);

         alt.emitClient( player, 'T8INT:SRV>CLI:openMenu', JSON.stringify( menu ));
      };
      return;
   };
   if (type === 1 ){
      if ( DBM.has("player_menu") ){
         let interaction = JSON.stringify(DBM.get("player_menu"));
         alt.emitClient( player, 'T8INT:SRV>CLI:openMenu', interaction );
      };
      return;
   };
});



/*
alt.onClient('T8INT:CLI>SRV:TEMP', ( player, _obj ) => {
   alt.log(`>> T8INT:CLI>SRV:TEMP >> ${player.name} >> ${_obj} >> ${( alt.Entity.getByID(_obj) )}`);
});
*/

// =========== CHAT COMMANDS ================================================================

chat.registerCmd("nm", (player, args) => {
   if (args.length === 0) {
      chat.send(player, "Usage: /nm (Menu Key[string]) (name:optional) (action:optional)");
      return;
   }

   let name = "NEUES MENU";
   let action = "Neue Interaktion ";
   
   if( args[1]){ name = args[1]};
   if( args[2]){ action = args[2]};
   
   if( DBM.has(args[0]) ){ chat.send(player, `>> es existiert bereits ein Eintrag mit dem Namen ${args[0]}`); return; };
   DBM.set( args[0], {
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


chat.registerCmd("ni", (player, args) => {
   if (args.length === 0) {
      chat.send(player, "Usage: /ni (Modelhash) (Name:optional) (Menu:optional) (3D Interaction [y/n]:optional)");
      return;
   };

   let name = "NEUES OBJECT";
   let menu = "new_menu";
   let isIntObj = true;
   
   if( args[1] ){ name = args[1]};
   if( args[2] ){ menu = args[2]};
   if( args[3] === "y" ){ isIntObj = true; };
   if( args[3] === "n" ){ isIntObj = false; };

   if( DBO.has(args[0]) ){ chat.send(player, `>> es existiert bereits ein Eintrag für den Modelhash ${args[0]}`); return; };
   DBO.set( args[0], {
      titel: name,
      menu:  menu,
      INTOBJ: isIntObj
   });

   chat.send(player, `>> neuen Eintrag für den Modelhash ${args[0]} erstellt`);
});


