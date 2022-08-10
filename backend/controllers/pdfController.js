const ejs = require('ejs');
const path = require('path');
const { printPDF } = require('../utils/print');

const getPDF = (req, res) => {
  const data = req.body;

  const filePath = path.join(__dirname, "../", "utils", "print.ejs");

  ejs.renderFile(filePath, { data }, (err, html) => {
    if (err) {
      return res.send('Não foi possível ler o arquivo EJS');
    }

    printPDF(html).then(pdf => {
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Length': pdf.length
      });
      res.status(200).send(pdf);
    });
  });
};

module.exports = { getPDF };