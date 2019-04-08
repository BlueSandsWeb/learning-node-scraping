// const rp = require('request-promise');
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
  .launch()
  .then(function (browser) {
    console.log("Browser");
    return browser.newPage();
  })
  .then(function (page) {
    console.log("Page");
    return page.goto(url).then(function () {
      console.log("Went to URL");
      return page.content();
    });
  })
  .then(function (html) {
    console.log("Last .then running");
    $('h2', html).each(function () {
      console.log($(this).text());
    })
  })
  .catch(function (err) {
    console.log(err);
  })

// rp(url)
//   .then(function (html) {
//     console.log(html);
//   })
//   .catch(function (err) {
//     console.log(err)
//   })

