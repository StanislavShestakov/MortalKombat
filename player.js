class Player {
    constructor(props) {
        console.log(props);
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
    }
}
export default Player;