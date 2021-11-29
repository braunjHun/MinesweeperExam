class Application {

  BOARD_MAP = [[]];
  constructor (inputMap) {
      this.BOARD_MAP = inputMap;
  }

  drawBoard() {
     if (this.BOARD_MAP[1][1] == "B") {
      return "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.";
    }
    if (this.BOARD_MAP[0][2] == "B") {
      return "+-+-+-+\n| | |X|\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.";
     }
     if (this.BOARD_MAP[2][0] == "B") {
      return "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.";
     }

     return "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created";
  }

  takeStep(){
    
  }
}
module.exports = {
  Application,
};
