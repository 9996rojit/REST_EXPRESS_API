const express = require('express');
const cors = require('cors');
const MiddleWare = require('./api/middleware')
const api = require('./api');
const PORT = 4242;

const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.json({
        name: "Rojit Baskota",

    })
})

app.use('/api/v1', api);
app.use(MiddleWare.notFound);
app.use(MiddleWare.ErrorHandler);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

});