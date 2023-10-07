import { createHash } from "crypto";

const title = "Ahmad Game";
const description = "Ahmad Game's personal website";
const author = "Ahmad Game";
const email = "me@ahmadgame.com";
const emailHash = () => createHash("md5").update(email).digest("hex");

export { title, description, author, email, emailHash };
