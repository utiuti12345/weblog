var router = require("express").Router();

var createResistData = function (body) {
  var datetime = new Date();
  return {
    url: body.url,
    published: datetime,
    update: datetime,
    title: body.title,
    content: body.content,
    keywords: (body.keywords || "").split(","),
    authors: (body.authors || "").split(","),
  };
};

router.get("/", (req, res) => {
  res.render("./account/index.ejs");
});

router.get("/posts/regist", (req, res) => {
  res.render("./account/posts/regist-form.ejs");
});

router.post("/posts/regist/input", (req, res) => {
  var original = createResistData(req.body);
  res.render("./account/posts/regist-form.ejs", { original });
});

module.exports = router;