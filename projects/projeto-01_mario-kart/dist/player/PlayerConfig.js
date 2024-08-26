export default class PlayerConfig {
    Velocidade;
    Manobrabilidade;
    Poder;
    Pontos;
    constructor(Velocidade, Manobrabilidade, Poder) {
        this.Velocidade = Velocidade;
        this.Manobrabilidade = Manobrabilidade;
        this.Poder = Poder;
        this.Pontos = 0;
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
