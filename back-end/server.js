const express = require('express');
const twRoute = require('./routes/tw-route');
const igRoute = require('./routes/ig-route');
const ytRoute = require('./routes/yt-route');
const spRoute = require('./routes/sp-route');


const cors = require('cors');
const port = process.env.PORT || 1337


const app = express();

app.listen(port, () => console.log(`Server is running on port: ${port}`));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', twRoute);
app.use('/ig', igRoute);
app.use('/yt', ytRoute);
app.use('/sp', spRoute);


module.exports = app;
