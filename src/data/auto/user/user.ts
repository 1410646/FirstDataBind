import {observable, computed, autorun} from 'mobx';

namespace data{
  export class User{
    @observable private userid
  }
}