function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import alt from 'alt-client';
export class T8WebView {
    init(name = 'T8UI') {
        this.webviewName = name;
        // other resource wants to post to the webview
        alt.on(`${this.webviewName}:WEBVIEW:POST`, (emitter, data = '')=>this.post(emitter, data));
        // server sends a toast to the player
        alt.onServer(`${this.webviewName}:WEBVIEW:toast`, (title, text, timeout = 5, type = 'dark')=>this.toast(title, text, timeout, type));
    }
    open() {
        this.webview = new alt.WebView(this.webViewURL);
        this.webview.on(`${this.webviewName}:CLIENT:LOADED`, ()=>{
            this.loaded = true;
            alt.emit(`${this.webviewName}:WEBVIEW:LOADED`);
        });
    }
    close() {
        this.webview.destroy();
        this.loaded = false;
    }
    toast(title, text, timeout = 5, type = 'dark') {
        if (this.loaded) {
            this.webview.emit(`${this.webviewName}:CEF:toast`, title, text, timeout, type);
        }
    }
    post(emitter, data = '') {
        if (this.loaded) {
            this.webview.emit(`${this.webviewName}:CEF:${emitter}`, data);
        }
    }
    constructor(){
        _define_property(this, "webview", null);
        _define_property(this, "loaded", false);
        _define_property(this, "focused", false);
        _define_property(this, "webviewName", 'T8UI');
        _define_property(this, "webViewURL", 'http://resource/client/webview/index.html');
    }
}
