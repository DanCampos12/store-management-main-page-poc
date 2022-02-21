export class UserCounterControlers {
  'user:added': string;
  'user:removed': string;

  constructor () {
    this['user:added'] = 'addUser'
    this['user:removed'] = 'removeUser'
  }
}
