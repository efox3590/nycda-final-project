const express = require('express');
const app = express();

app.use('/', express.static('./public', {
    index: ['index.html']
}));

app.listen(3000, () => {
    console.log('Server started at port 3000');
});