const http = require("http")

const server = http.createServer((req, res) => {
 res.write("Hi this the most meaningful reply from the server.");
 res.end();
});
server.listen(5000);