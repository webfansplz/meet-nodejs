function list(req, res) {
  res.write("hello nodejs!");
  res.end();
}
module.exports = list;
