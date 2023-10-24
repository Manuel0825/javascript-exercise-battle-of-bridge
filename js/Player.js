class Player {
    constructor(name, life, attack){
        this.name = name;
        this.life = life;
        this.attack = attack;
    }
    attackPlayer(player, diceValue){
        Player.life -= this.diceValue * 6;
    }
    isDead (){
        return this.life <=0;
    }

}



 


