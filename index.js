const fan = document.querySelector(".fan");
const text = document.querySelector(".text p");


//--------------------------------------------
// function isOverlapping(element1, element2) {
//     const rect1 = element1.getBoundingClientRect();
//     const rect2 = element2.getBoundingClientRect();

//     return !(
//         rect1.top > rect2.bottom ||
//         rect1.bottom < rect2.top ||
//         rect1.left > rect2.right ||
//         rect1.right < rect2.left
//     );
// }

// function updateTextColor() {
//     const words = text.innerText.split(' ');
//     text.innerHTML = words.map(word => {
//         const span = document.createElement('span');
//         span.textContent = word + ' ';
//         span.style.color = isOverlapping(fan, span) ? 'white' : '#c2a789';
//         return span.outerHTML;
//     }).join('');
// }
//--------------------------------------------

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

        // updateTextColor();
    });
    document.addEventListener('touchmove', (e) => {
        // e.preventDefault();
        // console.log(e.touches);
        fan.style.left = e.touches[0].clientX + "px";
        fan.style.top = e.touches[0].clientY + "px";
        fan.style.transitionDuration = "0.1s";
        // updateTextColor();
    });

    changeText();
}

