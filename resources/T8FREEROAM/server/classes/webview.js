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
        this.webviewName = "T8UI";
    }
}
