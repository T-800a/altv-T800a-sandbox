/// <reference types="@altv/types-server" />
import alt from 'alt-server';
//@ts-ignore
import * as chat from "alt:chat";


chat.registerCmd("cloth", (player ) => {
   alt.emitClient( player, "T8CLT:client:createWindow" );
});


alt.onClient('T8CLT:server:updateCloth', ( player, dataJSON:string ) => {
/*
   clothing: {
      component:  0,
      drawable:   0,
      texture:    0,
   }
*/
   let clothData = JSON.parse(dataJSON);

   if ( clothData.component < 0 ){ clothData.component = null; };
   if ( clothData.drawable < 0 ){ clothData.drawable = null; };
   if ( clothData.texture < 0 ){ clothData.texture = null; };

   player.setClothes( clothData.component, clothData.drawable, clothData.texture );
   
   // alt.log(`>> T8CLT:server:updateClothes >> ${dataJSON}`);
});

alt.onClient('T8CLT:server:updateProps', ( player, dataJSON:string ) => {
   /*
      props: {
         component:  0,
         drawable:   0,
         texture:    0,
      }
   */
   let propsData = JSON.parse(dataJSON);

   if ( propsData.component < 0 ){ propsData.component = null; };
   if ( propsData.texture < 0 ){ propsData.texture = null; };

   if ( propsData.drawable < 0 ){   player.clearProp(propsData.component); };
   if ( propsData.drawable >= 0 ){  player.setProp( propsData.component, propsData.drawable, propsData.texture ); };

   // alt.log(`>> T8CLT:server:updateProps >> ${dataJSON}`);
});

alt.onClient('T8CLT:server:updateTatos', ( player, dataJSON:string ) => {
   /*
      tato: {
         drawable:   0,
         texture:    0,
         drawable_old:   0,
         texture_old:    0,
      }
   */
   let tato = JSON.parse(dataJSON);

   player.removeDecoration( tato.drawable_old, tato.texture_old );

   player.addDecoration( tato.drawable, tato.texture );

   if( tato.texture != tato.texture_old ){
      

  //    alt.log(`>> T8CLT:server:updateProps >> ${dataJSON}`);
   }

   
});