export default class PlayerConfig {
    Name;
    Velocidade;
    Manobrabilidade;
    Poder;
    Pontos;
    constructor(Name, Velocidade, Manobrabilidade, Poder) {
        this.Name = Name;
        this.Velocidade = Velocidade;
        this.Manobrabilidade = Manobrabilidade;
        this.Poder = Poder;
        this.Pontos = 0;
    }
    getName() {
        return this.Name;
    }
    getVelocidade() {
        return this.Velocidade;
    }
    getManobrabilidade() {
        return this.Manobrabilidade;
    }
    getPoder() {
        return this.Poder;
    }
    getPontos() {
        return this.Pontos;
    }
    setPontos(add, value) {
        if (add) {
            this.Pontos += value;
        }
        else {
            this.Pontos >= value ?
                this.Pontos = -value : this.Pontos = 0;
        }
    }
}
