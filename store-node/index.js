const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

const port = 3020;
app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// All Routes
 app.get('/', (req, res) => {
     res.json({
         'All Products': 'http://localhost:3020/api/products',
         'All Formats': 'http://localhost:3020/api/format',
         'All Pages': 'http://localhost:3020/api/pages',
     });
 });

 app.post('/post', (req, res) => {
    console.log(req.body);
     
    res.json(req.body);
 });

 app.use('/api', router);