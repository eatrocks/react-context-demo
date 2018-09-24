import "./utils/dotenv";
import path from "path";
import express from "express";
import next from "next";
import logger from "./utils/logger";
import compression from "compression";
import helmet from "helmet";

import { share } from "@lds/universal-env";

// choose which node environment varialbes are shared with the client
// select with caution to avoid sending sensitive data
share("VARIABLE1", "APP_NAME", "LOCALHOST");

const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: path.join(__dirname, "..", "app"), dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  !dev && server.use(compression()); // https://github.com/zeit/next.js/issues/3890
  server.use(helmet());

  /**
   * We add this custom route to handle the
   * vanity URL we created in a <Link /> component
   * in "./index.js". This in case a hard reload is
   * performed while navigated to that vanity URL.
   * We make the `:id` route parameter available
   * as a prop to the component at `actualPage`.
   * Source: https://github.com/zeit/next.js/#custom-server-and-routing
   */
  server.get("/hello/:id", (req, res) => {
    const actualPage = "/greeting";
    const queryParams = req.params;
    app.render(req, res, actualPage, queryParams);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // eslint-disable-next-line no-unused-vars
  server.use((err, req, res, next) => {
    logger.error(err);
    res
      .status(err.status || 500)
      .send(req.xhr ? { error: "An error occured" } : "An error occured");
  });

  server.listen(port, err => {
    if (err) throw err;
    logger.info(`Listening at Port ${port} (${process.env.LOCALHOST})`);
  });
});
