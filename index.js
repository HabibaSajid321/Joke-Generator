const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "NjEmRfCzASVArK58VxKjkQ==eXWOkMiqJzaAz0jA";
const options = {
   method:"GET",
   headers: {
      "X-Api-Key": apiKey,
   },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

 async function getJoke(){

   jokeEl.innerText = "loading"
    const response =await fetch(apiURL, options)
    const data =await response.json()
   //  console.log(data[0].joke); this only shows output in console
   jokeEl.innerText = data[0].joke;
 }

btnEl.addEventListener("click", getJoke)