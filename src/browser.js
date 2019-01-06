/**
 * @file 浏览器
 * @author Marx
 */

const puppeteer = require('puppeteer-core');
const {browserConfig} = require('./config');
const path = require('path');

module.exports = async function (url, action) {
    // 创建浏览器
    const browser = await puppeteer.launch({
        executablePath: path.resolve('./chrome/Chromium.app/Contents/MacOS/Chromium')
    });
    try {
        // 创建页面
        const page = await browser.newPage();
        // 设置浏览器 viewport
        await page.setViewport(browserConfig);
        // 打开页面
        await page.goto(url, {timeout: 20000});
        // 执行用户函数
        await action(page);
    }
    catch (err) {
        await browser.close();
        return Promise.reject(err);
    }

    // 关闭浏览器
    return await browser.close();
};
