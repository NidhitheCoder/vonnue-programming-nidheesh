function switchSt(val) {
  var answer = 0;
  switch (val) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      answer++;
      break;

    case "J":
    case "J":
    case "K":
    case "Q":
    case "A":
      answer--;function switchSt(val) {
        var answer = 0;
        switch (val) {
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            answer++;
            break;
      
          case "J":
          case "J":
          case "K":
          case "Q":
          case "A":
            answer--;
            break;
        }
        var holdBet="hold"
        if(answer > 0){
            holdBet='bet'
        }
        return  answer + " "+holdBet;
      }
      console.log(switchSt(2));
      console.log(switchSt("K"));
      console.log(switchSt("4"));
      console.log(switchSt("A"));
      
      break;
  }
  var holdBet = "hold";
  if (answer > 0) {
    holdBet = "bet";
  }
  return answer + " " + holdBet;
}
console.log(switchSt(2));
console.log(switchSt("K"));
console.log(switchSt("4"));
console.log(switchSt("A"));
