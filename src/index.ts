import express from "express";
import computersRouter from "./routes/computersRouter";
import mobilesRouter from "./routes/mobilesRouter";
import audioRouter from "./routes/audioRouter";
import televisionsRouter from "./routes/televisionsRouter";

const app = express();
const port = process.env.PORT || 8008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/computers", computersRouter);
app.use("/mobiles", mobilesRouter);
app.use("/audio", audioRouter);
app.use("/televisions", televisionsRouter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
