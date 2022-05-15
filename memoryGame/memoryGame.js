const cardArray = [ //létrehozom a tömböt
    {
        name : 'fries',
        img : 'memoryGameImages/fries.png',
    },
    {
        name : 'cheeseburger',
        img : 'memoryGameImages/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : 'memoryGameImages/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'memoryGameImages/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'memoryGameImages/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'memoryGameImages/pizza.png',
    },
    {
        name : 'fries',
        img : 'memoryGameImages/fries.png',
    },
    {
        name : 'cheeseburger',
        img : 'memoryGameImages/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : 'memoryGameImages/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'memoryGameImages/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'memoryGameImages/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'memoryGameImages/pizza.png',
    },
]

function shuffle(cardArray) { //a very efficient shuffling solution
    var m = cardArray.length, t, i;
    while(m) {
        i = Math.floor(Math.random() * m--);
        t = cardArray[m];
        cardArray[m] = cardArray[i];
        cardArray[i] = t;
    }
    return cardArray;
}

//cardArray.sort(() => 0.5 - Math.random()); //-> very bad shuffling solution 

//shuffle(cardArray);
//console.log(cardArray);
//console.log(shuffle(cardArray));

const gridDisplay = document.querySelector('#grid'); //ebben a változóban mentem el a grid nevű html elemet

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img'); //a createEmelent hozza létre a képeket, img-típusú elementként
        card.setAttribute('src', 'memoryGameImages/images/blank.png'); //itt adom meg, hogy milyen forrást rendelek a képhez
        card.setAttribute('data-id', i); //az iterátort adom meg neki a card-kép id-jaként
        card.addEventListener('click', flipCard); //call the method only as a callback (without parenthesis)
        gridDisplay.appendChild(card); //hozzáadom a gridDisplayhez az összes kártyát
    }
}

createBoard();

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
   
}