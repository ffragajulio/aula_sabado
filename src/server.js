const app = require('./app');
const port = app.get('port');

app.listen(port, () => console.log("running at port " + port));