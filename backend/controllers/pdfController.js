const asyncHandler = require('express-async-handler');
const puppeteer = require('puppeteer');

const printPDF = async (data) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const html = ` 
    <table>
      <tbody>
        <tr>
          <th>Nome:</th>
          <td>${data.fullname}</td>
        </tr>
      </tbody>
    </table>
  `;

  await page.setContent(html);

  // Estilizar HTML
  await page.waitForSelector('th');
  let title = await page.$('th');
  await title.evaluate((el) => el.style.color = 'red');

  const buffer = await page.pdf({
    format: "A4",
  });

  await browser.close();
  return buffer;
};

const getPDF = asyncHandler(async (req, res) => {
  const { firstName, lastName } = req.body.name;

  const fullname = `${firstName} ${lastName}`;

  const data = { fullname }

  printPDF(data).then(pdf => {
    res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
    res.status(200).send(pdf);
  });
});

module.exports = { getPDF };