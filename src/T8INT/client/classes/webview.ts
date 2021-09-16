import alt from 'alt-client';
import natives from 'natives';
import * as chat from "chat";

// this.webview.unfocus();
// this.webview.destroy();
// this.webview.focus();

export class T8IntWebView {
   
   private webViewURL:string        = 'http://resource/client/webview/index.html';

   public webview:any               = null;
   public loaded:boolean            = false;
   public focused:boolean           = false;
   
   init(){
      this.webview = new alt.WebView(this.webViewURL);
      this.webview.on('T8INT:CEF>CLI:LOADED', () => {
         this.loaded = true;
         alt.emit('T8INT:WEBVIEW:LOADED');
      });

      // other resource wants to post to the webviwe
      alt.on('T8INT:WEBVIEW:POST', ( emitter:string, data:string = '' ) => { this.webview.emit(emitter, data ); });

      // server sends a toast to the player
      alt.onServer('T8INT:SRV>CLI:toast', ( title, text, timeout, type ) => { this.toast( title, text, timeout, type ); });
   };

   toast( title:string, text:string, timeout:number = 5, type:string = "none"  ){
      if ( this.loaded ){ this.webview.emit('T8INT:CLI>CEF:toast', title, text, timeout, type ); };
   };   
};