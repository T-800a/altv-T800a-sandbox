import alt from 'alt-client';
import natives from 'natives';
import * as chat from "chat";
import { Raycast, GetDirectionFromRotation, playAnimation } from './classes/utility';
import { T8INT_WASDmenu } from './classes/t8int_wasd';
import { T8INT_Interactions3D } from './classes/t8int_int3d';
import { T8INT_Interactions } from './classes/t8int_interactions';


// EEREERRE WEEE GOO BOIIYYYYZ

let spam = Date.now();
let WASDMENU = new T8INT_WASDmenu();
let INT3D = new T8INT_Interactions3D();
let INTER = new T8INT_Interactions();

const emtpyResult = { isHit: false, pos: { x:0, y:0, z:0 }, rot: { x:0, y:0, z:0 }, entity: null, entityType: 0, entityHash: 0, entityID: 0 };

// Define Key presses
alt.on("keyup", function (key:number) {

   // chat.pushLine(`>> T8INT >> KEY: ${key}` );

   // skip when in noclip
   if( alt.Player.local.getMeta('NoClipStatus' )){ return; };

   // Interactions when menu is open
   if ( Date.now() > spam ){
      if ( WASDMENU.webview ){
   // MENU DO ACTION
   // [ LEFT MOUSE ]      (E : 69)
         if ( key == 1 ) {  WASDMENU.exec(); };
   // MENU CLOSE
   // [ RIGHT MOUSE ]      (Q : 81)
         if ( key == 2 ) { WASDMENU.close(); };
   // MENU UP
   // [ W ] / [ D ]
         if ( key == 87 || key == 68 ) { WASDMENU.LineUp(); };
   // MENU DOWN
   // [ S ] / [ A ]
         if ( key == 83 || key == 65 ) { WASDMENU.LineDown(); };
         return;
      };


// --------------------------------------------------------------------------------

   // Request INTERACTIONS based on entity-hash we are 'looking' at or our player is near to 
   // [ E ] >>
      if ( key == 69 && !WASDMENU.webview ) {

         WASDMENU.intResult      = emtpyResult;

   // Player not in Vehicle
         if(!(alt.Player.local.vehicle)) {
            let result = Raycast.line(1.5, 2.5);
            if ( result ){
               WASDMENU.intResult = result;
               let distance = alt.Player.local.pos.distanceTo( natives.getEntityCoords(result.entity, true) );
               alt.log('>> T8INT >> RAYCAST >> entityHash: ' + result.entityHash + ' entityType: ' + result.entityType + ' entityID: ' + result.entityID + ' distance: ' + distance + ' nearestObject: ' + INT3D.nearestObject.entityHash );

   // Player targets Person
               if ( result.isHit && result.entityType === 1 && distance < 1.5 ){
                  alt.emitServer('T8INT:CLI>SRV:requestMenu', result.entityType, result.entityHash );
                  return;
               };
   // Player targets Vehicle
               if ( result.isHit && result.entityType === 2 && distance < 4.5 ){
                  alt.emitServer('T8INT:CLI>SRV:requestMenu', result.entityType, result.entityHash );
                  
                  return;
               };
   // Player targets Object
               if ( result.isHit && result.entityType === 3 && distance < 1.8 && INT3D.nearestObject.entityHash === 0 ){
                  alt.emitServer('T8INT:CLI>SRV:requestMenu', result.entityType, result.entityHash );
                  return;
               };
            };

   // Interactable Object is near player
            if ( INT3D.nearestObject.entityHash > 0 ){
               alt.emitServer('T8INT:CLI>SRV:requestMenu', 3, INT3D.nearestObject.entityHash );
               WASDMENU.intResult = INT3D.nearestObject;
               alt.log( JSON.parse(INT3D.nearestObject.entity))
               return; 
            };
         };
         return;
      };
      
   // Player is in vehicle
   // [ X ] >>
      if ( key == 88 ) {
         if ( alt.Player.local.vehicle && !WASDMENU.webview ) {
            WASDMENU.intResult = INT3D.nearestObject;
            alt.emitServer('T8INT:CLI>SRV:requestMenu', 99, 'none' );
            return;
         };
      };
      
   // menu with no object kontext
   // [ F3 ] >>
      if ( key == 114 ) {   
         if ( !WASDMENU.webview ) {
            alt.emitServer('T8INT:CLI>SRV:requestMenu', 9999, 'F3_menu' );
         };
         return;
      };
// --------------------------------------------------------------------------------

      spam = Date.now() + 200;
   };
});


// gibb ze menu plz dear sörfer
alt.onServer('T8INT:SRV>CLI:openMenu', ( dataJSON ) => {
   WASDMENU.open( dataJSON );
});

// initialize 3D interactions when server sends Hash array
alt.onServer('T8INT:SRV>CLI:initINT3D', ( dataJSON ) => {

   let hasharray = JSON.parse(dataJSON);
   alt.log(`>> T8INT:SRV>CLI:initINT3D >> hashes >> ${hasharray}`);
   alt.log(`>> T8INT:SRV>CLI:initINT3D >> hashes >> ${hasharray.length}`);
   // INT3D.init([ 1805980844, 3232156621, 3666247552, 3079285877, 3059710928, 2533307946, 525667351 ]);
   INT3D.init( hasharray );
});




alt.setInterval( function(){ INT3D.findNearest(); }, 500 );
alt.everyTick( function(){ INT3D.draw3D(); });
INTER.init();


// Ask server to send 3D interaction hashes
alt.emitServer('T8INT:CLI>SRV:requestINT3D');



