import * as alt from 'alt-client';
import * as natives from 'natives';
export function GetDirectionFromRotation(rotation) {
    var z = rotation.z * (Math.PI / 180);
    var x = rotation.x * (Math.PI / 180);
    var num = Math.abs(Math.cos(x));
    return new alt.Vector3(-Math.sin(z) * num, Math.cos(z) * num, Math.sin(x));
}
let DEBUG = false;
let rcInterval = null;
export class Raycast {
    static line(radius, distance) {
        if (DEBUG) {
            if (rcInterval != null) alt.clearInterval(rcInterval);
        }
        let position = natives.getPedBoneCoords(alt.Player.local.scriptID, 31086, 0.5, 0, 0);
        let direction = GetDirectionFromRotation(natives.getGameplayCamRot(2));
        let farAway = new alt.Vector3(direction.x * distance + position.x, direction.y * distance + position.y, direction.z * distance + position.z);
        let ray = natives.startShapeTestCapsule(position.x, position.y, position.z, farAway.x, farAway.y, farAway.z, radius, -1, alt.Player.local.scriptID, 7);
        if (DEBUG) {
            rcInterval = alt.setInterval(()=>{
                natives.drawLine(position.x, position.y, position.z, farAway.x, farAway.y, farAway.z, 255, 0, 0, 255);
            }, 0);
        }
        return this.result(ray);
    }
    static result(ray) {
        let result = natives.getShapeTestResult(ray, undefined, undefined, undefined, undefined);
        let hitEntity = result[4];
        if (!natives.isEntityAPed(hitEntity) && !natives.isEntityAnObject(hitEntity) && !natives.isEntityAVehicle(hitEntity)) return undefined;
        // { isHit: false, pos: { x:0, y:0, z:0 }, rot: { x:0, y:0, z:0 }, entity: null, entityType: 0, entityHash: 0, entityID: 0 };
        let _id = 0;
        if (alt.Entity.getByScriptID(hitEntity)) {
            _id = alt.Entity.getByScriptID(hitEntity).id;
        }
        return {
            isHit: result[1],
            pos: new alt.Vector3(result[2].x, result[2].y, result[2].z),
            rot: natives.getEntityRotation(hitEntity, 2),
            entity: hitEntity,
            entityType: natives.getEntityType(hitEntity),
            entityHash: natives.getEntityModel(hitEntity),
            entityID: _id
        };
    }
}
Raycast.player = alt.Player.local;
export function playAnimation(animDict, animName, animFlag, animDuration) {
    if (animDict == undefined || animName == undefined || animFlag == undefined || animDuration == undefined) return;
    natives.requestAnimDict(animDict);
    let interval = alt.setInterval(()=>{
        if (natives.hasAnimDictLoaded(animDict)) {
            alt.clearInterval(interval);
            natives.taskPlayAnim(alt.Player.local.scriptID, animDict, animName, 8, 1, animDuration, animFlag, 1, false, false, false);
        }
    }, 0);
}
