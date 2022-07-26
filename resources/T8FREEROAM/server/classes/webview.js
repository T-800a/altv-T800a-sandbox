import alt from 'alt-server';
export class T8WebViewServer {
    init(name = "T8UI") {
        this.webviewName = name;
    }
    toast(player, title, text, timeout = 5, type = "dark") {
        alt.emitClient(player, `${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type);
    }
    toastAll(title, text, timeout = 5, type = "dark") {
        alt.emitAllClients(`${this.webviewName}:WEBVIEW:toast`, title, text, timeout, type);
    }
}
