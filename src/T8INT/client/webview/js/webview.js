

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

const appToasts = Vue.createApp({
   methods: {
      add(params) {
         for (let key in this.defaults) {
            if (params[key] === undefined) {
               params[key] = this.defaults[key];
            }
         }
         params.created = Date.now();
         params.id = Math.random();
         params.expire = setTimeout(() => {this.remove(params.id);}, params.timeout * 1000);
         this.content.unshift(params);
      },

      remove(id) {
         this.content.splice(this.index(id), 1);
      },

      index(id) {
         for (let key in this.content) {
            if (id === this.content[key].id) {
               return key;
            }
         }
      },

      type(type) {
         switch (type) {
         case 'error':
            return 'is-danger';
         case 'success':
            return 'is-success';
         case 'info':
            return 'is-info';}
      }
   },

   data() {
      return {
         defaults: {
            title: 'undefined title',
            body: 'undefined body',
            timeout: 5,
         },
         content: [],
         a: { title: 'title', body: 'body', type: 'info', timeout: 5 }
      };
   },

   created() {
      this.add({ title: 'T8INT', body: 'Hello World, T8INT wurde geladen und die Toasts rollen rein', timeout: 10 });
   }
});


const toasts = appToasts.mount('#appToasts');

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

      alt.on('T8INT:CLI>CEF:toast', ( newTitle, newBody, newTimeout, newType ) => {
         toasts.add({ title: newTitle, type: newType, body: newBody, timeout: newTimeout });
      });
   
      alt.emit('T8INT:CEF>CLI:LOADED');
   };
});


