import alt from 'alt-server';

export class T8WebViewServer {

   public webviewName:string = "T8UI";
   
   init( name:string ){
      if ( name && typeof name === "string"){ this.webviewName = name; };
   };
  
   toast( player:alt.Player, title:string, text:string, timeout:number = 5, type:string = "dark" ){
      alt.emitClient( player, `${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type );
   };

   toastAll( title:string, text:string, timeout:number = 5, type:string = "dark" ){
      alt.emitAllClients( `${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type );
   };
};