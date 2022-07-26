import alt from 'alt-client';
// this.webview.unfocus();
// this.webview.destroy();
// this.webview.focus();
export class T8WebView {
    init(name = "T8UI") {
        this.webviewName = name;
        this.webview = new alt.WebView(this.webViewURL);
        this.webview.on(`${this.webviewName}:CEF>CLI:LOADED`, ()=>{
            this.loaded = true;
            alt.emit(`${this.webviewName}:WEBVIEW:LOADED`);
        });
        // other resource wants to post to the webview
        alt.on(`${this.webviewName}:WEBVIEW:POST`, (emitter, data = '')=>{
            this.post(emitter, data);
        });
        // server sends a toast to the player
        alt.onServer(`${this.webviewName}:WEBVIEW:toast`, (title, text, timeout = 5, type = "dark")=>{
            this.toast(title, text, timeout, type);
        });
    }
    toast(title, text, timeout = 5, type = "dark") {
        if (this.loaded) {
            this.webview.emit(`${this.webviewName}:CLI>CEF:toast`, title, text, timeout, type);
        }
    }
    post(emitter, data = '') {
        this.webview.emit(`${this.webviewName}:CLI>CEF:${emitter}`, data);
    }
    constructor(){
        this.webview = null;
        this.loaded = false;
        this.focused = false;
        this.webviewName = "T8UI";
        this.webViewURL = 'http://resource/client/webview/index.html';
    }
}
