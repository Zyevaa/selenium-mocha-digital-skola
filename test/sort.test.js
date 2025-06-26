const {Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');

describe('Product Sort Test - Saucedemo', function () {
    this.timeout(30000);
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();
        await driver.wait(until.urlContains('inventory'), 5000);
    });

    after(async function () {
        await driver.quit();
    });

    it('should sort products from Z to A', async function () {
        const sortDropdown = await driver.findElement(By.className('product_sort_container'));
        await sortDropdown.sendKeys('Name (Z to A)');

        // Ambil nama produk pertama
        const firstItem = await driver.findElement(By.className('inventory_item_name')).getText();
        console.log("Produk pertama setelah sort Z to A:", firstItem);

        // Validasi nama produk pertama (misalnya produk Z paling atas)
        assert.strictEqual(firstItem, 'Test.allTheThings() T-Shirt (Red)');
    });
});
