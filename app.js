var { SESSION_SERCRET } = require("./config/app.config").security;
var accesslogger = require("./lib/log/accesslogger.js");
var systemlogger = require("./lib/log/systemlogger.js");
var accountcontrol = require("./lib/security/accountcontrol.js");
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");
var app = express();

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));

app.use(accesslogger());

app.use(cookieParser());
app.use(session({
  secret: SESSION_SERCRET,
  resave: false,
  saveUninitialized: true,
  name: "sid"
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(...accountcontrol.initialize());
// app.use(accountcontrol[0].initialize());
// app.use(accountcontrol[1].session());

app.use("/", require("./routes/index.js"));
app.use("/posts", require("./routes/posts.js"));
app.use("/search", require("./routes/search.js"));
app.use("/account", require("./routes/account.js"));
app.use(systemlogger());

app.listen(3000);