namespace FDBdata {
  /**
   * 用户账号信息
   */
  export class Account {
    //用户id
    @observable public accountId: number;

    //用户名
    @observable public accountName: string;
  }
}