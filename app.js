const num = document.getElementById('num');
const adviceInput = document.getElementById('advice');
const dice = document.getElementById('dice');

const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    const { slip } = data;
    const { id, advice } = slip;
    num.textContent = "#" + id;
    adviceInput.textContent = advice;
    console.log("Clicked");
}

fetchData();

dice.addEventListener('click', fetchData);
