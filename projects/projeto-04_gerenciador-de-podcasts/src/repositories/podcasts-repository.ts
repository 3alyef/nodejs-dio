import fs from "fs";
import path from "path";
import { PodcastModel } from "../interfaces/models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export async function repositoryPodcast(podcastName?: string): Promise<PodcastModel[]> {
	const rawFile = fs.readFileSync(pathData, {encoding: "utf-8"});
	let jsonFile: PodcastModel[] = JSON.parse(rawFile);

	if(podcastName) {
		jsonFile = jsonFile.filter((pod)=> pod.podcastName === podcastName);
	}
	
	return jsonFile;
}