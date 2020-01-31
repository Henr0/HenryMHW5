window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";

    document.getElementById("restart").addEventListener("click", function(){
        document.getElementById("restart").style.visibility = "hidden";
        document.getElementById("deal").style.visibility = "visible";
        playerScore = 0;
        computerScore = 0;
        j=0;
        document.getElementById("sect").style.backgroundColor = "black";
    })
});

playerArray = [];
computerArray = [];
document.getElementById("deal").addEventListener("click", function(){

        deck.cardArray.length = [];
        playerArray.length = [];
        computerArray.length = [];

    deck.load();
    let random;
    for(i=0; i<26; i++){
        random = Math.floor(Math.random() * (52))
        while (deck.cardArray[random].used === true) {
            random = Math.floor(Math.random() * (52));
        }
        playerArray[i] = deck.cardArray[random];
        deck.cardArray[random].used = true;

        random = Math.floor(Math.random() * (52))
        while (deck.cardArray[random].used === true) {
            random = Math.floor(Math.random() * (52));
        }
        computerArray[i] = deck.cardArray[random];
        deck.cardArray[random].used = true;
    }

    document.getElementById("deal").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";

    console.log(playerArray);
    console.log("---------------------");
    console.log(computerArray);


        let playerScore = 0;
        let computerScore = 0;
        let j=0;
    document.getElementById("next").addEventListener("click", function(){

        let pCard = playerArray[j];
        let cCard = computerArray[j];
        
        if(pCard.rank < cCard.rank){
            computerScore = computerScore + 1;
            document.getElementById("sect").style.backgroundColor = "red";
        } else if(pCard.rank > cCard.rank){
            playerScore = playerScore + 1;
            document.getElementById("sect").style.backgroundColor = "green";
        } else if (pCard.rank === cCard.rank){
            if(pCard.suit < cCard.suit){
                computerScore = computerScore + 1;
                document.getElementById("sect").style.backgroundColor = "red";
            } else if (pCard.Suit > cCard.suit){
                playerScore = playerScore + 1;
                document.getElementById("sect").style.backgroundColor = "green";
            }
        }

        let x;

        switch (pCard.suit) {
            case 1:
              x = "SPADE";
              break;
            case 2:
               x = "CLUB";
              break;
            case 3:
              x = "DIAMOND";
              break;
            case 4:
              x = "HEART";
          }

          let y;

          switch(cCard.suit) {
            case 1:
                y = "SPADE";
                break;
              case 2:
                 y = "CLUB";
                break;
              case 3:
                y = "DIAMOND";
                break;
              case 4:
                y = "HEART";
          }

          let z;

          switch(pCard.rank) {
              case 2:
                z = "2"  ;
                break;
                case 3:
                z = "3";
                break;
              case 4:
                z = "4";
                break;
              case 5:
                z = "5";
                break;
              case 6:
                z = "6"  ;
                break;
            case 7:
                z = "7";
                break;
              case 8:
                z = "8";
                break;
              case 9:
                z = "9";
                break;
              case 10:
                z = "10"  ;
                break;
            case 11:
              z = "JACK";
              break;
            case 12:
              z = "QUEEN";
              break;
            case 13:
              z = "KING";
              break;
            case 14:
              z = "ACE"  ;
              break;
          }

          let xyz;

          switch(cCard.rank) {
            case 2:
              xyz = "2"  ;
              break;
              case 3:
              xyz = "3";
              break;
            case 4:
              xyz = "4";
              break;
            case 5:
              xyz = "5";
              break;
            case 6:
                xyz = "6"  ;
              break;
          case 7:
              xyz = "7";
              break;
            case 8:
              xyz = "8";
              break;
            case 9:
              xyz = "9";
              break;
            case 10:
              xyz = "10"  ;
              break;
          case 11:
            xyz = "JACK";
            break;
          case 12:
            xyz = "QUEEN";
            break;
          case 13:
            xyz = "KING";
            break;
          case 14:
            xyz = "ACE"  ;
            break;
        }

        document.getElementById("pCard").innerHTML = z + " of " + x;
        document.getElementById("cCard").innerHTML = xyz + " of " + y;

        document.getElementById("pScore").innerHTML = playerScore;
        document.getElementById("cScore").innerHTML = computerScore;
        j++;
            
        if(j === 26){
            if(pScore > cScore){
                alert("PLAYER WINS");
            } else if(pScore === cScore){
                alert("TIE");
            } else {
                alert("COMPUTER WINS");
            }
            document.getElementById("next").style.visibility = "hidden";
            document.getElementById("pCard").innerHTML = " ";
            document.getElementById("cCard").innerHTML = " ";

            document.getElementById("pScore").innerHTML = " ";
            document.getElementById("cScore").innerHTML = " ";
            document.getElementById("restart").style.visibility = "visible";
        }

    })

});