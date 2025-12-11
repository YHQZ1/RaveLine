import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

app.post("/moderate", async (req, res) => {
  const payload = req.body;

  const response = await fetch("http://ingestion:4001/ingest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  res.json(data);
});

app.listen(4000, () => console.log("API Gateway running on 4000"));
