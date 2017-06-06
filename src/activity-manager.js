let instance/* : ?ActivityManager */ = null;
/* :: import { Activity } from './interfaces/activity'; */

export default class ActivityManager {

  static resetInstance() {
    instance = null;
  }

  constructor() {
    if (!instance) {
      instance = this;
    }

    this.activities = [];

    return instance;
  }

  startActivity(activity/* : Activity */) {
    this.activities.push(activity);
  }
}
