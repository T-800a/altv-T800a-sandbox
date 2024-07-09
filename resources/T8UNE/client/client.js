import alt from 'alt-client';
import natives from 'natives';
var webview = null;
var vehiclePower = 1;
var vehhicleTorque = 1;
alt.onServer("T8UNE:client:createWindow", ()=>{
    T8UNE_startWebview();
});
alt.on("T8UNE:client:createWindow", ()=>{
    T8UNE_startWebview();
});
function T8UNE_startWebview() {
    if (!webview && alt.Player.local.vehicle) {
        webview = new alt.WebView('http://resource/client/webview/index.html');
        webview.on('T8UNE:client:exec', T8UNE_handleFromWebview);
        webview.focus();
        alt.toggleGameControls(false);
        alt.showCursor(true);
    }
}
function T8UNE_handleFromWebview(task, data) {
    if (task == "close") {
        webview.unfocus();
        webview.destroy();
        webview = null;
        alt.toggleGameControls(true);
        alt.showCursor(false);
    }
    if (task == "load_vehicle" && alt.Player.local.vehicle) {
        alt.emitServer('T8UNE:server:sendVehicle', alt.Player.local.vehicle.id);
    }
    if (task == "update_vehicle" && alt.Player.local.vehicle) {
        alt.emitServer('T8UNE:server:updateVehicle', alt.Player.local.vehicle.id, data);
    }
    if (task == "update_tune" && alt.Player.local.vehicle) {
        var tune = JSON.parse(data);
        vehiclePower = tune.power;
        vehhicleTorque = tune.torque;
    }
    if (task == "update_oldlivery" && alt.Player.local.vehicle) {
        natives.setVehicleLivery(alt.Player.local.vehicle.scriptID, data);
    }
// alt.log(`>> T8UNE_handleFromWebview >> ${task} > ${data} `);
}
alt.onServer('T8UNE:client:sendVehicle', (vehicleJSON)=>{
    webview.emit('T8UNE:Webview:exec', 'load_vehicle', vehicleJSON, vehiclePower, vehhicleTorque);
// alt.log(`>> T8UNE:client:sendVehicle >> ${vehicleJSON}`);
});
alt.everyTick(()=>{
    if (alt.Player.local.vehicle) {
        natives.setVehicleCheatPowerIncrease(alt.Player.local.vehicle.scriptID, vehhicleTorque);
        natives.modifyVehicleTopSpeed(alt.Player.local.vehicle.scriptID, vehiclePower);
    }
});
