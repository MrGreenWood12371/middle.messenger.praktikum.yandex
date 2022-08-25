const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
    res.send(`${__dirname}/dist/index.html`);
});
  
app.listen(process.env.PORT || PORT, () => {
    console.log(`Your app listening on port ${process.env.PORT || PORT}!`);
}); 
