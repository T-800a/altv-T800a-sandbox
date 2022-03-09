import alt from 'alt-client';
import natives from 'natives';
import { playAnimation } from './utility';
function rotate(ax, ay, bx, by, angle) {
    var rad = Math.PI / 180 * angle, cos = Math.cos(rad), sin = Math.sin(rad), run = bx - ax, rise = by - ay, cx = cos * run + sin * rise + ax, cy = cos * rise - sin * run + ay;
    return {
        x: cx,
        y: cy
    };
}
export class Interactions {
    init() {
        alt.onServer('T8INT:CLI:interaction', (call, data, intResult)=>{
            this[call](data, intResult);
        });
    }
    sitzen_bank(data) {
        let dictArray = [
            [
                "timetable@ron@ig_5_p3",
                "ig_5_p3_base"
            ],
            [
                "timetable@reunited@ig_10",
                "base_amanda"
            ],
            [
                "timetable@ron@ig_3_couch",
                "base"
            ]
        ];
        let dictRandom = dictArray[Math.floor(Math.random() * dictArray.length)];
        if (data === "S") {
            playAnimation(dictRandom[0], dictRandom[1], 1, 300000);
            return;
        }
        if (data === "A") {
            natives.clearPedTasks(alt.Player.local.scriptID);
            return;
        }
    }
    animation([animDict, animName, animFlag, animDuration]) {
        alt.log('animation >> ' + [
            animDict,
            animName,
            animFlag,
            animDuration
        ]);
        playAnimation(animDict, animName, animFlag, animDuration);
    }
    sitzen(data, intResult) {
        if (this.sitting) return;
        let xoffset;
        let yoffset;
        let zoffset;
        let offset = {
            x: 0,
            y: 0,
            z: 0.5
        };
        switch(data){
            case "L":
                yoffset = 0.75;
                offset.y = 0.75;
                break;
            case "R":
                yoffset = -0.75;
                offset.y = -0.75;
                break;
            default:
                yoffset = 0;
        }
        switch(intResult.entityHash){
            case 4195466914:
                xoffset = 0.1;
                zoffset = 0.6;
                offset.x = 0.1;
                offset.z = 0.6;
                break;
            default:
                xoffset = 0;
                zoffset = 0.5;
        }
        this.currentObj = intResult.entity;
        natives.disableControlAction(1, 37, true);
        natives.placeObjectOnGroundProperly(this.currentObj);
        natives.freezeEntityPosition(this.currentObj, true);
        let pos = natives.getEntityCoords(this.currentObj, false);
        let dir = 180 + natives.getEntityHeading(this.currentObj);
        let rotatedOffset = rotate(0, 0, offset.x, offset.y, dir);
        alt.log(`>> sitzen >> radian >> 0: ${dir - 180} >> 180: ${dir}`);
        alt.log(`>> sitzen >> offset rotation >> ( ${offset.x} | ${offset.y} ) >> ( ${rotatedOffset.x} | ${rotatedOffset.y} )`);
        natives.taskStartScenarioAtPosition(alt.Player.local, "PROP_HUMAN_SEAT_BENCH", pos.x + rotatedOffset.x, pos.y + rotatedOffset.y, pos.z + offset.z, dir, 0, true, false);
        this.sitting = true;
    }
    aufstehen() {
        if (!this.sitting) return;
        natives.clearPedTasks(alt.Player.local);
        natives.freezeEntityPosition(this.currentObj, false);
        this.sitting = false;
        this.currentObj = null;
    }
    constructor(){
        this.sitting = false;
        this.currentObj = null;
    }
}
