let vehArray = [];
let vehClsArray = [];
let vehSubClsArray = [];
//@ts-ignore
const app = Vue.createApp({
    data () {
        return {
            vehicles: vehArray,
            vehicle: null,
            vehClasses: vehClsArray,
            vehClass: null,
            vehSubClasses: vehSubClsArray,
            vehSubClass: null
        };
    },
    watch: {
        vehicle () {
            alt.emit('T8VEH:client:exec', 'spawnVehicle', this.vehicle);
        }
    },
    /*
   methods: {
      inc_drawable() { this.clothing.drawable++ },
      dec_drawable() { this.clothing.drawable-- },
   },
*/ computed: {
        filteredVehicles () {
            return this.vehicles.filter((x)=>(x.subClass == this.vehSubClass || this.vehSubClass == "ALL") && x.class == this.vehClass
            );
        },
        filteredSubClasses () {
            return this.vehSubClasses.filter((x)=>x.class == this.vehClass
            );
        }
    }
});
const T8VEH_view = app.mount('#app');
let T8VEH_firstload = false;
document.addEventListener("DOMContentLoaded", function() {
    if ('alt' in window) {
        alt.on('T8VEH:webview:exec', T8VEH_handleFromClient);
        alt.emit('T8VEH:client:exec', 'loaded');
    }
});
function T8VEH_handleFromClient(task, dataVehJSON, dataVehClsJSON, dataVehSubClsJSON) {
    if (task == 'load_vehicle') {
        T8VEH_view.vehicles = JSON.parse(dataVehJSON);
        T8VEH_view.vehClasses = JSON.parse(dataVehClsJSON);
        T8VEH_view.vehSubClasses = JSON.parse(dataVehSubClsJSON);
    }
}
function T8VEH_closeWebview() {
    alt.emit('T8VEH:client:exec', 'close');
}
