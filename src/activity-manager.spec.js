/* global jest */
/* eslint-disable import/first */

jest.mock('./activity-registry', () => jest.fn());

import ActivityManager from './activity-manager';
// import ActivityRegistryMock from './activity-registry';

/* :: import { Activity } from './interfaces/activity'; */
/* :: import { Intent } from './interfaces/intent'; */

describe('The ActivityManager', () => {
  const exampleActivityKind = 'TEST_ACTIVITY';

  beforeEach(() => {
    ActivityManager.resetInstance();
  });

  it('can be constructed', () => {
    const activityManager = new ActivityManager();
    expect(activityManager).toBeDefined();
  });

  it('is a singleton', () => {
    const activityManager1 = new ActivityManager();
    const activityManager2 = new ActivityManager();
    expect(activityManager1).toBe(activityManager2);
  });

  describe('Activity starting', () => {
    it('works for registered Actvities', () => {
      const activityManager = new ActivityManager();

      // let activity = ActivityRegistryMock.findBy(intent);

      const activity/* : Activity */ = { kind: exampleActivityKind };
      activityManager.startActivity(activity);
    });
  });
});
