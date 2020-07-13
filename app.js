const express = require('express'); //need express module
const app = express(); 
const port = process.env.PORT || 3000;

app.use(express.json());
const Joi = require('joi');

/* Barebones of a get request for the app . . .
app.get('/endpoint-page', (request-var, response-var) => {});
*/
app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!',
        code: res.statusCode = 200
    });
});

app.get('/students', (req, res) => {
    /* This achieves the same result as the below code . . .
    const result = {
        message: 'This is the /students route.',
        code: res.statusCode = 200
    };

    const json = JSON.stringify(result);
    res.setHeader('Content-Type, 'application/json');
    res.send(json);
    res.end();
    */
    res.json({
        message: 'This is the /students route.',
        code: res.statusCode = 200
    });
});

app.post('/students', (req, res) => {
    /*
    res.json({
        message: 'This is the /students post route.',
        code: res.statusCode = 200
    });
    */
   const schema = {
       fname: Joi.string().required(),
       favNumber: Joi.number().required(),
       favColor: Joi.string().optional()
   };

//const { body } = req; ---> makes req.body a const var

   //const validation = Joi.validate(req.body, schema);  --version 1
   const { error } = Joi.validate(req.body, schema);

   //if(validation.error) {     --version 1
    if(error) {
       //short circuit the if statement
       return res.json({
           message: validation.error.message,
           code: res.statusCode = 400 //bad request
       });
   }
});

//Listening for connections goes at the end
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});