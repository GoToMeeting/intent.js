const jasmineReporters = require('jasmine-reporters');

const reporter = new jasmineReporters.JUnitXmlReporter({
  consolidateAll: true,
  savePath: process.env.JUNIT_REPORT_PATH || 'test-results',
  modifyReportFileName: (generatedFileName, suite) => process.env.JUNIT_REPORT_NAME || `${generatedFileName.replace('.xml', '')}.junit.xml`
});

/* globals jasmine */
jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(reporter);
