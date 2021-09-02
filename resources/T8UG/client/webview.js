let counter = 1;
const app = Vue.createApp({
    data () {
        return {
            key: "",
            pos: {
                x: "0",
                y: "0",
                z: "0",
                r: "0",
                h: "0"
            },
            log: "",
            logTyp_selected: "none",
            logTyp_options: [
                {
                    value: 'none',
                    text: 'Select Log Type'
                },
                {
                    value: 'fuel_spots',
                    text: 'Tank Punkte'
                },
                {
                    value: 'bg_spots',
                    text: 'Bus-Garbage Punkte'
                }
            ]
        };
    }
});
const view = app.mount('#app');
document.addEventListener("DOMContentLoaded", function() {
    if ('alt' in window) {
        alt.on('T8UG:CEF:sendToWebview', (msg)=>{
            let _log = view.log;
            let _newlog = msg + '\n';
            view.pos = {
                x: msg[0],
                y: msg[1],
                z: msg[2],
                r: msg[3],
                h: msg[4]
            };
            if (view.logTyp_selected == "fuel_spots") {
                _newlog = `(NULL, xxIDxx, ${view.pos.x}, ${view.pos.y}, ${view.pos.z}), \n`;
            }
            if (view.logTyp_selected == "bg_spots") {
                _newlog = `(NULL, xxIDxx, ${counter}, ${view.pos.x}, ${view.pos.y}, ${view.pos.z}), \n`;
                counter++;
            }
            view.log = _log + _newlog;
        });
        alt.on('T8UG:CEF:updateKey', (msg)=>{
            view.key = msg;
        });
    }
});
function closeWebview() {
    alt.emit('T8UG:client:exec', 'close');
}
function clearLog() {
    view.log = '';
    counter = 1;
}
