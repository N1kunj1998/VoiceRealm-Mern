require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require("./database");
const router = require("./routes");
const cors = require("cors");

const corsOption = {
    origin: ['http://localhost:3000'],
}

app.use(cors(corsOption));

const PORT = process.env.PORT || 5500;
DbConnect();
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send("Hello from Express JS") 
})

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));
// app.listen(PORT, () => console.log(require('crypto').randomBytes(64).toString('hex')));