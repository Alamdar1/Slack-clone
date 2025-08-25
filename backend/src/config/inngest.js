import { Inngest } from "inngest";
import { connection } from "./connectionDb.js";
import { User } from "../models/user.model.js";

export const inngest = new Inngest({ id: "slack-app" });

// Your new function:
const createUser = inngest.createFunction(
  { id: "user-created" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    // await connection();
    console.log("event", event);
    const { id, email_addresses, first_name, last_name, image_url } =
      event?.data;
    const newUser = {
      clerkId: id,
      //   email: email_addresses[0]?.email_address,
      name: `${first_name ? first_name : ""} ${last_name ? last_name : ""}`,
      image: image_url,
    };

    // await User.createUser(newUser);
  }
);

// Add the function to the exported array:
export const functions = [createUser];
