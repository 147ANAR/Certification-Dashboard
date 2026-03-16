import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`[SERVER] Certification Dashboard running at http://localhost:${PORT}`);
});
