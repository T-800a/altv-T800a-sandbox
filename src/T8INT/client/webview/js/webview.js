

const app = Vue.createApp({
   data() {
      return {
         data :{
/*            
            titel: "DEBUG MENU",
            items: [
               {
                  name: "T8UG",
                  img: "img/idee.png",
                  keepOpen: false,
                  target: "client",
                  call: "T8UG:client:createWindow",
                  data: ""
               },
               {
                  name: "Löschen",
                  img: "img/loschen.png",
                  keepOpen: false,
                  target: "none",
                  call: "",
                  data: ""
               },
               {
                  name: "Flieger",
                  img: "img/senden.png",
                  keepOpen: false,
                  target: "",
                  call: "",
                  data: ""
               },
            ]
*/          
         }
      }
   }
});

const menu = app.mount('#app');

// ---------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
   if ('alt' in window) {

      /*
      alt.on('T8INT:CLI>CEF:newMenu', msg => {
         document.getElementById('menu').innerHTML = msg;
      });
      */

      alt.on('T8INT:CLI>CEF:clear', () => {
         menu.data = {};
      });

      alt.on('T8INT:CLI>CEF:JSON', JSONdata => {
         menu.data = JSON.parse(JSONdata);
      });

      alt.on('T8INT:CLI>CEF:focus', id => {
         let elements = document.querySelectorAll('.item');
         for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active');
         }
         document.getElementById(id).classList.add('active');
      });
   
      alt.emit('T8INT:CEF>CLI:LOADED');
   };
});


