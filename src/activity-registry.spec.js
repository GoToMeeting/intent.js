import ActivityRegistry from './activity-registry';
/* :: import { Activity } from './interfaces/activity'; */

describe('The ActivityRegistry', () => {
  const exampleActivityKind = 'TEST_ACTIVITY';

  beforeEach(() => {
    ActivityRegistry.resetInstance();
  });

  it('can be constructed', () => {
    const activityRegistry = new ActivityRegistry();
    expect(activityRegistry).toBeDefined();
  });

  it('is a singleton', () => {
    const activityRegistry1 = new ActivityRegistry();
    const activityRegistry2 = new ActivityRegistry();
    expect(activityRegistry1).toBe(activityRegistry2);
  });

  describe('registers', () => {
    it('an Activity successfully', () => {
      const activityRegistry = new ActivityRegistry();

      expect(activityRegistry.activities.length).toBe(0);

      const activity/* : Activity */ = { kind: 'TEST_ACTIVITY' };
      activityRegistry.registerActivity(activity);

      expect(activityRegistry.activities.length).toBe(1);
    });

    it('an null Activity unsuccessfully', () => {
      const activityRegistry = new ActivityRegistry();

      let error/* : ?Error */ = null;
      try {
        activityRegistry.registerActivity(null);
      } catch (ex) {
        error = ex;
      }

      expect(error instanceof Error).toBe(true);
    });

    it('an Activity without kind unsuccessfully', () => {
      const activityRegistry = new ActivityRegistry();
      const activity/* : Activity */ = { kind: '' };

      let error/* : ?Error */ = null;
      try {
        activityRegistry.registerActivity(activity);
      } catch (ex/* : Error */) {
        error = ex;
      }

      expect(error).toBeDefined();
      expect(error instanceof Error).toBe(true);
      expect(activityRegistry.activities.length).toBe(0);
      expect(Object.keys(activityRegistry.activitiesByKind).length).toBe(0);
    });
  });

  describe('by kind it finds', () => {
    it('activities successfully', () => {
      const activityRegistry = new ActivityRegistry();

      const activity/* : Activity */ = { kind: exampleActivityKind };
      activityRegistry.registerActivity(activity);

      const actualActivities = activityRegistry.findByKind(exampleActivityKind);

      expect(actualActivities).toBeDefined();
      expect(actualActivities.length).toBe(1);
      expect(actualActivities[0]).toBe(activity);
    });

    it('no activity with empty kind argument', () => {
      const activityRegistry = new ActivityRegistry();

      const actualActivities = activityRegistry.findByKind(exampleActivityKind);

      expect(actualActivities).toBeDefined();
      expect(actualActivities.length).toBe(0);
    });
  });

  describe('by mime type it find', () => {
    it('activities successfully', () => {
      const activityRegistry = new ActivityRegistry();

      const mimeType = 'text/plain';

      const activity/* : Activity */ = { kind: exampleActivityKind, mimeType };
      activityRegistry.registerActivity(activity);

      const actualActivities = activityRegistry.findByMimeType(mimeType);

      expect(actualActivities.length).toBe(1);
    });

    it('no activity with empty mime type argument', () => {
      const activityRegistry = new ActivityRegistry();

      const actualActivities = activityRegistry.findByMimeType(exampleActivityKind);

      expect(actualActivities).toBeDefined();
      expect(actualActivities.length).toBe(0);
    });
  });
});
