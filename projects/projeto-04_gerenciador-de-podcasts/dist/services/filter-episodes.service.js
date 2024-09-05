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

// src/services/filter-episodes.service.ts
var filter_episodes_service_exports = {};
__export(filter_episodes_service_exports, {
  serviceFilterEpisodes: () => serviceFilterEpisodes
});
module.exports = __toCommonJS(filter_episodes_service_exports);

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

// src/services/filter-episodes.service.ts
async function serviceFilterEpisodes(url) {
  const podcastName = url?.split("?p=")[1] || "";
  const data = await repositoryPodcast(decodeURIComponent(podcastName));
  return data;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceFilterEpisodes
});
