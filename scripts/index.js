import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async (request, response) => {
    try {
        if (request.url === "/") {
            const htmlContent = await fs.readFile("./index.html");
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(htmlContent);
        } else if (request.url === "/about") {
            const htmlContent = await fs.readFile("./pages/about.html");
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(htmlContent);
        } else if (request.url === "/contact-me") {
            const htmlContent = await fs.readFile("./pages/contact-me.html");
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(htmlContent);
        } else {
            // Error Page
            const htmlContent = await fs.readFile("./pages/404.html");
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(htmlContent);
        }
    } catch (error) {
        console.log(`Here is the error: ${err}`);
        response.writeHead(500);
        response.end();
    }
});

server.listen(8080);
