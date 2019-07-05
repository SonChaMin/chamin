'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
}).listen(port);



const puppeteer = require("puppeteer");

async function main() {
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();
    await page.goto("http://ntry.com/scores/named_ladder/live.php")

    let eh = await page.$("ul.result_list");
    let title = await eh.$eval('span.result', function (el) {
        return el.innerText
    })
        console.log(title);

    //browser.close();
}

main();