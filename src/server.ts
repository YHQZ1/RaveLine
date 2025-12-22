import express from "express";
import healthRouter from "./routes/health.js";
import moderateRouter from "./routes/moderate.js";

const app = express();

app.use(express.json());
app.use("/health", healthRouter);
app.use("/moderate", moderateRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Raveline API running on port ${PORT}`);
});
