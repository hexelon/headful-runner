const express = require('express');
const puppeteer = require('puppeteer-core');
const router = express.Router();

/* GET home page. */
router.post('/cookies',  async function (req, res, next) {
  const { cookies, url } =  req.body;

  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXEC_PATH, // set by docker container
    headless: false,
  });
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.setCookie(...cookies);
  await page.goto(url);
});

module.exports = router;
