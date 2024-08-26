import PlayerConfig from "./PlayerConfig.js";
export default class Players {
    Mario;
    Bowser;
    Peach;
    Luigi;
    Yoshi;
    Donkey_Kong;
    constructor() {
        this.Mario = new PlayerConfig("Mario", 4, 3, 3);
        this.Bowser = new PlayerConfig("Bowser", 5, 2, 5);
        this.Peach = new PlayerConfig("Peach", 3, 4, 2);
        this.Luigi = new PlayerConfig("Luigi", 3, 4, 4);
        this.Yoshi = new PlayerConfig("Yoshi", 2, 4, 3);
        this.Donkey_Kong = new PlayerConfig("Donkey Kong", 2, 2, 5);
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
