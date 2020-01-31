deck = {

    cardArray: [],
    
    load: function(){

        let rankCount=1;
        let suitCount=1;

        for (suitCount=1; suitCount<5; suitCount++){
            for(rankCount=2; rankCount<15; rankCount++){
            this.cardArray.push(new Card(rankCount, suitCount));
            }
        }
    }
}