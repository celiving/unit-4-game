$(document).ready(function () {

    var Random = Math.floor(Math.random() * 120 + 19)
  
    $('#goal').text(Random);
  
    var num1 = Math.floor(Math.random() * 12 + 1)
    var num2 = Math.floor(Math.random() * 12 + 1)
    var num3 = Math.floor(Math.random() * 12 + 1)
    var num4 = Math.floor(Math.random() * 12 + 1)
  
    var playerCount = 0;
    var wins = 0;
    var losses = 0;
  
    $('#wins').text(wins);
    $('#losses').text(losses);
  
    function newGame() {
      Random = Math.floor(Math.random() * 102 + 19);
      console.log(Random)
      $('#goal').text(Random);
      num1 = Math.floor(Math.random() * 12 + 1);
      num2 = Math.floor(Math.random() * 12 + 1);
      num3 = Math.floor(Math.random() * 12 + 1);
      num4 = Math.floor(Math.random() * 12 + 1);
      playerCount = 0;
      $('#totalScore').text(playerCount);
    }
  
    function win() {
      wins++;
      $('#wins').text(wins);
      newGame();
    }
  
    function lose() {
      losses++;
      $('#losses').text(losses);
      newGame();
    }
  
    $('.purple').on('click', function () {
      playerCount = playerCount + num1;
      console.log("New playerCount= " + playerCount);
      $('#totalScore').text(playerCount);
      if (playerCount == Random) {
        win();
      } else if (playerCount > Random) {
        lose();
      }
    })
    $('.green').on('click', function () {
      playerCount = playerCount + num2;
      console.log("New playerCount= " + playerCount);
      $('#totalScore').text(playerCount);
      if (playerCount == Random) {
        win();
      } else if (playerCount > Random) {
        lose();
      }
    })
    $('.rainbow').on('click', function () {
      playerCount = playerCount + num3;
      console.log("New playerCount= " + playerCount);
      $('#totalScore').text(playerCount);
  
      if (playerCount == Random) {
        win();
      } else if (playerCount > Random) {
        lose();
      }
    })
    $('.red').on('click', function () {
      playerCount = playerCount + num4;
      console.log("New playerCount= " + playerCount);
      $('#totalScore').text(playerCount);
  
      if (playerCount == Random) {
        win();
      } else if (playerCount > Random) {
        lose();
      }
    });
  });