import { repositoryPodcast } from "../repositories/podcasts-repository";

export async function serviceListEpisodes() {
  const data = await repositoryPodcast();

  return data;
}