const jokes = [
    "I used to hate facial hair… but then it grew on me.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "I tried to catch fog yesterday… Mist.",
    "Why did the bicycle fall over? Because it was two tired.",
    "I once had a job crushing cans. It was soda pressing.",
    "Why did the math book look sad? Because it had too many problems.",
    "I told my dog a joke. He said it was ruff.",
    "I bought shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "I used to play piano by ear, but now I use my hands.",
    "Why did the coffee file a police report? It got mugged.",
    "I used to be addicted to soap… but I'm clean now.",
    "Why did the stadium get hot after the game? All the fans left."
];

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function displayJoke() {
    document.getElementById('joke').textContent = getRandomJoke();
}

document.getElementById('newJokeBtn').addEventListener('click', displayJoke);

displayJoke();
