const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//API routes
app.use(routes);

//MongoDB connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks";

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false

});

app.listen(PORT, () => {
  console.log(`********* >>>>  API port ${PORT}!`);
});
  