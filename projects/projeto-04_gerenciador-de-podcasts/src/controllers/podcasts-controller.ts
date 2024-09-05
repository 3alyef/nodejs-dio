import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes.service";
import { serviceFilterEpisodes } from "../services/filter-episodes.service";
import { StatusCode } from "../utils/status-code";

export const getListEpisodies = async (req: IncomingMessage, res: ServerResponse) => {
	res.writeHead(StatusCode.OK, {"Content-Type": "application/json"});

	const content = await serviceListEpisodes();

	res.end(JSON.stringify(content));
};

export const getFilterEpisodies = async (req: IncomingMessage, res: ServerResponse) => {
	

	const content = await serviceFilterEpisodes(req.url);
	if(content.length > 0) {
		res.writeHead(StatusCode.OK, {"Content-Type": "application/json"});
	} else {
		res.writeHead(StatusCode.NO_CONTENT, {"Content-Type": "application/json"});
	}
	
	res.end(JSON.stringify(content));
};
