const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(map) {
    this.map = map;
    //set start of character
    this.playerRow = 0;
    this.playerCol = 0;
    this.map[0][0] = pathCharacter;
  }

  //remove , and [] from field
  printMap() {
    const newMap = this.map.map((row) => {
      return row.join("");
    });
    console.log(newMap.join("\n"));
  }
  //add a random hat position
  addHat() {
    const row = Math.floor(Math.random() * this.map.length);
    const col = Math.floor(Math.random() * this.map[0].length);
    this.map[row][col] = hat;
  }

  //add random hole position
  addHole() {
    const numHoles = Math.floor(Math.random() * 9) + 1;
    for (let i = 0; i < numHoles; i++) {
      let row = Math.floor(Math.random() * this.map.length);
      let col = Math.floor(Math.random() * this.map[0].length);
      if (this.map[row][col] === fieldCharacter) {
        this.map[row][col] = hole;
      } else {
        i--;
      }
    }
  }

  //character control
  walkUp() {
    //Update player's pos
    this.playerRow--;
    //Check status of player's pos
    this.checkStatus();
    //update map with new player's pos
    this.map[this.playerRow][this.playerCol] = pathCharacter;
    this.printMap();
  }
  walkDown() {
    this.playerRow++;
    this.checkStatus();
    this.map[this.playerRow][this.playerCol] = pathCharacter;
    this.printMap();
  }
  walkLeft() {
    this.playerCol--;
    this.checkStatus();
    this.map[this.playerRow][this.playerCol] = pathCharacter;
    this.printMap();
  }
  walkRight() {
    this.playerCol++;
    this.checkStatus();
    this.map[this.playerRow][this.playerCol] = pathCharacter;
    this.printMap();
  }
  //game rules
  checkStatus() {
    //Check if player fall in the hole 
    if (this.map[this.playerRow][this.playerCol] === hole) {
      console.log("That's a hole didn't you see ?. Game Over D: better luck next time xD");
    }
    //Check if player found the hat
    if (this.map[this.playerRow][this.playerCol] === hat) {
      console.log("You found the hat. You Win bois!");
    }
    //Check if player get of the field
    if (this.playerRow < 0 || this.playerRow >= this.map.length || this.playerCol < 0 || this.playerCol >= this.map[0].length) {
      console.log("Hey take a look you went out of field LOL!");
    }
  }
  //generate field
  static generateField(row, col) {
    let map = [];
    for (let i = 1; i <= row; i++) {
      let arr = [];
      for (let j = 1; j <= col; j++) {
        arr.push(fieldCharacter);
      }
      map.push(arr);
    }
    return map;
  }
}

const myField = new Field(Field.generateField(10, 10));
myField.addHole();
myField.addHat();
myField.printMap();

while (true) {
  const direction = prompt("Which way? : ");
  if (direction.toLowerCase() === "u") {
    myField.walkUp();
  } else if (direction.toLowerCase() === "d") {
    myField.walkDown();
  } else if (direction.toLowerCase() === "l") {
    myField.walkLeft();
  } else if (direction.toLowerCase() === "r") {
    myField.walkRight();
  } else {
    console.log("Wrong input. Please enter u,d,l,r only!")
  }
}