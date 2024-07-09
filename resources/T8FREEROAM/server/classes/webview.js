function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import alt from 'alt-server';
export class T8WebViewServer {
    init(name) {
        if (name && typeof name === "string") {
            this.webviewName = name;
        }
    }
    toast(player, title, text, timeout = 5, type = "dark") {
        alt.emitClient(player, `${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type);
    }
    toastAll(title, text, timeout = 5, type = "dark") {
        alt.emitAllClients(`${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type);
    }
    constructor(){
        _define_property(this, "webviewName", "T8UI");
    }
}
