const mongoose = require("mongoose");
const app = require("./index");

mongoose
  .connect(
    `mongodb://localhost:27017/pagination`
  )
  .then(console.log("DB Connected"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});