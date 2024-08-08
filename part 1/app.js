                // PART 1

const favNum = 143;
const newFavNum = 888
const numbersApi = "http://numbersapi.com";
const $factsContainer = $('#factsHere')

// Q1
$.getJSON(`${numbersApi}/${favNum}?json`).then(res => {
    factsContainer.append(`<h3>${res.text}</h3>`);
})

// Q2
const favNums = [1, 2, 5];
$.getJSON(`${numbersApi}/${favNums}?json`).then(res => {
  for (let num in favNums) {
    let numKey = favNums[num];
    factsContainer.append(`<h3>${res[numKey]}</h3>`);
  }
});

// Q3
Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${numbersApi}/${newFavNum}?json`);
    })
  ).then(facts => {
    facts.forEach(res => factsContainer.append(`<h3>${res.text}</h3>`));
  });




  

                // PART 2