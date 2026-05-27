import express from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor do Maplar a rodar com sucesso na porta: ${PORT}`);
});