const fs = require("fs");
const path = require("path");
const http = require("http");
const zlib = require("zlib");
const Routers = require("./router");
const port = 8888;

function getContentType(key) {
  return {
    js: "application/javascript",
    ico: "image/vnd.microsoft.icon",
    css: "text/css",
    html: "text/html; charset=utf-8"
  }[key];
}

const server = http.createServer((req, res) => {
  // 静态资源映射,并对资源做gzip压缩
  if (req.url.includes(".") || req.url === "/") {
    // 首页入口
    req.url === "/" && (req.url = "index.html");
    const acceptEncoding = req.headers["accept-encoding"];
    const filepath = path.join(__dirname, "./app", req.url);
    const headers = {
      "content-type": getContentType(path.extname(req.url).slice(1))
    };
    if (acceptEncoding.includes("gzip")) {
      const gzip = zlib.createGzip();
      res.writeHead(200, {
        ...headers,
        "Content-Encoding": "gzip"
      });
      fs.createReadStream(filepath)
        .pipe(gzip)
        .pipe(res);
    } else {
      res.writeHead(200, headers);
      fs.createReadStream(filepath).pipe(res);
    }
  } else {
    // 接口
    Routers.init(req, res);
  }
});

server.listen(port, () => {
  console.log(`todolist  Server listen on ${port} 🚀 `);
});
