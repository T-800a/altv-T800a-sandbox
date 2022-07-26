import alt from 'alt-server';

export class T8WebViewServer {

   
   init( name:string = "T8UI" ){
      this.webviewName = name;
   };

  
   toast( player:any, title:string, text:string, timeout:number = 5, type:string = "dark" ){

      alt.emitClient( player, `${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type );
   };

   toastAll( title:string, text:string, timeout:number = 5, type:string = "dark" ){

      alt.emitAllClients( `${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type );
   };
};