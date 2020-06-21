exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login.createpost.spec.js'],
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
          args: ['--ignore-certificate-errors']
         
      }
    }
  };

  