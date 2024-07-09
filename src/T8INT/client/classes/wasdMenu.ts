import alt, { WebView } from 'alt-client';
import natives from 'natives';
//@ts-ignore
import * as chat from "alt:chat";


export class WASDmenu {
   
   private webViewURL:string        = 'http://resource/client/webview/index.html';
   private n:number                 = 0;
   private item:number              = 0;
   private menu_obj:any             = {};
   
   // public webview:any               = null;
   public loaded:boolean            = false;
   public focused:boolean           = false;
   
   public intResult:InteractionObj  = { 
      isHit: false, 
      pos: { x:0, y:0, z:0 }, 
      rot: { x:0, y:0, z:0 }, 
      entity: null, 
      entityType: 0, 
      entityHash: 0, 
      entityID: 0, 
      nearGasPump: false,
   };

   init(){
      /*
      this.webview = new alt.WebView(this.webViewURL);
      this.webview.on('T8INT:CEF>CLI:LOADED', () => {
         this.loaded = true;
      });
      */
      alt.on('T8INT:WEBVIEW:LOADED', () => { this.loaded = true; });
   };

   open( dataJSON:string ){   
      if (!this.focused && this.loaded) {

         alt.toggleGameControls(false);
         // alt.showCursor(true);
         this.menu_obj = JSON.parse(dataJSON);
         this.focused = true;
         this.n = 0;
         this.item = 0;
         let webvieItems = [];
         this.menu_obj.items.forEach( element => {
            webvieItems.push({
               id:     `item-${this.n}`,
               name:    element.name,
               img:     element.img,
            });
            this.n++;
         });

         let webviewJSON = {
            titel: this.menu_obj.titel,
            items: webvieItems,
         };

         this.webview('JSON', JSON.stringify(webviewJSON));
         this.webview('focus', `item-${this.item}`);
      };
   };

   close(){
      if (this.focused && this.loaded){ 
         this.webview('clear');
         alt.toggleGameControls(true);
         // alt.showCursor(false);
         this.focused = false; 
         this.n = 0;
         this.item = 0;
         this.menu_obj = {};
         };
   };

   webview( emitter:string, data:string = '' ){
      alt.emit('T8INT:WEBVIEW:POST', emitter, data );
   };

   exec(){
      
      let name       = this.menu_obj.items[this.item].name;
      let img        = this.menu_obj.items[this.item].img;
      let keepOpen   = this.menu_obj.items[this.item].keepOpen;
      let target     = this.menu_obj.items[this.item].target;
      let call       = this.menu_obj.items[this.item].call;
      let data       = this.menu_obj.items[this.item].data;

      if ( target == "T8INT" ){
         alt.emitServer( "T8INT:CLI>SRV:interaction", call, data, this.intResult );
      };

      if ( target == "submenu" ){
         this.close();
         alt.emitServer('T8INT:CLI>SRV:requestMenu', 9999, data );
      };

      if ( target == "client" ){
         alt.emit( call, data, this.intResult );
      };

      if ( target == "server" ){
         alt.emitServer( call, data, this.intResult );
      };

      if( !keepOpen ){
         this.close();
      };
   };

   LineUp(){
      if ( this.focused && this.loaded ) {
         this.item--;
         this.ChangeLine();
      };
   };

   LineDown(){
      if ( this.focused && this.loaded ) {
         this.item++;
         this.ChangeLine();
      };
   };

   ChangeLine(){
      if ( this.item < 0 ) {  this.item = 0; };
      if ( this.item > this.n - 1 ) {  this.item = this.n - 1; };
      this.webview('focus', `item-${this.item}` );
   };

   updateIntResult( newResult:InteractionObj, nearGasPump:boolean = false ){
      this.intResult = newResult;
      this.intResult.nearGasPump = nearGasPump;
   };
};