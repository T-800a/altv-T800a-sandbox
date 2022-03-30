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
function _asyncToGenerator(fn) {
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
import alt from 'alt-client';
import natives from 'natives';
// import * as chat from 'chat';
let T8ug_loaded = false;
let webview = null;
let webviewFocused = false;
let lastPos = [];
let newped = null;
function T8ug_handleFromWebview(msg) {
    // chat.pushLine('>> T8UG >> handleFromWebview: ' + msg );
    if (msg == "close") {
        webview.unfocus();
        webview.destroy();
        webview = null;
        webviewFocused = false;
        lastPos = [];
        if (newped) {
            natives.deletePed(newped);
        }
        newped = null;
        alt.toggleGameControls(true);
        alt.showCursor(false);
    }
}
function T8ug_buildArray() {
    let pos = alt.Player.local.pos;
    let rot = alt.Player.local.rot;
    let _x = Math.round((pos.x + Number.EPSILON) * 10000) / 10000;
    let _y = Math.round((pos.y + Number.EPSILON) * 10000) / 10000;
    let _z = Math.round((pos.z + Number.EPSILON) * 10000) / 10000 - 1;
    let _r = Math.round((rot.z + Number.EPSILON) * 10000) / 10000;
    let _h = Math.round((T8ug_RotToHead(_r) + Number.EPSILON) * 10000) / 10000;
    let _return = [
        _x,
        _y,
        _z,
        _r,
        _h
    ];
    lastPos = _return;
    return _return;
}
alt.on("keyup", function(key) {
    // chat.pushLine('>> T8UG >> KEY: ' + key );
    // Fenster wurde geöffnet
    if (webview) {
        webview.emit('T8UG:CEF:updateKey', key);
        // NUM KOMMA
        if (key == 110) {
            if (!webviewFocused) {
                alt.toggleGameControls(false);
                alt.showCursor(true);
                webview.focus();
                webviewFocused = true;
            } else {
                alt.toggleGameControls(true);
                alt.showCursor(false);
                webview.unfocus();
                webviewFocused = false;
            }
        }
        // NUM 0
        if (key === 96) {
            webview.emit('T8UG:CEF:sendToWebview', T8ug_buildArray());
        }
        // NUM 3
        if (key === 99) {
            if (!newped && T8ug_loaded && lastPos.length > 3) {
                newped = natives.createPed(2, T8ug_ModelHash, lastPos[0], lastPos[1], lastPos[2], lastPos[4], false, false);
            // natives.setEntityHeading( newped, RotToHead(lastPos[3]));
            // chat.pushLine( '>> T8UG >> PED: ' + newped );
            // chat.pushLine( '>> T8UG >> PED: ' + lastPos + ' >> R: ' + lastPos[3] + ' >> H: ' + RotToHead(lastPos[3]));
            } else {
                natives.deletePed(newped);
                newped = null;
            }
        }
    /*
   // Fenster wurde noch nicht geöffnet
   } else {
      // NUM KOMMA
      if ( key == 110 ) {
         webview = new alt.WebView('http://resource/client/index.html');
         webview.on('T8UG:sendToClient', t8ug_handleFromWebview );
      };
*/ }
});
alt.onServer("T8UG:client:createWindow", ()=>{
    if (!webview) {
        webview = new alt.WebView('http://resource/client/index.html');
        webview.on('T8UG:client:exec', T8ug_handleFromWebview);
    }
});
alt.on("T8UG:client:createWindow", ()=>{
    if (!webview) {
        webview = new alt.WebView('http://resource/client/index.html');
        webview.on('T8UG:client:exec', T8ug_handleFromWebview);
    }
});
// Umwandeln von rot-vector in heading 0-360°
function T8ug_RotToHead(rot) {
    let heading = 0;
    if (rot != 0) {
        if (rot > 0) {
            heading = 180 / 3 * rot;
        } else {
            heading = 360 - 180 / 3 * (rot * -1);
        }
    }
    return heading;
}
// Sachen um Test Ped Model zu laden
const T8ug_RequestModel = _asyncToGenerator(function*(modelHash, timeoutMs = 1000) {
    return new Promise((resolve, reject)=>{
        if (!natives.isModelValid(modelHash)) {
            reject(new Error(`Model does not exist: ${modelHash}`));
            return;
        }
        if (natives.hasModelLoaded(modelHash)) {
            resolve(true);
            return;
        }
        natives.requestModel(modelHash);
        const deadline = new Date().getTime() + timeoutMs;
        const inter = alt.setInterval(()=>{
            if (natives.hasModelLoaded(modelHash)) {
                alt.clearInterval(inter);
                resolve(true);
            } else if (deadline < new Date().getTime()) {
                alt.clearInterval(inter);
                const error = `Error: Async loading failed for model: ${modelHash}`;
                alt.log(error);
                reject(new Error(error)); // probably better resolve(false)
            }
        }, 10);
    });
});
const T8ug_ModelHash = alt.hash('a_m_m_farmer_01');
T8ug_RequestModel(T8ug_ModelHash);
T8ug_loaded = true; // chat.pushLine('<<< T8ub < TeaBug > Positions Logger geladen >>>');
