import { PodcastModel } from "../interfaces/models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";

export async function serviceFilterEpisodes(url: string | undefined): Promise<PodcastModel[]> {
  const podcastName = url?.split("?p=")[1] || "";
  const data = await repositoryPodcast(decodeURIComponent(podcastName));

  return data;
}
