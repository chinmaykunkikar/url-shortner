import { Schema, model, Document } from "mongoose";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdefghjklmnpqrstuvwxyz", 5);

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const schema = new Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: {
    type: String,
    required: true,
  },
});

const shortURL = model<ShortURL>("shortURL", schema);

export default shortURL;
