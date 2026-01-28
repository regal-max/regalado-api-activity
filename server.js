//server js
require('dotenv').config();
const express = require('express');
const app = express();

// Load Config first
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Middleware
app.use(express.json());

// Import Routes
const apiRoutes = require('./src/routes/apiRoutes');

// Use Routes (now BASE_URI is defined)
app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});



