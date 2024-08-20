export default class PlayerConfig {
	private Name: string;
	private Velocidade: number;
	private Manobrabilidade: number;
	private Poder: number;
	private Pontos: number;

	constructor(Name: string, Velocidade: number, Manobrabilidade: number, Poder: number) {
		this.Name = Name;
		this.Velocidade = Velocidade;
		this.Manobrabilidade = Manobrabilidade;
		this.Poder = Poder;
		this.Pontos = 0;
	}

	public getName(): string {
		return this.Name;
	}
	
	public getVelocidade(): number {
		return this.Velocidade;
	}

	public getManobrabilidade(): number {
		return this.Manobrabilidade;
	}

	public getPoder(): number {
		return this.Poder;
	}

	public getPontos(): number {
		return this.Pontos;
	}

	public setPontos(add: boolean, value: number) {
		if(add) {
			this.Pontos += value;
		} else {
			this.Pontos >= value ? 
			this.Pontos =- value : this.Pontos = 0;
		}
	}
	
}
