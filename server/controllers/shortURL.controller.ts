import { Request, Response } from "express";
import shortURL from "../models/shortURL.model";

export async function createShortURL(req: Request, res: Response) {
  const { destination } = req.body;
  const newURL = await shortURL.create({ destination });

  return res.send(newURL);
}

export async function handleRedirect(req: Request, res: Response) {
  const { shortId } = req.params;

  // Query database for the destination
  const destResult = await shortURL.findOne({ shortId }).lean();

  if (destResult === null) return res.sendStatus(404);

  return res.redirect(destResult.destination);
}
