import alt from 'alt-client';
export class WASDmenu {
    updateIntResult(newResult, nearGasPump = false) {
        this.intResult = newResult;
        this.intResult.nearGasPump = nearGasPump;
    }
    close() {
        if (this.focused) {
            alt.toggleGameControls(true);
            // alt.showCursor(false);
            // this.webview.unfocus();
            this.webview.destroy();
            this.webview = null;
            this.focused = false;
            this.n = 0;
            this.item = 0;
            this.menu_obj = {
            };
        }
    }
    exec() {
        let name = this.menu_obj.items[this.item].name;
        let img = this.menu_obj.items[this.item].img;
        let keepOpen = this.menu_obj.items[this.item].keepOpen;
        let target = this.menu_obj.items[this.item].target;
        let call = this.menu_obj.items[this.item].call;
        let data = this.menu_obj.items[this.item].data;
        if (target == "T8INT") {
            alt.emitServer("T8INT:CLI>SRV:interaction", call, data, this.intResult);
        }
        if (target == "submenu") {
            this.close();
            alt.emitServer('T8INT:CLI>SRV:requestMenu', 9999, data);
        }
        if (target == "client") {
            alt.emit(call, data, this.intResult);
        }
        if (target == "server") {
            alt.emitServer(call, data, this.intResult);
        }
        if (!keepOpen) {
            this.close();
        }
    }
    open(dataJSON) {
        if (!this.focused) {
            alt.toggleGameControls(false);
            // alt.showCursor(true);
            // this.webview.focus();
            this.menu_obj = JSON.parse(dataJSON);
            this.focused = true;
            this.n = 0;
            this.item = 0;
            let webvieItems = [];
            this.menu_obj.items.forEach((element)=>{
                webvieItems.push({
                    id: `item-${this.n}`,
                    name: element.name,
                    img: element.img
                });
                this.n++;
            });
            let webviewJSON = {
                titel: this.menu_obj.titel,
                items: webvieItems
            };
            this.webview = new alt.WebView('http://resource/client/html/index.html');
            this.webview.on('T8INT:CEF>CLI:LOADED', ()=>{
                alt.setTimeout(()=>{
                    this.webview.emit('T8INT:CLI>CEF:JSON', JSON.stringify(webviewJSON));
                    this.webview.emit('T8INT:CLI>CEF:focus', `item-${this.item}`);
                }, 250);
            });
        }
    }
    LineUp() {
        if (this.webview) {
            this.item--;
            this.ChangeLine();
        }
    }
    LineDown() {
        if (this.webview) {
            this.item++;
            this.ChangeLine();
        }
    }
    ChangeLine() {
        if (this.item < 0) {
            this.item = 0;
        }
        if (this.item > this.n - 1) {
            this.item = this.n - 1;
        }
        this.webview.emit('T8INT:CLI>CEF:focus', `item-${this.item}`);
    }
    constructor(){
        this.focused = false;
        this.n = 0;
        this.item = 0;
        this.menu_obj = {
        };
        this.webview = null;
        this.intResult = {
            isHit: false,
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            entity: null,
            entityType: 0,
            entityHash: 0,
            entityID: 0,
            nearGasPump: false
        };
    }
}
