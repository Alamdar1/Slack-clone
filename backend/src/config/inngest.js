import { Inngest } from "inngest";
import { connection } from "./connectionDb.js";
import { User } from "../models/user.model.js";

export const inngest = new Inngest({ id: "slack-app" });

// Your new function:
const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    console.log("event", event);
    await connection();

    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      image: image_url,
    };

    await User.create(newUser);
  }
);
// Add the function to the exported array:
export const functions = [syncUser];
