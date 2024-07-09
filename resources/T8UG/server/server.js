/// <reference types="@altv/types-server" />
import alt from 'alt-server';
//@ts-ignore
import * as chat from "alt:chat";
chat.registerCmd("t8ug", (player)=>{
    alt.emitClient(player, "T8UG:client:createWindow");
});
