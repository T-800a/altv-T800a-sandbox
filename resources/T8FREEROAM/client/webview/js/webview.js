const webviewName = "T8UI";
const appToasts = Vue.createApp({
    methods: {
        add (params) {
            for(let key in this.defaults){
                if (params[key] === undefined) {
                    params[key] = this.defaults[key];
                }
            }
            params.created = Date.now();
            params.id = Math.random();
            params.expire = setTimeout(()=>{
                this.remove(params.id);
            }, params.timeout * 1000);
            this.content.unshift(params);
        },
        remove (id) {
            this.content.splice(this.index(id), 1);
        },
        index (id) {
            for(let key in this.content){
                if (id === this.content[key].id) {
                    return key;
                }
            }
        },
        type (type) {
            switch(type){
                case 'info':
                    return 'is-info';
                case 'success':
                    return 'is-success';
                case 'warning':
                    return 'is-warning';
                case 'danger':
                    return 'is-danger';
                case 'white':
                    return 'is-white';
                case 'black':
                    return 'is-black';
                case 'light':
                    return 'is-light';
                case 'dark':
                    return 'is-dark';
                case 'primary':
                    return 'is-primary';
            }
        }
    },
    data () {
        return {
            defaults: {
                title: 'undefined title',
                body: 'undefined body',
                timeout: 5
            },
            content: [],
            a: {
                title: 'title',
                body: 'body',
                type: 'info',
                timeout: 5
            }
        };
    },
    created () {
    // this.add({ title: `${webviewName}`, body: 'Hello World, T8WW wurde geladen und die Toasts rollen rein', timeout: 10 });
    }
});
const toasts = appToasts.mount('#appToasts');
// ---------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    if ('alt' in window) {
        alt.on(`${webviewName}:CEF:toast`, (newTitle, newBody, newTimeout, newType)=>{
            toasts.add({
                title: newTitle,
                type: newType,
                body: newBody,
                timeout: newTimeout
            });
        });
        alt.emit(`${webviewName}:CLIENT:LOADED`);
    }
});
