let wordApi = `https://wordsapiv1.p.rapidapi.com/words/?random=true`;
let giphyApi = `https://api.giphy.com/v1/gifs/search?limit=5&lang=en&api_key=ZJdNXQ9RoA1SH5SXdviY0T9CTcH7u5Ka`;

function setup() {
  noCanvas();
  noLoop();

  fetch(wordApi, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "b71c5f9541mshc3b53af83868f4ap118804jsna47b53c44a6b"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(jWord => {
      let p = createP(jWord.word);
      p.parent("wordPlaceHolder");
      return fetch(giphyApi + "&q=" + jWord.word);
    })
    .then(response => {
      return response.json();
    })
    .then(giphy => {
      let img = createImg(giphy.data[0].images["original_still"].url);
      img.parent("imgPlaceHolder");
    })
    .catch(err => {
      let p = createP("Image Not Found");
      p.style('color','red');
      p.parent("imgPlaceHolder");
      console.log(err);
    });
}
