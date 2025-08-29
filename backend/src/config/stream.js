import { StreamChat } from "stream-chat";
import { ENV } from "../env";
// if you're using common js
const StreamChat = require("stream-chat").StreamChat;

const serverClient = StreamChat.getInstance(ENV.STREAM_API, ENV.STREAM_SECRET);

const token = serverClient.createToken("john");
// next, hand this token to the client in your in your login or registration response
