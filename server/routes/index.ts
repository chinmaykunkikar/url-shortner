import { Express, Request, Response } from "express";
import {
  createShortURL,
  handleRedirect,
} from "../controllers/shortURL.controller";
import validateResource from "../middleware/validateResource";
import shortURLSchema from "../schemas/shortURL.schema";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.send("App is running without problems.");
  });

  // Create an ID for the URL - spotify.com -> gqau4
  app.post("/api/shortenurl", validateResource(shortURLSchema), createShortURL);

  // Redirect to the destination - localhost:9090/gqau4 -> spotify.com
  app.get("/:shortId", handleRedirect);
}

export default routes;
