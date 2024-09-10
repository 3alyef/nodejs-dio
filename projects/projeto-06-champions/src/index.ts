import Server from "./server";
let PORT = process.env.PORT || "";
new Server(PORT);