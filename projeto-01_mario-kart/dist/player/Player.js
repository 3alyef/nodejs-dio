import PlayerConfig from "./PlayerConfig.js";
export default class Player {
    Mario;
    Bowser;
    Peach;
    Luigi;
    Yoshi;
    Donkey_Kong;
    constructor() {
        this.Mario = new PlayerConfig(4, 3, 3);
        this.Bowser = new PlayerConfig(5, 2, 5);
        this.Peach = new PlayerConfig(3, 4, 2);
        this.Luigi = new PlayerConfig(3, 4, 4);
        this.Yoshi = new PlayerConfig(2, 4, 3);
        this.Donkey_Kong = new PlayerConfig(2, 2, 5);
    }
    getPlayerByName(name) {
        const playersMap = {
            Mario: this.Mario,
            Bowser: this.Bowser,
            Peach: this.Peach,
            Luigi: this.Luigi,
            Yoshi: this.Yoshi,
            Donkey_K: this.Donkey_Kong
        };
        return playersMap[name];
    }
}
