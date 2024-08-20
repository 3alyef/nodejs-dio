import Pista from './pista/Pista.js';
import { PlayersInterface } from './players/interfaces/Players_interface.js';
import PlayerConfig from './players/PlayerConfig.js';
import Players from './players/Players.js';
import inquirer from 'inquirer';
class Main {
	private players: Players;
	private player: PlayerConfig | undefined; 
	private enemy: PlayerConfig;
	constructor() {
		this.players = new Players();
		this.enemy = this.players.Bowser;
	}

	public async start() {
		this.player = this.players.getPlayerByName(await this.createForm());
		
		if(this.player){
			let player = this.player;
			
			for(let i = 0; i < 4; i++) {
				await new Promise<void>(resolve => {
					if(i === 0) console.log("--".repeat(8));
					
					setTimeout(() => {
						new Pista( player, this.enemy, (i + 1));
						resolve();
						console.log("--".repeat(8));
					}, 500);
				});
			}

			console.log("Resultado final:")
			console.log(`${player.getName()}: ${player.getPontos()} ponto(s)`)
			console.log(`${this.enemy.getName()}: ${this.enemy.getPontos()} ponto(s)`)

			if(player.getPontos() > this.enemy.getPontos()) {
				console.log(`${player.getName()} venceu a corrida! Parabéns!`)
			} else if(player.getPontos() ===  this.enemy.getPontos()) {
				console.log("Empate!")
			} else {
				console.log("Você perdeu a corrida!")
			}
		}
	}

	private async createForm(): Promise<PlayersInterface> {
		const questions = [{
			type: 'list',
			name: 'player',
			message: 'Escolha seu player:',
			choices: ["Mario", "Peach", "Luigi", "Yoshi", "Donkey Kong"],
		}];

		try {
			const answers = await inquirer.prompt(questions);
			return answers.player;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
let main = new Main();

main.start();