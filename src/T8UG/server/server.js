/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import * as chat from "chat";

chat.registerCmd("t8ug", (player ) => {
   alt.emitClient( player, "T8UG:client:createWindow" );
 });