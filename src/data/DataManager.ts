/**
 * 数据管理器
 */
namespace data {
  export let main:Main;


  export class DataManager extends egret.EventDispatcher {


    /**
     * 数据源
     */
    public static init(){
      main = new Main();
    }
  }
} 
