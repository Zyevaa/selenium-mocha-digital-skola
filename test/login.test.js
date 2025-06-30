const fs = require('fs');
const path = require('path');
const LoginPage = require('../page/login.page');
const {Builder} = require('selenium-webdriver');

describe('Login Test - Saucedemo (POM)', function () {
  this.timeout(30000);
  let driver;
  let loginPage;

  before(async function () {
    driver = await new Builder().forBrowser('firefox').build();
    loginPage = new LoginPage(driver);
  });

  after(async function () {
    await driver.quit();
  });

  it('should login with valid credentials', async function () {
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    // Tambah Visual Test - Ambil Screenshot
    const image = await driver.takeScreenshot();
    fs.writeFileSync(path.join('screenshot', 'login-success.png'), image, 'base64');
  });
});
