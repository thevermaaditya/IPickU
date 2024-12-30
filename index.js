const fan = document.querySelector(".fan");
const text = document.querySelector(".text p");

if (!fan || !text) {
    console.error("Required elements not found in the DOM.");
} else {
    async function changeText() {
        try {
            const response = await fetch('https://rizzapi.vercel.app/random');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            // console.log('Pickup Line:', data.text);
            text.innerHTML = data.text;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    setInterval(changeText, 10000);

    document.addEventListener('mousemove', (e) => {
        fan.style.left = e.pageX + "px";
        fan.style.top = e.pageY + "px";
        fan.style.transitionDuration = "0.1s";
    });

    changeText();
}