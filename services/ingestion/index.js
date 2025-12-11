import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

app.post("/ingest", async (req, res) => {
  const content = req.body;

  const decision = await fetch("http://decision:4002/decide", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });

  const data = await decision.json();
  res.json(data);
});

app.listen(4001, () => console.log("Ingestion service running on 4001"));
