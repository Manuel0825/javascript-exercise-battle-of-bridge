class Dice {
    constructor() {
        this.value = 1; // comienza el valor en 1
      }
    
      roll() {
        this.value = Math.floor(Math.random() * 6) + 1; // un valor random entre 1 y 6
      }
    }
    
