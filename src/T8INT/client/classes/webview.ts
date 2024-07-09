import alt from 'alt-client';
import natives from 'natives';
//@ts-ignore
import * as chat from "alt:chat";

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
      alt.on('T8INT:WEBVIEW:POST', ( emitter:string, data:string = '' ) => { this.post( emitter, data ); });
   };

   post( emitter:string, data:string = '' ){
      this.webview.emit( `T8INT:CLI>CEF:${emitter}`, data );
   };
};