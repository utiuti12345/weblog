var { CONNECTION_URL, DATABASE, OPTIONS } = require("../../config/mongodb.config");
var MongoClient = require("mongodb").MongoClient;

// posts,users,privileges
var insertPosts = function (db) {
  return Promise.all([
    db.collection("posts").insertMany([
      {
        url: "/2019/05/01/hello-node.js.html",
        published: new Date(2019, 5, 1),
        updated: new Date(2019, 5, 1),
        title: "2019年5月1日の日記",
        content: "2019年5月1日の日記",
        keywords: ["Node.js"],
        authors: ["Yuta Saotome"]
      },
      {
        url: "/2019/05/02/hello-node.js.html",
        published: new Date(2019, 5, 2),
        updated: new Date(2019, 5, 2),
        title: "2019年5月2日の日記",
        content: "2019年5月2日の日記",
        keywords: ["Node.js"],
        authors: ["Yuta Saotome"]
      },
      {
        url: "/2019/05/03/hello-node.js.html",
        published: new Date(2019, 5, 3),
        updated: new Date(2019, 5, 3),
        title: "2019年5月3日の日記",
        content: "2019年5月3日の日記",
        keywords: ["Node.js"],
        authors: ["Yuta Saotome"]
      }
    ]),
    db.collection("posts").createIndex({ url: 1 }, { unique: true, background: true })
  ]);
};

var insertUsers = function (db) {
  return Promise.all([
    db.collection("users").insertMany([
      {
        email:"yuta.saotome@sample.com",
        name:"Yuta Saotome",
        password:"AAAAA",
        role:"owner"
      }
    ]),
    db.collection("users").createIndex({ email: 1 }, { unique: true, background: true })
  ]);
};

var insertPrivileges = function (db) {
  return Promise.all([
    db.collection("privileges").insertMany([
      {role:"default",permissions:["read"]},
      {role:"owner",permissions:["readWrite"]}
    ]),
    db.collection("privileges").createIndex({ role: 1 }, { unique: true, background: true })
  ]);
};

MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
  var db = client.db(DATABASE);
  Promise.all([
    insertPosts(db),
    insertUsers(db),
    insertPrivileges(db)
  ]).catch((error) => {
    console.log(error);
  }).then(() => {
    client.close();
  });
});