import alt from 'alt-client';
import natives from 'natives';
import * as chat from "chat";

// this.webview.unfocus();
// this.webview.destroy();
// this.webview.focus();

export class T8WebView {

   public webview:any               = null;
   public loaded:boolean            = false;
   public focused:boolean           = false;
   public webviewName:string        = "T8UI";
   private webViewURL:string        = 'http://resource/client/webview/index.html';

   init( name:string = "T8UI" ){
      this.webviewName = name;
      this.webview = new alt.WebView(this.webViewURL);
      this.webview.on(`${this.webviewName}:CEF>CLI:LOADED`, () => {
         this.loaded = true;
         alt.emit(`${this.webviewName}:WEBVIEW:LOADED`);
      });

      // other resource wants to post to the webview
      alt.on(`${this.webviewName}:WEBVIEW:POST`, ( emitter:string, data:string = '' ) => { this.post( emitter, data ); });

      // server sends a toast to the player
      alt.onServer(`${this.webviewName}:WEBVIEW:toast`, ( title:string, text:string, timeout:number = 5, type:string = "dark" ) => { this.toast( title, text, timeout, type ); });
   };

   toast( title:string, text:string, timeout:number = 5, type:string = "dark" ){
      if ( this.loaded ){ this.webview.emit(`${this.webviewName}:CLI>CEF:toast`, title, text, timeout, type ); };
   };

   post( emitter:string, data:string = '' ){
      this.webview.emit( `${this.webviewName}:CLI>CEF:${emitter}`, data );
   };
};