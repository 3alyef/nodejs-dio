import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({
	logger: true,
});

server.register(cors, {
	origin: "*",
});

const teams = [{
	id: 1,
	name: "ferrari",
	base: "Woking, United Kingdom"
}, {
	id: 2,
	name: "Mecedes",
	base: "Brackley, United Kingdom"
}]

const drivers = [{
	id: 1,
	name: "Max Verstappen",
	team: "Red Bull Racing"
}, {
	id: 2,
	name: "Max Verstappen",
	team: "Red Bull Racing"
}]

server.get("/teams", async(request, response) => {
	response.type("application/json").code(200);

	return { teams };
});

server.get("/drivers", async (req, res) => {
	res.type("application/json").code(200);

	return { drivers };
})

interface DriversParams {
	id: string;
}
server.get<{Params: DriversParams}>("/drivers/:id", async (req, res) => {
	
	let id = parseInt(req.params.id);
	let driver = drivers.find(d => d.id === id);
	if(driver) {
		res.type("application/json").code(200);
	} else {
		res.type("application/json").code(404);
	}
	return { drivers: driver};
})

server.listen({
	port: 3333
}, () => {
	console.log("Server init...");
});