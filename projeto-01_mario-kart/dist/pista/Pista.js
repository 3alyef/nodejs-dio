import Dice from "./Dice.js";
export default class Pista {
    PistaType;
    jogador1;
    jogador2;
    Dice;
    constructor(jogador1, jogador2, round) {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.Dice = new Dice();
        this.PistaType = Math.floor(Math.random() * 3);
        this.start(round);
    }
    start(round) {
        switch (this.PistaType) {
            case 0:
                this.retaGame(round);
                break;
            case 1:
                this.curvaGame(round);
                break;
            case 2:
                this.confrontoGame(round);
                break;
            default:
                console.error("Error ao inciar a jogada.");
                break;
        }
    }
    showWinner(win) {
        console.log(`${win.getName()} marcou um ponto!`);
    }
    retaGame(round) {
        let vel1 = this.Dice.rollDice();
        let finalVel1 = vel1 + this.jogador1.getVelocidade();
        let vel2 = this.Dice.rollDice();
        let finalVel2 = vel1 + this.jogador2.getVelocidade();
        console.log(`Rodada: ${round}`);
        console.log("Bloco: RETA");
        console.log(`${this.jogador1.getName()} rolou um dado de velocidade ${vel1} + ${this.jogador1.getVelocidade()} = ${finalVel1}`);
        console.log(`${this.jogador2.getName()} rolou um dado de velocidade ${vel2} + ${this.jogador2.getVelocidade()} = ${finalVel2}`);
        if (finalVel1 > finalVel2) {
            this.jogador1.setPontos(true, 1);
            this.showWinner(this.jogador1);
        }
        else if (finalVel1 === finalVel2) {
            return;
        }
        else {
            this.jogador2.setPontos(true, 1);
            this.showWinner(this.jogador2);
        }
    }
    curvaGame(round) {
        let manb1 = this.Dice.rollDice();
        let finalManb1 = manb1 + this.jogador1.getManobrabilidade();
        let manb2 = this.Dice.rollDice();
        let finalManb2 = manb2 + this.jogador2.getManobrabilidade();
        console.log(`Rodada: ${round}`);
        console.log("Bloco: CURVA");
        console.log(`${this.jogador1.getName()} rolou um dado de manobridade ${manb1} + ${this.jogador1.getManobrabilidade()} = ${finalManb1}`);
        console.log(`${this.jogador2.getName()} rolou um dado de velocidade ${manb2} + ${this.jogador2.getManobrabilidade()} = ${finalManb2}`);
        if (finalManb1 > finalManb2) {
            this.jogador1.setPontos(true, 1);
            this.showWinner(this.jogador1);
        }
        else if (finalManb1 === finalManb2) {
            return;
        }
        else {
            this.jogador2.setPontos(true, 1);
            this.showWinner(this.jogador2);
        }
    }
    confrontoGame(round) {
        let power1 = this.Dice.rollDice();
        let finalpower1 = power1 + this.jogador1.getPoder();
        let power2 = this.Dice.rollDice();
        let finalpower2 = power2 + this.jogador2.getPoder();
        console.log(`Rodada: ${round}`);
        console.log("Bloco: CONFRONTO");
        console.log(`${this.jogador1.getName()} rolou um dado de poder ${power1} + ${this.jogador1.getPoder()} = ${finalpower1}`);
        console.log(`${this.jogador2.getName()} rolou um dado de poder ${power2} + ${this.jogador2.getPoder()} = ${finalpower2}`);
        if (finalpower1 > finalpower2) {
            this.jogador1.setPontos(true, 1);
            console.log(`${this.jogador1.getName()} venceu o confronto! ${this.jogador2.getName()} perdeu 1 ponto!`);
        }
        else if (finalpower1 === finalpower2) {
            return;
        }
        else {
            this.jogador2.setPontos(true, 1);
            console.log(`${this.jogador2.getName()} venceu o confronto! ${this.jogador1.getName()} perdeu 1 ponto!`);
        }
    }
}
