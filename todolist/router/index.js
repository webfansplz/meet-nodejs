const Router = require("./router");
const list = require("../controllers/list");
const Routers = new Router();
Routers.get("/list", list);
module.exports = Routers;
