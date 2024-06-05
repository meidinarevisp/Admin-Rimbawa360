const express = require("express");
const bodyParser = require("body-parser");
const direktoriRoutes = require("../config/routes/direktori");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000", // Ganti dengan origin klien Anda
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(
  "/uploads",
  express.static(path.join(__dirname, "src", "public", "uploads"))
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/direktori", direktoriRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
