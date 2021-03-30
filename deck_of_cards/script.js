let deckID;

const button = document.querySelector("button");
button.addEventListener("click", getCard);

axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => {
    deckID = res.data.deck_id;
  })
  .catch((err) => {
    console.log(err);
  });

function getCard() {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then((res) => {
      let list = document.querySelector("#cards");
      let newLi = document.createElement("li");
      newLi.innerText = `The ${res.data.cards[0].value} of ${res.data.cards[0].suit}`;

      list.append(newLi);
    })
    .catch((err) => {
      console.log(err);
    });
}