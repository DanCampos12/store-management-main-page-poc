export class UserCounterControlers {
  'user:added': string;
  'user:removed': string;
  'user:counter': string;

  constructor () {
    this['user:added'] = 'addUser'
    this['user:removed'] = 'removeUser'
    this['user:counter'] = 'setUserCounter'
  }
}
