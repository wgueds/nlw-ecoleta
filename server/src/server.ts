import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('ususrios do sistema');

    response.json([
        'Wesley Guedes'
    ]);
});

app.listen(3333);