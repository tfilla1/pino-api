const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/routes');
const app = express();

app.use('/api', routes);


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6990;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
