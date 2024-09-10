import { Request, Response, Router } from "express";

const playersRouter: Router = Router();

playersRouter.get("api/players/:id", (req: Request, res: Response) => {

});

playersRouter.get("api/players/list", (req: Request, res: Response) => {
	
});

playersRouter.post("api/players", (req: Request, res: Response) => {
	
});

playersRouter.delete("api/players/:id", (req: Request, res: Response) => {
	
});

playersRouter.patch("api/players/:id", (req: Request, res: Response) => {
	
});

export default playersRouter;