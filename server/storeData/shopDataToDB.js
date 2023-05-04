const fs = require("fs"); // json 불러오기 위함
var mysql = require("mysql");

const jsonFile = fs.readFileSync("./shopData.json", "utf8");
const jsonData = JSON.parse(jsonFile);

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "admin",
  password: "1234",
  database: "dog_inf_mall",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the MySQL database!");
});
for (data of jsonData) {
  let title = data["title"];
  let category = data["category"];
  let choice = JSON.stringify(data["choice"]);
  let price = data["price"];
  let image = data["image"];
  let amount = data["amount"];

  var sql = `INSERT INTO product(title, category, choice, price, image, amount) VALUES ('${title}', '${category}', '${choice}', ${price}, '${image}', ${amount})`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("JSON data inserted into the MySQL database!");
  });
}

con.end(function (err) {
  if (err) throw err;
  console.log("Connection closed!");
});
