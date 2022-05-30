const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(express.static(__dirname));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/express/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/pong.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/Pong/exported/index.html"));
  //__dirname : It will resolve to your project folder.
});

app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
