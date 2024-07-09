import alt from 'alt-client';
import natives from 'natives';
import { T8_webView } from './classes/webview.js';

/*
   const vehJSON     = '@SHARED/JSON/vehicles.json';
   const vehAdsJSON  = '@SHARED/JSON/vehicleAddons.json';
   const vehClsJSON  = '@SHARED/JSON/vehicleClasses.json';

   if( alt.File.exists( vehJSON ) && alt.File.exists( vehAdsJSON ) && alt.File.exists( vehClsJSON )) {
      let dataVehJSON = alt.File.read( vehJSON );
      let dataVehAdsJSON = alt.File.read( vehAdsJSON );
      let dataVehClsJSON = alt.File.read( vehClsJSON );
   };
*/

const CEF = new T8_webView();
CEF.init('T8VEH');

// let CEF = new T8_webView();

var timeout = 0;

alt.onServer("T8VEH:client:createWebView", () => { T8VEH_startWebview(); });
alt.on("T8VEH:client:createWebView", () => { T8VEH_startWebview(); });


function T8VEH_startWebview(){
   if ( !CEF.wv ){
      CEF.open();
      CEF.wv.on('T8VEH:client:exec', T8VEH_handleFromWebview );
      return;
   };

   if ( CEF.wv ){
      CEF.close();
      return;
   };
};

function T8VEH_handleFromWebview( task:string = "null", data:string = "null" ) {
   
   alt.log(`>> T8VEH_handleFromWebview >> ${task} > ${data} `);

   if ( task == "close"  ){
      CEF.close();
   };

   if ( task == "loaded"  ){
      CEF.wv.emit('T8VEH:webview:exec', 'load_vehicle' );
      alt.log(`>> T8VEH_handleFromWebview >> ${task}`);
   };

   if( task == "spawnVehicle" ){
      if( natives.isModelValid( alt.hash( data ))){
         if( timeout < Date.now()){
            alt.emitServer( 'T8VEH:server:spawnVehicle', data );
            timeout = Date.now() + 750;
         };
      } else {
         alt.log(`>> T8VEH_handleFromWebview >> spawnVehicle >> ${data} >> NOT A VALID MODEL`);
      };
   };
};


alt.onServer("T8VEH:client:vehicleSpawned", () => {
   alt.log(`>> T8VEH:client:vehicleSpawned`);
   alt.setTimeout(()=>{
      CEF.focus(); 
      alt.log(`>> T8VEH:client:vehicleSpawned >> setTimeout`);
   }, 500);
});