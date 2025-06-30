const { Builder } = require('selenium-webdriver');
const LoginPage = require('../page/login.page.js');
const fs = require('fs');
const assert = require('assert');

describe('Visual Test - Homepage', function() {
  this.timeout(30000);
  let driver, page;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    page = new LoginPage(driver);
  });
  after(async () => { await driver.quit(); });

  it('should capture login page screenshot', async () => {
    await page.open();
    const img = await driver.takeScreenshot();
    const filepath = './screenshot/login.png';
    fs.writeFileSync(filepath, img, 'base64');
    assert.ok(fs.existsSync(filepath), 'Screenshot not found!');
  });
});
