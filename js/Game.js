class BattleGame {
    constructor(dice,player,enemy) {
        this.dice =  dice;
        this.player =  player;//("Player", 100, 10);
        this.enemy =  enemy; //("Enemy", 100, 8);
      }

      battle(attacker, defender) {
        this.dice.roll(); // Lanzamos el dado
        attacker.attackPlayer(defender, this.diceValue);
      }

      
}


