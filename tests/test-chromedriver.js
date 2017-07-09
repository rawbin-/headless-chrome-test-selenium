/**
 * --------------------------------------------------------------------------- *
 *
 * @Project: headless-chrome-test-selenium
 * @FileName: test-chromedriver
 * @Dependence: --
 * @Description: --
 * @CreatedBy: liao.zhang
 * @CreateDate: 2017/7/9 17:32
 * @LastModifiedBy: liao.zhang
 * @LastModifiedDate: 2017/7/9 17:32
 *
 * --------------------------------------------------------------------------- *
 */

const chromedriver = require('chromedriver');

const args = [
    // optional arguments
];
chromedriver.start(args);
// run your tests
chromedriver.get('http://www.baidu.com');

chromedriver.stop();