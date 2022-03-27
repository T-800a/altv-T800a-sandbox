let clothComp = [
   { id: 11, name: "Tops" },
   { id:  8, name: "Undershirts" },
   { id:  4, name: "Legs" },
   { id:  6, name: "Shoes" },

   { id:  1, name: "Masks" },
   { id:  5, name: "Bagpacks" },
   { id:  9, name: "Body Armor" },
   { id:  7, name: "Accessories" },

   { id:  3, name: "Torsos" },
   { id:  2, name: "Hair Styles" },
   { id:  0, name: "Head" },
   { id: 10, name: "Decals" },
];

let propComp = [
   { id:  0, name: "Hats" },
   { id:  1, name: "Glasses" },
   { id:  2, name: "Ears" },
   { id:  6, name: "Watches" },
   { id:  7, name: "Bracelets" }
];


//@ts-ignore
const app = Vue.createApp({
   data() {
      return {
         clothArray: clothComp,
         propsArray: propComp,

         clothing: {
            component:  0,
            drawable:   0,
            texture:    0,
         },

         props: {
            component:  0,
            drawable:   0,
            texture:    0,
         },

         watch_draw:    0,
         watch_text:    0,
         watch_prop_draw:    0,
         watch_prop_text:    0,

         isOpen: {
            cloth:      false,
            prop:       false,
            clothCon:   true,
            propCon:    false,
         },

         selected: {
            cloth:      " ... ",
            prop:       " ... ",
         },
      }
   },

   watch: {
      clothing: {
         handler(val){
            this.watch_draw = this.clothing.drawable;
            this.watch_text = this.clothing.texture;
         },
         deep: true
      },

      props: {
         handler(val){
            this.watch_prop_draw = this.props.drawable;
            this.watch_prop_text = this.props.texture;
         },
         deep: true
      },

      watch_draw() { 
         this.watch_text = 0;
         this.clothing.texture = 0;
         T8CLT_applyCloth();
      },
      watch_text() { T8CLT_applyCloth(); },

      watch_prop_draw() { 
         this.watch_prop_text = 0;
         this.props.texture = 0;
         T8CLT_applyProp();
      },
      watch_prop_text() { T8CLT_applyProp(); }
   },


   methods: {
      inc_drawable() { this.clothing.drawable++ },
      dec_drawable() { this.clothing.drawable-- },
      inc_texture() { this.clothing.texture++ },
      dec_texture() { this.clothing.texture-- },

      inc_prop_drawable() { this.props.drawable++ },
      dec_prop_drawable() { this.props.drawable-- },
      inc_prop_texture() { this.props.texture++ },
      dec_prop_texture() { this.props.texture-- },
   },
/*
   computed: {
      selectedId() {
         return this.selected ? this.selected.id : null
      }
   }
*/
});


const T8CLT_view = app.mount('#app');

let T8CLT_firstload = false;

document.addEventListener("DOMContentLoaded", function() {
   if ('alt' in window) {
      alt.on('T8CLT:webview:exec', T8CLT_handleFromClient );
      alt.emit('T8CLT:client:exec', 'load_vehicle');
      
   };
});

function T8CLT_closeWebview(){
   alt.emit('T8CLT:client:exec', 'close');
};

function T8CLT_handleFromClient( task:string, dataJSON ) {
   if ( task == 'load_vehicle' ){

   };
};

function T8CLT_applyCloth(){
   let dataJSON = JSON.stringify(T8CLT_view.clothing);
   alt.emit('T8CLT:client:exec', 'update_cloth', dataJSON );
};

function T8CLT_applyProp(){
   let dataJSON = JSON.stringify(T8CLT_view.props);
   alt.emit('T8CLT:client:exec', 'update_props', dataJSON );
};

