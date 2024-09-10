import express, { Express, Router } from "express";
import cors from "cors";
import * as routes from "./routes/routes";

export default class Server {
	private app: Express;
	constructor(PORT: string) {
		this.app = express();
		this.confCors("*");
		this.confRouts(routes.clubsRouter);
		this.confRouts(routes.playersRouter);
		this.jsonParse();
		this.startServer(PORT);
	}

	private confCors(origin: string | string[]) {
		this.app.use(cors({
			origin,
		}))
	}

	private confRouts(router: Router) {
		this.app.use(router);
	}

	private jsonParse() {
    this.app.use(express.json());
  };

	private startServer(port: string) {
		try {
			this.app.listen(port, () => {
				console.log(`Servidor iniciado na porta: ${port}`);
			})
		} catch(error) {
			console.error("Error ao iniciar o servidor: ", error);
		}
	}
}