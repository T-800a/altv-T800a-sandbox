// <reference types="@altv/types-client" />
// <reference types="@altv/types-natives" />
"use strict";
// <reference path="typings/altv-client.d.ts"/>
// <reference path="typings/natives.d.ts"/>
import * as alt from "alt-client";
import * as game from "natives";
import * as chat from "chat";
import { T8WebView } from './classes/webview';

let WEBVIEW = new T8WebView();
WEBVIEW.init( "T8UI" );

alt.onServer("freeroam:spawned", ()=>{
    game.setPedDefaultComponentVariation(alt.Player.local.scriptID);
});

alt.onServer("freeroam:switchInOutPlayer", (in_switch, instant_switch, switch_type)=>{
    if (in_switch) {
        game.switchInPlayer(alt.Player.local.scriptID);
    } else {
        game.switchOutPlayer(alt.Player.local.scriptID, instant_switch, switch_type);
    }
});
