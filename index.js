import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const jwtsecret = 'your_jwt_secret';

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.post('/login', (req, res) => {
  const data = req.body;
  const token = jwt.sign(data, jwtsecret);
  res.json({ token });
});

app.get('/profile', (req, res) => {
  const autherhead = req.headers.authorization || "";
  const split = autherhead.split(" ");
  res.json({ split });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
