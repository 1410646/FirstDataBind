
/**
 * 游戏最基础的管理器
 */
class GameManager {
  constructor() {
    this.init();
  }

  private init() {
    //子模块的初始化
  }

  private initSubSystem(){
    //网络模块
    Net.instance;
  }

  private static _ins: GameManager;
  public static get instance() {
    if (!GameManager._ins) {
      GameManager._ins = new GameManager();
    }
    return GameManager._ins;
  }
}