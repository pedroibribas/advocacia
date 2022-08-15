const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/pdf', require('./routes/pdfRoute'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor inicializado na porta ${PORT}`.bgMagenta);
});