import {createElement} from "../utils/index.js";

class Player {
    constructor(props) {
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.selector = `player${this.player}`;
        this.rootSelector = props.rootSelector;
    }

    changeHP = (amount) =>{
        this.hp -= amount;

        if (this.hp <= 0) {
            this.hp = 0;
        }
    }

    elHP = () => {
        return document.querySelector(`.${this.selector} .life`);
    }

    renderHP = () => {
        this.elHP().style.width = this.hp + '%';
    }

    createPlayer = () => {

        const $player = createElement('div', this.selector);

        const $progressbar = createElement('div', 'progressbar');
        const $life = createElement('div', 'life');
        $life.style.width = this.hp + '%';
        const $name = createElement('div', 'name');
        $name.innerText = this.name;
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);

        const $character = createElement('div', 'character');
        const $img = createElement('img');
        $img.src = this.img;
        $character.appendChild($img);

        $player.appendChild($progressbar);
        $player.appendChild($character);

        const $root = document.querySelector(`.${this.rootSelector}`);
        $root.appendChild($player);

        return $player;
    }
}
export default Player;