const express = require('express');
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

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor inicializado na porta ${PORT}`.bgMagenta);
});