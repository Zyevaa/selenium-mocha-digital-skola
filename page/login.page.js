const { By } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.driver.findElement(By.id('user-name')).sendKeys(username);
        await this.driver.findElement(By.id('password')).sendKeys(password);
        await this.driver.findElement(By.id('login-button')).click();
    }
}

module.exports = LoginPage;
