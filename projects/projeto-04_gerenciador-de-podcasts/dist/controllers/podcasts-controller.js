"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controllers/podcasts-controller.ts
var podcasts_controller_exports = {};
__export(podcasts_controller_exports, {
  getFilterEpisodies: () => getFilterEpisodies,
  getListEpisodies: () => getListEpisodies
});
module.exports = __toCommonJS(podcasts_controller_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFilterEpisodies,
  getListEpisodies
});
