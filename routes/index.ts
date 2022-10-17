import { Express, Request, Response } from "express";
import { createShortURL } from "../controllers/shortURL.controller";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.send("App is running without problems.");
  });

  app.post("/api/shortenurl", createShortURL);
}

export default routes;
