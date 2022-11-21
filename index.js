const reducer = (a, b) => a + b; //Takes two variables and returns their sum.

const handTotal = hand => {
    const total = [];
    let aces = 0;//This is the number of Aces on hand.

    hand.forEach((item) => {
        let cardValue = parseInt(item);

        switch (true) {
            case item == 'A':
                aces++;
                let currentTotal = total.reduce(reducer, 0); //Calculates the current total of a hand...
                if (currentTotal < 12 && aces >= 1) {
                    cardValue = 11
                    total.push(cardValue)
                } else {
                    cardValue = 1
                    total.push(cardValue)
                }
                break;

            case item <= 10:
                total.push(cardValue)
                break;

            case item == 'J' || item == 'K' || item == 'Q':
                cardValue = 10
                total.push(cardValue)
                break;
        
            default:
        }
    })

    return total;
}

const determineWinner = (dealerHand, playerHand) => {
    const dealer_hand = dealerHand.reduce(reducer);
    let win = "Beats dealer";
    let loss = "Loses";
    const tie = "Tied with dealer";
    let handItem = playerHand.forEach();

    playerHand.forEach((item, player) => {
        let player_hand = item.reduce(reducer);
        let playerName = playerID(player);

        if (item.length >= 5 && player_hand <= 21) {
            console.log(`${playerName}: ${item}
                Hand totals to: ${player_hand}
                ${win}`
            );
        } else if (player_hand > dealer_hand && player_hand <= 21) {
            console.log(`${playerName}: ${item}
                Hand totals to: ${player_hand}
                ${win}`
            );
        } else if (player_hand == dealer_hand) {
            console.log(`${playerName}: ${item}
                Hand totals to: ${player_hand}
                ${tie}`
            );
        } else {
            console.log(`${playerName}: ${handItem}
                Hand totals to: ${player_hand}
                ${loss}`
            );
        }
    })
}

function playerID(player) {
    let name = "";

    if (player == "0") {
        name = "Anrew";
    } else if (player == "1") {
        name = "Billy";
    } else if (player == "2") {
        name = "Carla";
    } else if (player == "3") {
        name = "Lemmy";
    } else {
        name = "Unknown Player";
    }

    return name;
}

const getHand = hand => handTotal(hand);

(testCase = () => {
    const dealer = getHand(['J', '9']);

    const andrew = getHand(['K', '4', '4']);
    const billy = getHand(['2', '2', '2', '4', '5']);
    const carla = getHand(['Q', '6', '9']);
    const lemmy = getHand(['A','7','A'])

    determineWinner(dealer, [andrew, billy, carla, lemmy]);
})();

/* function Player(name, score, result) {
    this.firstName = name;
    this.score = score;
    this.result = result;
} */