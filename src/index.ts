import http from "http";
import { hello } from './hello';

export const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: `say ${hello}`,
    })
  );
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
