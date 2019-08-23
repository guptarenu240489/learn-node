const fs = require('fs');

const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;

    // To send some response
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My first server</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button>Submit</button></form></body>');
        res.write('</html>');
        return res.end();

    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // This is a blocking call and hence we shouldnt user writeFileSync.
            // fs.writeFileSync('output.txt', message);
            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();
            // Alternative and must take approach

            fs.writeFile('output.txt', message , err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first server</title></head>');
    res.write('<body><h1>Hello from node server</h1></body>');
    res.write('</html>');
    res.end();
    // halt exit event loop
    // process.exit();
}

// module.exports = requestHandler;

/* exporting multiple things
modules.export = {
    handler: requestHandler,
    someText: 'Some Hard coded text'
}
*/

/* or another way
module.exports.handler = requestHandler;
module.exports.someText  'Some hard coded text';
*/

/* or shorthand for above */

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
