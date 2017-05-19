/* :: import { Activity } from './interfaces/activity'; */

let instance/* : ?ActivityRegistry */ = null;

export default class ActivityRegistry {
  activities/* : Activity[] */ = [];
  activitiesByKind/* : { [kind : string]: Activity[] } */ = {};
  activitiesByMimeType/* : { [mimeType : string]: Activity[] } */ = {};

  static resetInstance() {
    instance = null;
  }

  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  registerActivityByKind(activity/* : Activity */) {
    if (!activity) {
      throw new Error('[ActivityRegistry] Undefined Activity');
    }

    if (!activity.kind) {
      throw new Error('[ActivityRegistry] Activity without required field: kind', activity);
    }

    if (!this.activitiesByKind[activity.kind]) {
      this.activitiesByKind[activity.kind] = [];
    }

    this.activitiesByKind[activity.kind].push(activity);
  }

  registerActivityByMimeType(activity/* : Activity */) {
    if (!activity.mimeType) {
      return;
    }

    if (!this.activitiesByMimeType[activity.mimeType]) {
      this.activitiesByMimeType[activity.mimeType] = [];
    }

    this.activitiesByMimeType[activity.mimeType].push(activity);
  }

  registerActivity(activity/* : Activity */) {
    this.registerActivityByKind(activity);
    this.registerActivityByMimeType(activity);

    this.activities.push(activity);
  }

  findByKind(activityKind/* : string */) /* : Activity[] */ {
    return this.activitiesByKind[activityKind] || [];
  }

  findByMimeType(mimeType/* : string */) /* : Activity[] */ {
    return this.activitiesByMimeType[mimeType] || [];
  }
}
