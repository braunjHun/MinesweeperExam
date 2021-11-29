class Application {

  BOARD_HORIZONTAL_LINE = "+-+-+-+";
  BOARD_COLUMN = "|";
  BOARD_NEW_LINE = "\n";
  BOARD_MSG_LINE = "";
  BOARD_MAP = [[]];
  BOARD_SPACE = " ";
  BOARD_BOOM = "X";
  BOARD_BOMB = "B";

  MSG_CREATE = "[Sandbox 3x3] Game created";
  MSG_BOOM = "[Sandbox 3x3] BOOM! – Game Over.";
  MSG_CLEAN = "[Sandbox 3x3] <NUM> bombs around your square.";
  MSG_MARK = "[Sandbox 3x3] Square flagged as bomb.";
  MSG_CLEARED = "[Sandbox 3x3] the land is cleared! GOOD JOB!";

  constructor (inputMap) {
      this.BOARD_MAP = inputMap;
      this.setMessageLine(this.MSG_CREATE);
  }

  setMessageLine(msg){
    this.BOARD_MSG_LINE = msg;

  }
  drawBoard() {
      return this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.BOARD_COLUMN + this.determineSign([0,0]) + 
      this.BOARD_COLUMN + this.determineSign([0,1]) + 
      this.BOARD_COLUMN + this.determineSign([0,2]) + 
      this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
      this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.BOARD_COLUMN + this.determineSign([1,0]) + 
      this.BOARD_COLUMN + this.determineSign([1,1]) + 
      this.BOARD_COLUMN + this.determineSign([1,2]) + 
      this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
      this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.BOARD_COLUMN + this.determineSign([2,0]) + 
      this.BOARD_COLUMN + this.determineSign([2,1]) +  
      this.BOARD_COLUMN + this.determineSign([2,2]) + 
      this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
      this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.getBoardMsgLine();
  }
  markSquare(marks) {
    for (let i = 0; i < marks.length; i++) {
      this.setSign(marks[i], "*");
    }
    this.setMessageLine(this.MSG_MARK);
  }

  setSign(step, sign) {
    this.BOARD_MAP[step[0]][step[1]] = sign;
  }
  takeStep(step) {
    if (this.isBomb(step)) {
       this.setSign(step, this.BOARD_BOOM);
       this.setMessageLine(this.MSG_BOOM);
    } else {
      let bombCount = this.getBombCount(step);
      this.setSign(step, bombCount.toString());
      this.setMessageLine(this.MSG_CLEAN.replace("<NUM>", bombCount.toString()));
    }
  }

  getBoardMsgLine(){
    if (this.isBoardCleared()) {
      this.setMessageLine(this.MSG_CLEARED);
    } 
    return this.BOARD_NEW_LINE + this.BOARD_MSG_LINE;
  }

  isBoardCleared() {
    for (let i = 0; i < this.BOARD_MAP.length; i++) {
      for (let j = 0; j < this.BOARD_MAP[i].length; j++) {
        if (this.BOARD_MAP[i][j] === this.BOARD_SPACE) {
          return false;
        }
      }
    }
    return true;
  }

  isBomb(step){
    return this.BOARD_MAP[step[0]][step[1]] === this.BOARD_BOMB;
  }

  getBombCount(step) {
    let bombCount = 0;
    
    let completeMatrix =   [
      // 0,0
      [[[0,1],[1,0],[1,1]],
      // 0,1
      [[0,0],[0,2],[1,0],[1,1],[1,2]],
      // 0,2
      [[0,1],[1,1],[1,2]]],
      // 1,0
      [[[0,0],[0,1],[1,1],[2,0],[2,1]],
      // 1,1
      [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]],
      // 1,2	
      [[0,1],[0,2],[1,1],[2,1],[2,2]]],
      // 2,0
      [[[1,0],[1,1],[2,1]],
      // 2,1
      [[1,0],[1,1],[1,2],[2,0],[2,2]],
      // 2,2
      [[1,1],[1,2],[2,1]]]  
    ];
    let matrix = completeMatrix[step[0]][step[1]];
    for (let i = 0; i < matrix.length; i++) {
      if (this.BOARD_MAP[matrix[i][0]][matrix[i][1]] === this.BOARD_BOMB) {
        bombCount ++;
      }
    }
    return bombCount;
  }
  determineSign(step) {
    if (this.BOARD_MAP[step[0]][step[1]] === this.BOARD_BOMB) {
      return this.BOARD_SPACE;
    }
    return this.BOARD_MAP[step[0]][step[1]];
  }

}
module.exports = {
  Application,
};
