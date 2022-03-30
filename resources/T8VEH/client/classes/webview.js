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
        this.wv.on(`${this.tag}:client:webview_loaded`, ()=>{
            this.loaded = true;
        });
        this.wv.focus();
        alt.toggleGameControls(false);
        alt.showCursor(true);
    }
    close() {
        this.wv.unfocus();
        this.wv.destroy();
        this.wv = null;
        alt.toggleGameControls(true);
        alt.showCursor(false);
    }
    focus() {
        this.wv.focus();
    }
    post(emitter, data = '') {
        this.wv.emit(`${this.tag}:webview:${emitter}`, data);
    }
    handle() {
    }
    constructor(){
        this.webviewURL = 'http://resource/client/webview/index.html';
        this.wv = null;
        this.loaded = false;
        this.focused = false;
        this.tag = "T8WV";
    }
}
