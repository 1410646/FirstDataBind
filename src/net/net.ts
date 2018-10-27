
/**
 * 网络基础
 */
class Net {
  constructor() {
    let ws = this._webSocket = new egret.WebSocket();
    ws.type = egret.WebSocket.TYPE_STRING;
    ws.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onMessage, this);
    ws.addEventListener(egret.ProgressEvent.CONNECT, this.onOpen, this);
    ws.addEventListener(egret.ProgressEvent.CLOSE, this.onClose, this);
    ws.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
    ws.connectByUrl(`ws://${NetConfig.serverAddr}:${NetConfig.serverPort}`);
  }

  private onMessage() {
    let msg = this._webSocket.readUTF();
    console.log(msg);
  }

  private onOpen() {
    console.log('连接成功');
  }

  private onClose() {
    console.log('关闭连接');
  }

  private onError() {
    console.error('连接错误');
  }

  public send(msg: string) {
    this._webSocket.writeUTF(msg);
  }



  private _webSocket: egret.WebSocket;

  private static _instance: Net;
  public static get instance() {
    if (!Net._instance) {
      Net._instance = new Net();
    }
    return this._instance;
  }
}
