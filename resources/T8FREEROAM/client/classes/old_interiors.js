import * as alt from "alt-client";
import * as natives from "natives";
//@ts-ignore
alt.loadDefaultIpls();
// CASINO
alt.requestIpl('vw_casino_garage');
alt.requestIpl('vw_casino_billboard');
alt.requestIpl('vw_casino_billboard_lod');
alt.requestIpl('vw_casino_main');
alt.requestIpl('vw_dlc_casino_door');
alt.requestIpl('vw_casino_door');
alt.requestIpl('hei_dlc_casino_door');
alt.requestIpl('hei_dlc_windows_casino');
alt.requestIpl('vw_casino_penthouse');
alt.requestIpl('hei_dlc_casino_aircon');
alt.requestIpl('vw_casino_carpark');
alt.requestIpl('bkr_bi_id1_23_door');
alt.on("connectionComplete", ()=>{
    let blip = natives.addBlipForCoord(5943.5679611650485, -6272.114833599767, 2); // a invisible blip to make the map clickable at the island
    natives.setBlipSprite(blip, 407);
    natives.setBlipScale(blip, 0);
    natives.setBlipAsShortRange(blip, false);
});
let nearIsland = false;
alt.everyTick(()=>{
    let distance = alt.Player.local.pos.distanceTo(new alt.Vector3(4840.571, -5174.425, 2.0));
    if (distance < 2000) {
        if (!nearIsland) {
            nearIsland = true;
            // natives.setIslandHopperEnabled('HeistIsland', true);
            natives.setScenarioGroupEnabled('Heist_Island_Peds', true);
            natives.setAudioFlag("PlayerOnDLCHeist4Island", true);
            natives.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", true, true);
            natives.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, true);
        }
    } else {
        if (nearIsland) {
            nearIsland = false;
            // natives.setIslandHopperEnabled('HeistIsland', false);
            natives.setScenarioGroupEnabled("Heist_Island_Peds", false);
            natives.setAudioFlag("PlayerOnDLCHeist4Island", false);
            natives.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", false, false);
            natives.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, false);
        }
    }
    if (nearIsland) {
        natives.setRadarAsExteriorThisFrame();
        natives.setRadarAsInteriorThisFrame(alt.hash("h4_fake_islandx"), 4700.0, -5145.0, 0, 0);
    }
});
