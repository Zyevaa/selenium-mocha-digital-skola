const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Login Test - Saucedemo', function () {
  this.timeout(30000);
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('should login with valid credentials', async function () {
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    const currentUrl = await driver.getCurrentUrl();
    assert.ok(currentUrl.includes('inventory'));
  });
});
