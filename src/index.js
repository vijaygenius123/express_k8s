import express from 'express';

const PORT = process.env.PORT || 8000
const app = express();


app.get('/', (req, res) => {
    res.send('Hello K8S')
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})