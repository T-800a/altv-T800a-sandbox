import alt from 'alt-client';
import natives from 'natives';
import * as chat from "chat";

export class InteractionObjects {

   private hashes:[] = [];
   private hashesGasPump:[] = [];

   // nearestObject = { pos: alt.Player.local.pos, rot: alt.Player.local.rot, hash: 0, obj: null };
   public nearestObject:InteractionObj = { isHit: false, pos: { x:0, y:0, z:0 }, rot: { x:0, y:0, z:0 }, entity: null, entityType: 0, entityHash: 0, entityID: 0 };

   init( arrayHashes:[], arrayGasPumps:[] ){

      this.hashes = arrayHashes;
      this.hashesGasPump = arrayGasPumps;
   };

   findNearest(){
      let _p = alt.Player.local.pos;
      let _r = alt.Player.local.rot;

      if ( alt.Player.local.vehicle ){
         this.nearestObject = { 
            isHit: true, 
            pos: _p, 
            rot: _r, 
            entity: null, 
            entityType: 99, 
            entityHash: 0, 
            entityID: alt.Player.local.vehicle.id 
         };
         return;
      };

      if ( this.hashes.length < 1 ){ 
         // this.nearestObject = { pos: _p, rot: _r, hash: 0, obj: null };
         this.nearestObject = { isHit: false, pos: { x:0, y:0, z:0 }, rot: { x:0, y:0, z:0 }, entity: null, entityType: 0, entityHash: 0, entityID: 0 };
         return; 
      };

      let _obj = null;
   // find closest object to the player
   //  _el ->  0: Hash, 1:range
      for (const _el of this.hashes ) { 
         let _newobj = natives.getClosestObjectOfType( _p.x, _p.y, _p.z, _el[1], parseInt(_el[0]), false, true, true );
         if ( !_obj && _newobj ){ _obj = _newobj; };
         if ( _obj && _newobj ){
            let _od = alt.Player.local.pos.distanceTo( natives.getEntityCoords( _obj, true) );
            let _nd = alt.Player.local.pos.distanceTo( natives.getEntityCoords( _newobj, true) );
            if ( _nd < _od ){ _obj = _newobj; };
         };
      };

   //build the "output"
      if ( _obj ){
         let _pos = natives.getEntityCoords( _obj, true );
         let _rot = natives.getEntityRotation( _obj, 2 );
         let _hash = natives.getEntityModel( _obj );
         let _type = natives.getEntityType( _obj );
         let _id = 0;

         // this.nearestObject = { pos: _pos, rot: _rot, hash: _hash, obj: _obj };
         this.nearestObject = { isHit: true, pos: _pos, rot: _rot, entity: _obj, entityType: _type, entityHash: _hash, entityID: _id };
      } else {
         // this.nearestObject = { pos: _p, rot: _r, hash: 0, obj: null };
         this.nearestObject = { isHit: false, pos: { x:0, y:0, z:0 }, rot: { x:0, y:0, z:0 }, entity: null, entityType: 0, entityHash: 0, entityID: 0 };
      };
   };

   isNearGasPump(){
      let _p = alt.Player.local.pos;
      if ( this.hashesGasPump.length < 1 ){ return false; };
      //  _el ->  0: Hash, 1:range
      for (const _el of this.hashesGasPump ) { 
         let _obj = natives.getClosestObjectOfType( _p.x, _p.y, _p.z, _el[1], parseInt(_el[0]), false, true, true );
         if ( _obj ){ return true; };
      };
      return false;
   };

   draw3D(){
      let fontType = 4;
      let object = this.nearestObject;

      if ( alt.Player.local.vehicle ){ return; };

      if ( object.entityHash > 0 ){
         natives.setDrawOrigin(
            object.pos.x,
            object.pos.y,
            object.pos.z + 1,
            0
         );
         natives.beginTextCommandDisplayText("STRING");
         natives.addTextComponentSubstringPlayerName(`interagieren`);
         natives.setTextFont(fontType);
         natives.setTextScale(1, 0.4);
         natives.setTextWrap(0.0, 1.0);
         natives.setTextCentre(true);
         natives.setTextColour(255, 255, 255, 175);
         // natives.setTextJustification(0);
         natives.endTextCommandDisplayText(0, 0, 0);
         natives.clearDrawOrigin();

         natives.setDrawOrigin(
            object.pos.x,
            object.pos.y,
            object.pos.z + 1.25,
            0
         );
         natives.beginTextCommandDisplayText("STRING");
         natives.addTextComponentSubstringPlayerName(`hash: ${object.entityHash}`);
         natives.setTextFont(fontType);
         natives.setTextScale(1, 0.4);
         natives.setTextWrap(0.0, 1.0);
         natives.setTextCentre(true);
         natives.setTextColour(255, 255, 255, 100);
         // natives.setTextJustification(0);
         natives.endTextCommandDisplayText(0, 0, 0);
         natives.clearDrawOrigin();
      };
   };
};
