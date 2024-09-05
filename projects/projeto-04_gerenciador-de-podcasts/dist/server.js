"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var http = __toESM(require("http"));

// src/repositories/podcasts-repository.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var pathData = import_path.default.join(__dirname, "../repositories/podcasts.json");
async function repositoryPodcast(podcastName) {
  const rawFile = import_fs.default.readFileSync(pathData, { encoding: "utf-8" });
  let jsonFile = JSON.parse(rawFile);
  if (podcastName) {
    jsonFile = jsonFile.filter((pod) => pod.podcastName === podcastName);
  }
  return jsonFile;
}

// src/services/list-episodes.service.ts
async function serviceListEpisodes() {
  const data = await repositoryPodcast();
  return data;
}

// src/services/filter-episodes.service.ts
async function serviceFilterEpisodes(url) {
  const podcastName = url?.split("?p=")[1] || "";
  const data = await repositoryPodcast(decodeURIComponent(podcastName));
  return data;
}

// src/controllers/podcasts-controller.ts
var getListEpisodies = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const content = await serviceListEpisodes();
  res.end(JSON.stringify(content));
};
var getFilterEpisodies = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const content = await serviceFilterEpisodes(req.url);
  res.end(JSON.stringify(content));
};

// src/server.ts
var PORT = process.env.PORT;
var server = http.createServer(
  async (req, res) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
    console.log(baseUrl, queryString);
    if (req.method === "GET" && baseUrl === "/api/list" /* LIST */) {
      await getListEpisodies(req, res);
    } else if (req.method === "GET" && baseUrl === "/api/filter" /* EPISODE */) {
      await getFilterEpisodies(req, res);
    }
  }
);
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
