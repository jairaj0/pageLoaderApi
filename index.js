import axios from "axios";
import cheerio from "cheerio";
import express from "express";
import cors from "cors";
const app = express();

// ********* Functions **********

const count = 100;
let pages = [];

for (let i = 1; i <= count; i++) {
   pages.push(i);
}

const perPage = (num = 1) => {
  let start = num <= 1 ? 0 : ((num - 1) * 10);
  let end = num <= 1 ? 10 : ((num - 1) * 10) + 10;

  return pages.slice(start , end)
}


// ********* Functions **********

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.get("/", function (rep , res) {
  res.end(JSON.stringify(perPage()));
});

app.get("/:pageNo", function (req, res) {
  res.end(JSON.stringify(perPage(req.params.pageNo)));
});


app.listen(8081, function () {
  console.log(`app listening at ${8081}`);
});
