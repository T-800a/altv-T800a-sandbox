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
// this.webview.unfocus();
// this.webview.destroy();
// this.webview.focus();
export class T8IntWebView {
    init() {
        this.webview = new alt.WebView(this.webViewURL);
        this.webview.on('T8INT:CEF>CLI:LOADED', ()=>{
            this.loaded = true;
            alt.emit('T8INT:WEBVIEW:LOADED');
        });
        // other resource wants to post to the webviwe
        alt.on('T8INT:WEBVIEW:POST', (emitter, data = '')=>{
            this.post(emitter, data);
        });
    }
    post(emitter, data = '') {
        this.webview.emit(`T8INT:CLI>CEF:${emitter}`, data);
    }
    constructor(){
        _define_property(this, "webViewURL", 'http://resource/client/webview/index.html');
        _define_property(this, "webview", null);
        _define_property(this, "loaded", false);
        _define_property(this, "focused", false);
    }
}
