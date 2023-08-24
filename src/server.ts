import express from 'express';
import cors from 'cors';
import router from './routes/routes';

const app = express();
const port = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION || 'redis://127.0.0.1:6379';


app.use(cors()); 
app.use('/', router);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', ()=> {
  server.close();
  console.log("App finalizado");
});
