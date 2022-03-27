import alt from 'alt-client';
// import natives from 'natives';
// import * as chat from "chat";
// this.wv.unfocus();
// this.wv.destroy();
// this.wv.focus();
/*

webview.unfocus();
webview.destroy();
webview = null;
webviewFocused = false;
lastPos = [];
if ( newped ){
   natives.deletePed( newped );
};
newped = null;
alt.toggleGameControls(true);
alt.showCursor(false);
};

*/ export class T8_webView {
    init(tag) {
        if (!tag || tag == this.tag) {
            alt.log(`>> ${tag} >> INIT >> no custom TAG set!`);
        } else {
            this.tag = tag;
        }
    }
    open() {
        this.wv = new alt.WebView(this.webviewURL);
        this.wv.on('T8INT:CEF>CLI:LOADED', ()=>{
            this.loaded = true;
            alt.emit('T8INT:WEBVIEW:LOADED');
        });
    }
    post(emitter, data = '') {
        this.wv.emit(`${this.tag}:CLI>CEF:${emitter}`, data);
    }
    constructor(){
        this.webviewURL = 'http://resource/client/webview/index.html';
        this.wv = null;
        this.loaded = false;
        this.focused = false;
        this.tag = "T8WV";
    }
}
