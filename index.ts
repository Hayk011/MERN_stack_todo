import express from "express";
import  mongoose from "mongoose";
const app: express.Application = express();
const homeRout = require("./routes/home");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/", homeRout);
async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://hayk:3706884262@cluster0-tubdo.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    app.listen(8000, () => {
      console.log("server is runing");
    });
  } catch (e) {
    console.log(e);
  }
}
start();
