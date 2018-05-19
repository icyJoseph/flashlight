import express from 'express';
import api from './api';

const app = express();

app.use('/api', api);

app.listen(3333, () => console.log('Started server'));
