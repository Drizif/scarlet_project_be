const app = require('./config/express');
const { server } = require('./config/vars');

app.listen(server.port, () => console.info(`server started on http://localhost:${server.port}`)).setTimeout(server.timeout);