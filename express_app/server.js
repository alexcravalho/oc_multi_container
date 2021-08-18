const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.json('EXPRESS INDEX PAGE'));

app.get('/test', (req, res) => res.json('Lightblue'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
