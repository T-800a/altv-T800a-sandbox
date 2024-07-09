// <reference types="@altv/types-client" />
// <reference types="@altv/types-natives" />
"use strict";
// <reference path="typings/altv-client.d.ts"/>
// <reference path="typings/natives.d.ts"/>
import * as alt from "alt-client";
import * as natives from "natives";
//@ts-ignore
import * as chat from "alt:chat";
import { T8WebView } from './classes/webview.js';

import { initWorldObjectsAndDoors, loadDefaultIPLs } from './classes/world.js';
import { cayoTick } from './classes/worldCayo.js';

alt.everyTick(() => {
    cayoTick();
});

let WEBVIEW = new T8WebView();
WEBVIEW.init( "T8UI" );
WEBVIEW.open();

alt.onServer("freeroam:spawned", ()=>{
    
    const PedID = alt.Player.local.scriptID;
    natives.setPedDefaultComponentVariation(PedID);
    natives.setPedConfigFlag( PedID, 35, false );     // Disable Auto Helmet on a motorcycle 
    natives.setPedConfigFlag( PedID, 241, true );     // Disable Stopping Engine
    natives.setPedConfigFlag( PedID, 429, true );     // Disable Starting Engine
});

alt.onServer("freeroam:switchInOutPlayer", (in_switch, instant_switch, switch_type)=>{
    if (in_switch) {
        natives.switchToMultiSecondpart(alt.Player.local.scriptID);
    } else {
        natives.switchToMultiFirstpart(alt.Player.local.scriptID, instant_switch, switch_type);
    }
});

alt.on('connectionComplete', startupPlayV);

async function startupPlayV() {
  try {
    alt.Utils.waitFor(() => alt.Player.local.isSpawned, 999999999); // wait until localplayers is spawned
    await loadDefaultIPLs(); 
    await initWorldObjectsAndDoors(); 
  } catch (e) {
    alt.logError('Error while loading client side ' + e);
  }
}


alt.onServer("freeroam:WEBVIEW:stop",   () => { WEBVIEW.close(); });
alt.onServer("freeroam:WEBVIEW:start",  () => { WEBVIEW.open(); });




