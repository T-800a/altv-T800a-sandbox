import alt from 'alt-client';
import natives from 'natives';
import * as chat from "chat";
import { Raycast, GetDirectionFromRotation, playAnimation } from './classes/utility';
import { T8IntWebView } from './classes/webview';
import { WASDmenu } from './classes/wasdMenu';
import { InteractionObjects } from './classes/interactionObjects';
import { Interactions } from './classes/interactions';


const emtpyResult = { isHit: false, pos: { x:0, y:0, z:0 }, rot: { x:0, y:0, z:0 }, entity: null, entityType: 0, entityHash: 0, entityID: 0 };

let WEBVIEW = new T8IntWebView();
let WASDMENU = new WASDmenu();
let INTOBJ = new InteractionObjects();
let INTER = new Interactions();

WEBVIEW.init();
WASDMENU.init();

let spam = Date.now();

// Define Key presses
alt.on("keyup", function (key:number) {

   // chat.pushLine(`>> T8INT >> KEY: ${key}` );

   // skip when in noclip
   if( alt.Player.local.getMeta('NoClipStatus')){ return; };

   // Interactions when menu is open
   if ( Date.now() > spam ){
      if ( WASDMENU.loaded && WASDMENU.focused ){
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
      if ( key == 69 && WASDMENU.loaded && !WASDMENU.focused ) {

         WASDMENU.updateIntResult( emtpyResult );

   // Player not in Vehicle
         if(!(alt.Player.local.vehicle)) {
            let result = Raycast.line(1.5, 2.5);
            if ( result ){
               WASDMENU.updateIntResult( result, INTOBJ.isNearGasPump());
               let distance = alt.Player.local.pos.distanceTo( natives.getEntityCoords( result.entity, true ));
               // alt.log('>> T8INT >> RAYCAST >> entityHash: ' + result.entityHash + ' entityType: ' + result.entityType + ' entityID: ' + result.entityID + ' distance: ' + distance + ' nearestObject: ' + INTOBJ.nearestObject.entityHash );

   // Player targets Person
               if ( result.isHit && result.entityType === 1 && distance < 1.5 ){
                  alt.emitServer('T8INT:CLI>SRV:requestMenu', 1, WASDMENU.intResult );
                  return;
               };
   // Player targets Vehicle
               if ( result.isHit && result.entityType === 2 && distance < 4.5 ){
                  alt.emitServer('T8INT:CLI>SRV:requestMenu', 2, WASDMENU.intResult );
                  return;
               };
   // Player targets Object
               if ( result.isHit && result.entityType === 3 && distance < 1.8 && INTOBJ.nearestObject.entityHash === 0 ){
                  alt.emitServer('T8INT:CLI>SRV:requestMenu', 3, WASDMENU.intResult );
                  return;
               };
            };

   // Interactable Object is near player
            if ( INTOBJ.nearestObject.entityHash > 0 ){
               let _temp = INTOBJ.nearestObject.entity;
               alt.log( _temp );
               WASDMENU.updateIntResult( INTOBJ.nearestObject );
               alt.emitServer('T8INT:CLI>SRV:requestMenu', 3, WASDMENU.intResult );
               return; 
            };
         };
         return;
      };
      
   // Player is in vehicle
   // [ X ] >>
      if ( key == 88 ) {
         WASDMENU.updateIntResult( emtpyResult );

         if ( alt.Player.local.vehicle && WASDMENU.loaded && !WASDMENU.focused ) {
            WASDMENU.updateIntResult( INTOBJ.nearestObject );
            alt.emitServer('T8INT:CLI>SRV:requestMenu', 99, WASDMENU.intResult );
            return;
         };
      };
      
   // menu with no object kontext
   // [ F3 ] >>
      if ( key == 114 ) {   
         WASDMENU.updateIntResult( emtpyResult );
         
         if ( WASDMENU.loaded && !WASDMENU.focused ) {
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
alt.onServer('T8INT:SRV>CLI:initINTOBJ', ( JSONhashes, JSONgaspumps ) => {

   let arrayHashes = JSON.parse(JSONhashes);
   let arrayGasPumps = JSON.parse(JSONgaspumps);
   alt.log(`>> T8INT:SRV>CLI:initINTOBJ >> arrayHashes.length: ${arrayHashes.length}`);
   alt.log(`>> T8INT:SRV>CLI:initINTOBJ >> arrayGasPumps.length: ${arrayGasPumps.length}`);
   // INTOBJ.init([ 1805980844, 3232156621, 3666247552, 3079285877, 3059710928, 2533307946, 525667351 ]);
   INTOBJ.init( arrayHashes, arrayGasPumps );
});



alt.setInterval( function(){ INTOBJ.findNearest(); }, 500 );
alt.everyTick( function(){ INTOBJ.draw3D(); });
INTER.init();


// Ask server to send 3D interaction hashes
alt.emitServer('T8INT:CLI>SRV:requestINTOBJ');

