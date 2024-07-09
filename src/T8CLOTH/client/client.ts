import alt from 'alt-client';
import natives from 'natives';

import { createPedEditCamera, destroyPedEditCamera, setFov, setZPos } from './classes/camera.js';
import { T8_webView } from './classes/webview.js';


// let WEBVIEW = new T8_webView();

var webview = null;

alt.onServer("T8CLT:client:createWindow", () => { T8CLT_startWebview(); });
alt.on("T8CLT:client:createWindow", () => { T8CLT_startWebview(); });


function T8CLT_startWebview(){
   if ( !webview && !alt.Player.local.vehicle ){
      webview = new alt.WebView('http://resource/client/webview/index.html');
      webview.on('T8CLT:client:exec', T8CLT_handleFromWebview );
      webview.focus();
      alt.toggleGameControls(false);
      alt.showCursor(true);


      createPedEditCamera();
      setFov(50);
      setZPos(-0.1);
      natives.freezeEntityPosition(alt.Player.local.scriptID, true);

//      alt.setConfigFlag( DisableIdleCamera, true );
   };
};


function T8CLT_handleFromWebview( task:string, data:string = "" ) {
   
   // chat.pushLine('>> T8UG >> handleFromWebview: ' + msg );

   if ( task == "close"  ){
      webview.unfocus();
      webview.destroy();
      webview = null;
      alt.toggleGameControls(true);
      alt.showCursor(false);

      natives.freezeEntityPosition(alt.Player.local.scriptID, false);
      destroyPedEditCamera();
   };

   if( task == "update_cloth" ){
      alt.emitServer( 'T8CLT:server:updateCloth', data );
   };

   if( task == "update_props" ){
      alt.emitServer( 'T8CLT:server:updateProps', data );
   };

   if( task == "update_tatos" ){
      alt.emitServer( 'T8CLT:server:updateTatos', data );
   };

   alt.log(`>> T8CLT_handleFromWebview >> ${task} > ${data} `);
};

// Disable idle camera
let idle = alt.setInterval(() => {
   natives.invalidateIdleCam(); // Disable player idle camera
   //@ts-ignore
   // natives._0x9E4CFFF989258472(); // Disable vehicle idle camera
}, 20000); // Idle camera activated after 30 seconds