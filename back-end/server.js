const express = require('express');
const twitterRoutes = require('./routes/twitter-route');
const cors = require('cors');
const port = process.env.PORT || 1337


const app = express();

app.listen(port, () => console.log(`Server is running on port: ${port}`));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', twitterRoutes);

module.exports = app;
