import Intent from './intent';

describe('The Intent', () => {
  it('exists', () => {
    expect(Intent).toBeDefined();
  });

  it('can be constructed', () => {
    const intent = new Intent();
    expect(intent).toBeDefined();
  });

  it('can set a name', () => {
    const expectedName = 'TEST_INTENT';
    const intent = new Intent(expectedName);
    expect(intent.name).toBe(expectedName);
  });
});
