import { Express, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.send("App is running without problems.");
  });
}

export default routes;
