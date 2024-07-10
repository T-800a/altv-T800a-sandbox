// <reference types="@altv/types-client" />
// <reference types="@altv/types-natives" />
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
// <reference path="typings/altv-client.d.ts"/>
// <reference path="typings/natives.d.ts"/>
import * as alt from "alt-client";
import * as natives from "natives";
import { T8WebView } from './classes/webview.js';
import { initWorldObjectsAndDoors, loadDefaultIPLs } from './classes/world.js';
import { cayoTick } from './classes/worldCayo.js';
alt.everyTick(()=>{
    cayoTick();
});
let WEBVIEW = new T8WebView();
WEBVIEW.init("T8UI");
WEBVIEW.open();
alt.onServer("freeroam:spawned", ()=>{
    const PedID = alt.Player.local.scriptID;
    natives.setPedDefaultComponentVariation(PedID);
    natives.setPedConfigFlag(PedID, 35, false); // Disable Auto Helmet on a motorcycle 
    natives.setPedConfigFlag(PedID, 241, true); // Disable Stopping Engine
    natives.setPedConfigFlag(PedID, 429, true); // Disable Starting Engine
});
alt.onServer("freeroam:switchInOutPlayer", (in_switch, instant_switch, switch_type)=>{
    if (in_switch) {
        natives.switchToMultiSecondpart(alt.Player.local.scriptID);
    } else {
        natives.switchToMultiFirstpart(alt.Player.local.scriptID, instant_switch, switch_type);
    }
});
alt.on('connectionComplete', ()=>{
    startupPlayV();
});
alt.on('spawned', ()=>{
    setTimeout(()=>{
        WEBVIEW.toast('Hallo Welt!', `Hallo ${alt.Player.local.name}!`);
    }, 1000);
});
function startupPlayV() {
    return _startupPlayV.apply(this, arguments);
}
function _startupPlayV() {
    _startupPlayV = _async_to_generator(function*() {
        try {
            alt.Utils.waitFor(()=>alt.Player.local.isSpawned, 999999999); // wait until localplayers is spawned
            yield loadDefaultIPLs();
            yield initWorldObjectsAndDoors();
        } catch (e) {
            alt.logError('Error while loading client side ' + e);
        }
    });
    return _startupPlayV.apply(this, arguments);
}
alt.onServer("freeroam:WEBVIEW:stop", ()=>{
    WEBVIEW.close();
});
alt.onServer("freeroam:WEBVIEW:start", ()=>{
    WEBVIEW.open();
});
