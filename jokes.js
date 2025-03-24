async function fetchJoke(category) {
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
        const data = await response.json();
        
        let jokeText = "";
        if (data.type === "single") {
            jokeText = data.joke;
        } else {
            jokeText = `${data.setup} ... ${data.delivery}`;
        }
        
        document.getElementById("joke-text").textContent = jokeText;
        
        if (category === "Any") {
            document.getElementById("joke-title").textContent = "Joke Of The Day";
        } else if (category === "Pun") {
            document.getElementById("joke-title").textContent = "A Random Pun";
        } else {
            document.getElementById("joke-title").textContent = `A Random ${category} Joke`;
        }
    } catch (error) {
        document.getElementById("joke-text").textContent = "Failed to load joke. Please try again.";
    }
}

window.onload = () => fetchJoke("Any");