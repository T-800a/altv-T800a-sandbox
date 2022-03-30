import alt from 'alt-client';
import natives from 'natives';
import { T8_webView } from './classes/webview';

const vehJSON        = '@SHARED/JSON/vehicles.json';
const vehClsJSON     = '@SHARED/JSON/vehicleClasses.json';
const vehSubClsJSON  = '@SHARED/JSON/vehicleSubClasses.json';

const CEF = new T8_webView();
CEF.init('T8VEH');

// let CEF = new T8_webView();

var webview = null;

alt.onServer("T8VEH:client:createWebView", () => { T8VEH_startWebview(); });
alt.on("T8VEH:client:createWebView", () => { T8VEH_startWebview(); });


function T8VEH_startWebview(){
   if ( !CEF.wv ){

      CEF.open();

      // webview = new alt.WebView('http://resource/client/webview/index.html');

      CEF.wv.on('T8VEH:client:exec', T8VEH_handleFromWebview );
   };
};


function T8VEH_handleFromWebview( task:string = "null", data:string = "null" ) {
   
   alt.log(`>> T8VEH_handleFromWebview >> ${task} > ${data} `);

   if ( task == "close"  ){
      CEF.close();
   };

   if ( task == "loaded"  ){
      if( alt.File.exists( vehJSON ) && alt.File.exists( vehClsJSON ) && alt.File.exists( vehSubClsJSON )) {
         let dataVehJSON = alt.File.read( vehJSON );
         let dataVehClsJSON = alt.File.read( vehClsJSON );
         let dataVehSubClsJSON = alt.File.read( vehSubClsJSON );

         CEF.wv.emit('T8VEH:webview:exec', 'load_vehicle', dataVehJSON, dataVehClsJSON, dataVehSubClsJSON );
         alt.log(`>> T8VEH_handleFromWebview >> ${task}`);
      };
   };


   if( task == "spawnVehicle" ){
      alt.emitServer( 'T8VEH:server:spawnVehicle', data );
   };
};


alt.onServer("T8VEH:client:vehicleSpawned", () => {
   alt.log(`>> T8VEH:client:vehicleSpawned`);
   alt.setTimeout(()=>{
      CEF.focus(); 
      alt.log(`>> T8VEH:client:vehicleSpawned >> setTimeout`);
   }, 500);
});