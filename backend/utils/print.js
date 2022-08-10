const puppeteer = require('puppeteer');

const printPDF = async (html) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html);
  const buffer = await page.pdf({
    format: "A4",
    printBackground: true
  });

  await browser.close();
  return buffer;
};

module.exports = { printPDF };