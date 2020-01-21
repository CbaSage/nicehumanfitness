import bodyParser from "body-parser";
import express from "express";

import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 4000);

const app = express();

app.use(bodyParser.json());

app.listen(PORT, "0.0.0.0", () => {
  console.info(`Webserver listening on ${PORT}`);
});