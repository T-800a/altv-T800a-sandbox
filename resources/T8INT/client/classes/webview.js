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
            this.webview.emit(emitter, data);
        });
        // server sends a toast to the player
        alt.onServer('T8INT:SRV>CLI:toast', (title, text, timeout, type)=>{
            this.toast(title, text, timeout, type);
        });
    }
    toast(title, text, timeout = 5, type = "none") {
        if (this.loaded) {
            this.webview.emit('T8INT:CLI>CEF:toast', title, text, timeout, type);
        }
    }
    constructor(){
        this.webViewURL = 'http://resource/client/webview/index.html';
        this.webview = null;
        this.loaded = false;
        this.focused = false;
    }
}
