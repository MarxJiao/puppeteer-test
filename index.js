/**
 * @file puppeteer test
 * @author Marx
 */

const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: path.resolve('./chrome/Chromium.app/Contents/MacOS/Chromium')
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 375,
        height: 667,
        deviceScaleFactor: 1,
        isMobile: true
    })
    await page.goto('https://marxjiao.com/');
    await page.screenshot({path: 'marx-blog.png'});
    await browser.close();
})();
