/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import * as chat from "chat";
chat.registerCmd("cloth", (player)=>{
    alt.emitClient(player, "T8CLT:client:createWindow");
});
alt.onClient('T8CLT:server:updateCloth', (player, dataJSON)=>{
    /*
   clothing: {
      component:  0,
      drawable:   0,
      texture:    0,
   }
*/ let clothData = JSON.parse(dataJSON);
    if (clothData.component < 0) {
        clothData.component = null;
    }
    if (clothData.drawable < 0) {
        clothData.drawable = null;
    }
    if (clothData.texture < 0) {
        clothData.texture = null;
    }
    player.setClothes(clothData.component, clothData.drawable, clothData.texture);
    alt.log(`>> T8CLT:server:updateClothes >> ${dataJSON}`);
});
alt.onClient('T8CLT:server:updateProps', (player, dataJSON)=>{
    /*
      props: {
         component:  0,
         drawable:   0,
         texture:    0,
      }
   */ let propsData = JSON.parse(dataJSON);
    if (propsData.component < 0) {
        propsData.component = null;
    }
    if (propsData.texture < 0) {
        propsData.texture = null;
    }
    if (propsData.drawable < 0) {
        player.clearProp(propsData.component);
    }
    if (propsData.drawable >= 0) {
        player.setProp(propsData.component, propsData.drawable, propsData.texture);
    }
    alt.log(`>> T8CLT:server:updateProps >> ${dataJSON}`);
});
