var { CONNECTION_URL, DATABASE, OPTIONS } = require("../config/mongodb.config");
var MongoClient = require("mongodb").MongoClient;
var router = require("express").Router();

router.get("/*", (req, res) => {
  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    var db = client.db(DATABASE);
    db.collection("posts").findOne({
      url: req.url
    }).then((doc) => {
      res.render("./posts/index.ejs",doc);
    }).catch((error) => {
      throw error;
    }).then(() => {
      client.close();
    });
  });
});

module.exports = router;