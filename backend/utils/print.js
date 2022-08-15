const puppeteer = require('puppeteer');

const printPDF = async (html) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html);
  const buffer = await page.pdf({
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    margin: {
      top: '64px',
      bottom: '64px',
      left: '32px',
      right: '32px',
    }
  });

  await browser.close();
  return buffer;
};

module.exports = { printPDF };