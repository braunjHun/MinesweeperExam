const { Application } = require('../src/dummy');

describe('Test dummy', () => {
  it('Unit Test framework initialization', () => {
    const application = new Application();
    expect(application.dummy()).toEqual(false);
  });
});