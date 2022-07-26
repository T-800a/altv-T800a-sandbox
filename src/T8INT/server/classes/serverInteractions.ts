import alt from 'alt-server';
import * as chat from "chat";



export class ServerInteractions {

   constructor( private useToast:boolean = false ){};

   public intObjArray:[any?];
   public gasPumpArray:[any?];

   init( allObjArray:any ){

      this.intObjArray = [];
      this.gasPumpArray = [];
   
      for ( let _key in allObjArray ) {
         let _ele = allObjArray[_key];
         let _ran = ( "range" in _ele ) ? _ele["range"] : 1;
         if ( "INTOBJ" in _ele && _ele["INTOBJ"]){ this.intObjArray.push([ _key, _ran ]); };
         if ( "gaspump" in _ele && _ele["gaspump"]){ this.gasPumpArray.push([ _key, _ran ]); };
      };

      // 
      alt.onClient('T8INT:CLI>SRV:interaction', ( player, call, data, intResult:InteractionObj ) => {

         alt.log(`T8INT >> ${player.name} >> interaction >> call: ${call} >> data: ${data} >> intResult: ${JSON.stringify(intResult)}`);
         this[call]( player, call, data, intResult );

      });
   };

   notifyPlayer( player, title:string, text:string, type:string = "dark", timeout:number = 5 ){
      if ( this.useToast ){
         alt.emitClient(player, 'T8UI:WEBVIEW:toast', title, text, timeout, type );
      } else {
         chat.send( player, `${title} : ${text}` );
      };
   };

   checkForFlag( menuObj:any, testFlags:any, flagState:boolean = false ){
   /** Check if menu entry requires flag/flags to be shown to player, if not entry will not be passed
     * @param menuObj      : Object of the menu
     * @param testFlags    : A) String of the Flag
     * @param testFlags    : B) Array: [[ 'flag', flagState ], e.g: [ 'admin', true ]]
     * @param flagState    : Boolean if Flag is aktive (only used if testFlags is string/single flag)
     * @returns            : Object of the handled menu 
     **/
   
      // bin zu dumm um das ander hinzubekommen (clon ohne refernz)
      let _menuTemp = JSON.stringify( menuObj );
      let _menu:any = JSON.parse( _menuTemp );
      let _newItems = [];

      for ( let _key in _menu.items ){
         if ( 'flags' in _menu.items[_key] ){ 
            if( typeof testFlags === 'string' ){
               if ( _menu.items[_key].flags.includes( testFlags )) {
                  if ( flagState ){ _newItems.push( _menu.items[_key] ); };
               };
            } else {
               let _flagFound = [false,false];
               for ( let _i in testFlags){
                  if ( _menu.items[_key].flags.includes( testFlags[_i][0] )) { _flagFound = [true, testFlags[_i][1]]; };
               };
               if ( _flagFound[0] && _flagFound[1] ){ _newItems.push( _menu.items[_key] ); };
            };
         } else {
            _newItems.push( _menu.items[_key] );
         };
      };
      _menu.items = _newItems;
      return _menu;
};

   sitzen_bank( player, call, data, intResult ){
      alt.emitClient( player, 'T8INT:CLI:interaction', call, data, intResult );
   };

   sitzen( player, call, data, intResult ){
      alt.emitClient( player, 'T8INT:CLI:interaction', call, data, intResult );
   };

   aufstehen( player, call ){
      alt.emitClient( player, 'T8INT:CLI:interaction', call );
   };

   muell_durchsuchen( player ){
      let array = [ "eine abgebissene Wurst", "einen halbfaulen Apfel", "eine Bananen Schale", "eine Käsige Socke", "ne Mark", "nix", "nix", "nix", "nix", "nix" ];
      let random = array[Math.floor(Math.random()*array.length)];
      alt.emitClient( player, 'T8INT:CLI:interaction', 'animation', [ 'gestures@f@standing@casual', 'gesture_point', 1, 700 ]);

      var type = ( random == "nix" )? "dark" : "success";
      this.notifyPlayer( player, 'Information', `Du hast im Müll ${random} gefunden.`, type );
   };

   automat( player, call, data ){
      alt.emitClient( player, 'T8INT:CLI:interaction', 'animation', [ 'gestures@f@standing@casual', 'gesture_point', 1, 700 ]);
      this.notifyPlayer( player, 'Information', `Du hast eine(n) ${data} gekauft.`);
   };

   teleport( player ){
      const spawns = [
         { x: -695.1956176757812, y: 83.94725036621094, z: 55.85205078125 },
         { x: -527.6835327148438, y: -678.7252807617188, z: 33.6607666015625 },
         { x: 200.6637420654297, y: -935.2879028320312, z: 30.6783447265625 },
         { x: 897.7318725585938, y: -1054.6944580078125, z: 32.818359375 },
         { x: 363.1516418457031, y: -2123.156005859375, z: 16.052734375 },
         { x: -265.3582458496094, y: -1898.0703125, z: 27.7464599609375 },
      ];
      let random = spawns[Math.floor(Math.random()*spawns.length)];
      player.pos = random;
   };

   vehicle_repair( player, call, data, intResult:InteractionObj ){
      let veh = alt.Vehicle.getByID( intResult.entityID );
      veh.repair();
      this.notifyPlayer( player, `Admin Action`, `Dein Fahrzeug [${veh.numberPlateText}] wurde repariert.`, `warning` );
   };


   vehicle_quicktune( player, call, data, intResult:InteractionObj ){
      let veh = alt.Vehicle.getByID( intResult.entityID );
      veh.repair();
      veh.numberPlateText = "Tuuuned"
      veh.modKit = 1;
      veh.setMod( 11, veh.getModsCount( 11 )); // Engine
      veh.setMod( 12, veh.getModsCount( 12 )); // Brakes
      veh.setMod( 13, veh.getModsCount( 13 )); // Transmission
      veh.setMod( 15, veh.getModsCount( 15 )); // Suspension
      veh.setMod( 18, 1 ); // Turbo
      veh.setMod( 22, 1 ); // Xenon
      veh.primaryColor = 50; // Metallic Racing Green
      veh.secondaryColor = 1; // Metallic Graphite Black 
      veh.pearlColor = 51; // Metallic Sea Green  
      veh.wheelColor = 158; // Pure Gold 

      this.notifyPlayer( player, `Admin Action`, `Dein Fahrzeug [${veh.numberPlateText}] wurde getuned.`, `danger` );
   };
};