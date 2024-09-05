import * as http from "http";
import {
  getFilterEpisodies,
  getListEpisodies,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export default async function app(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

  if (req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
    await getListEpisodies(req, res);
  } else if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodies(req, res);
  }
}
