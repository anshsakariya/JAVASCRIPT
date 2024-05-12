import express from "express";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";

import { mergePdf } from "./merge.js";
const upload = multer({ dest: "./uploads" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"./template/index.html"));
});

app.post("/merge", upload.array("pdfs"), async (req, res) => {
  const name = await mergePdf(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
   res.sendFile(path.join(__dirname, `/public/${name}.pdf`));
});
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
