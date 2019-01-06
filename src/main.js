/**
 * @file 主入口
 * @author Marx
 */

const open = require('./browser');
const getDomString = require('./action/get-dom-string');
const PromiseMq = require('promise-mq');
const readline = require('readline');
const path = require('path');
const fs = require('fs');
let filepath = path.join(__dirname, '../url.txt');
let input = fs.createReadStream(filepath);

async function consumer(url) {
    return await open(url, getDomString);
}

const myMq = new PromiseMq(consumer, {
    size: 1
});


const rl = readline.createInterface({
    input: input
});


rl.on('line', line => {
    myMq.addData(line);
});
