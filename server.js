  const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/primary-click", (req, res) => {
  res.json({ message: "Primary button clicked successfully!" });
});

app.get("/api/danger-action", async (req, res) => {
  // simulate processing delay
  setTimeout(() => {
    res.json({ message: "Danger action completed safely ✅" });
  }, 2000);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Button UI Lab running at http://localhost:${PORT}`);
});
