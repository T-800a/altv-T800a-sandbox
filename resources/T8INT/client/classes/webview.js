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
        this.webViewURL = 'http://resource/client/webview/index.html';
        this.webview = null;
        this.loaded = false;
        this.focused = false;
    }
}
