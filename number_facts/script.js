const form = document.querySelector('#form');

form.addEventListener('submit', getNumber);

async function getNumber(e) {
    e.preventDefault();
    let input = document.querySelector('#num-input').value;
    let url = `http://numbersapi.com/${input}?json`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            results.innerHTML = data.text;
        })
        .catch(err => console.log(err));

    document.querySelector('#num-input').value = '';
}




const favorite_numbers = [3, 4, 30];
async function numbers() {
    fetch(`http://numbersapi.com/${favorite_numbers}?json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}
//numbers();




Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });