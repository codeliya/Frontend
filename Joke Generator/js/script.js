 const jokeEl = document.getElementById("joke");
    const jokeBtn = document.getElementById("jokeBtn");
   
    const generateJoke = async () => {
      const config = {
        headers: {Accept: "Application/json"},
      };
      const res = await fetch("https://icanhazdadjoke.com", config);
      const data = await res.json();
      jokeEl.innerHTML = data.joke;
    };
    generateJoke();
 jokeBtn.addEventListener("click", () => generateJoke());