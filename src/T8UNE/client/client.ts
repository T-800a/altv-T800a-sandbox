import alt from 'alt-client';
import natives from 'natives';


var webview = null;

alt.onServer("T8UNE:client:createWindow", () => { T8UNE_startWebview(); });
alt.on("T8UNE:client:createWindow", () => { T8UNE_startWebview(); });


function T8UNE_startWebview(){
   if ( !webview && alt.Player.local.vehicle ){
      webview = new alt.WebView('http://resource/client/webview/index.html');
      webview.on('T8UNE:client:exec', T8UNE_handleFromWebview );
      webview.focus();
      alt.toggleGameControls(false);
      alt.showCursor(true);
   };
};


function T8UNE_handleFromWebview( task:string, data:string = "" ) {
   
   // chat.pushLine('>> T8UG >> handleFromWebview: ' + msg );

   if ( task == "close"  ){
      webview.unfocus();
      webview.destroy();
      webview = null;
      alt.toggleGameControls(true);
      alt.showCursor(false);
   };

   if ( task == "load_vehicle" && alt.Player.local.vehicle ){
      alt.emitServer( 'T8UNE:server:sendVehicle', alt.Player.local.vehicle.id );
   };

   if( task == "update_vehicle" && alt.Player.local.vehicle ){
      alt.emitServer( 'T8UNE:server:updateVehicle', alt.Player.local.vehicle.id, data );
   };

   alt.log(`>> T8UNE_handleFromWebview >> ${task} > ${data} `);
};

alt.onServer('T8UNE:client:sendVehicle', ( vehicleJSON, ) => {
   webview.emit('T8UNE:Webview:exec', 'load_vehicle', vehicleJSON );
   // alt.log(`>> T8UNE:client:sendVehicle >> ${vehicleJSON}`);
});