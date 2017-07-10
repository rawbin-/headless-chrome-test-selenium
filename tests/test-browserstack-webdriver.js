/**
 * --------------------------------------------------------------------------- *
 *
 * @Project: headless-chrome-test-selenium
 * @FileName: test-browserstack-webdriver
 * @Dependence: --
 * @Description: --
 * @CreatedBy: liao.zhang
 * @CreateDate: 2017/7/9 21:40
 * @LastModifiedBy: liao.zhang
 * @LastModifiedDate: 2017/7/9 21:40
 *
 * --------------------------------------------------------------------------- *
 */

const chromeDriver = require('selenium-webdriver/chrome');

const webdriver = require('browserstack-webdriver'),
    By = webdriver.By;

// Input capabilities
const capabilities = {
    'browserName' : 'chrome',
    'browserstack.user' : BROWSERSTACK_USERNAME,
    'browserstack.key' : BROWSERSTACK_KEY
}

const driver = new webdriver.Builder()
    .usingServer('http://hub.browserstack.com/wd/hub')
    .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
    .withCapabilities(capabilities)
    .build();


driver.get('https://www.baidu.com').then((args) => {
    // 获取百度搜索按钮的 文本
    driver.findElement(By.id('su')).then((element) => {
        return element.getAttribute('value')
    }).then((btnName) => {
        console.log(btnName)
    });

    // 获取百度首页 title
    driver.getTitle().then((title) => {
        console.log(title);
    });
});


driver.quit();