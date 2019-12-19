// 注册路由
function register(type, name, handle) {
  Object.assign(this.routes[type], {
    [name]: handle
  });
}
class Router {
  constructor() {
    this.routes = {
      get: {},
      post: {},
      delete: {},
      put: {}
    };
  }
  get() {
    register.call(this, "get", ...arguments);
  }
  post() {
    register.call(this, "post", ...arguments);
  }
  delete() {
    register.call(this, "delete", ...arguments);
  }
  put() {
    register.call(this, "put", ...arguments);
  }
  init(req, res) {
    const { method, url } = req;
    const handle = this.routes[method.toLowerCase()][url];
    handle && handle(req, res);
  }
}
module.exports = Router;
