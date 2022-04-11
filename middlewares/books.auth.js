function auth(req, res, next) {
  const { username, password } = req.body;

  if (username == "admin" && password == "12345678") {
    console.log("Logged in successfully");
    next();
  } else {
    console.log("Not authorized");
    next();
  }
}

module.exports = auth;
