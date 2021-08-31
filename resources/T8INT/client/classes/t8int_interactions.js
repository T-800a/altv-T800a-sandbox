import alt from 'alt-client';
import natives from 'natives';
import { playAnimation } from './utility';
export class T8INT_Interactions {
    init() {
        alt.onServer('T8INT:CLI:interaction', (call, data)=>{
            this[call](data);
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
    animation(data) {
        alt.log('animation >> ' + data);
        playAnimation(data[0], data[1], data[2], data[3]);
    }
}
