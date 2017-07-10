/**
 * --------------------------------------------------------------------------- *
 *
 * @Project: headless-chrome-test-selenium
 * @FileName: test-selenium-webdriver
 * @Dependence: --
 * @Description: --
 * @CreatedBy: liao.zhang
 * @CreateDate: 2017/7/9 18:29
 * @LastModifiedBy: liao.zhang
 * @LastModifiedDate: 2017/7/9 18:29
 *
 * --------------------------------------------------------------------------- *
 */


// require('chromedriver')

const chromeDriver = require('selenium-webdriver/chrome');

const webdriver = require('selenium-webdriver'),
    By = webdriver.By;


const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
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
