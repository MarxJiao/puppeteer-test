/**
 * @file 获取页面的 dom
 * @author Marx
 */

/**
 * 获取页面的 dom
 *
 * @param {Object} page 页面
 * @return {Promise} 页面
 */
module.exports = async function (page) {
    const content = await page.content();
    console.log(content);
    return content;
};
