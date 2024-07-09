
//@ts-ignore
const app = Vue.createApp({
   data() {
      return {
         vehicles: [],
         vehicle: null,
         vehAddons: [],
         vehAddon: null,
         vehMaker: [],
         vehClasses: [],
         vehClass: null,
         filter: 0,
      }
   },

   watch: {

      vehicle() { 
         alt.emit('T8VEH:client:exec', 'spawnVehicle', this.vehicle );
      },

   },

/*
   methods: {
      inc_drawable() { this.clothing.drawable++ },
      dec_drawable() { this.clothing.drawable-- },
   },
*/

   computed: {
      filteredClasses() {
         if( this.filter == 0 ){ return this.vehClasses };
         if( this.filter == 1 ){ return this.vehMaker.filter( x => x.addon == this.vehAddon ); };
      },

      filteredVehicles() {
         if( this.filter == 0 ){ return this.vehicles.filter( x => ( x.class == this.vehClass || this.vehClass == "ALL" ) && x.addon == this.vehAddon ); };
         if( this.filter == 1 ){ return this.vehicles.filter( x => ( x.maker == this.vehClass || this.vehClass == "ALL" ) && x.addon == this.vehAddon ); };
      }
   }

});


const T8VEH_view = app.mount('#app');
let T8VEH_firstload = false;

const vehJSON     = 'http://assets/SHARED/JSON/vehicles.json';
const vehAdsJSON  = 'http://assets/SHARED/JSON/vehicleAddons.json';
const vehClsJSON  = 'http://assets/SHARED/JSON/vehicleClasses.json';
const vehMakJSON  = 'http://assets/SHARED/JSON/vehicleMaker.json';



document.addEventListener("DOMContentLoaded", function() {
   if ('alt' in window) {

      alt.on( 'T8VEH:webview:exec', T8VEH_handleFromClient );
      alt.emit( 'T8VEH:client:exec', 'loaded' );

      fetch( vehAdsJSON )
      .then(response => response.json())
      .then(data => { T8VEH_view.vehAddons = data; });
      
      fetch( vehClsJSON )
      .then(response => response.json())
      .then(data => { T8VEH_view.vehClasses = data; });
      
      fetch( vehMakJSON )
      .then(response => response.json())
      .then(data => { T8VEH_view.vehMaker = data; });
      
      fetch( vehJSON )
      .then(response => response.json())
      .then(data => { T8VEH_view.vehicles = data; });

   };
});


function T8VEH_handleFromClient( task:string ) {
   if ( task == 'load_vehicle' ){


   };
};


function T8VEH_closeWebview(){
   alt.emit('T8VEH:client:exec', 'close');
};

