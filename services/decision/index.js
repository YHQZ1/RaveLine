import express from "express";

const app = express();

app.use(express.json());

app.post("/decide", (req, res) => {
  res.json({
    status: "allow",
    reason: "initial placeholder decision",
  });
});

app.listen(4002, () => console.log("Decision service running on 4002"));
