function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    let colors = document.querySelectorAll('.color');
    colors.forEach(color => {
        const hexColor = generateRandomColor();
        color.style.backgroundColor = hexColor;

        const hexSpan = color.querySelector('.hex-code');
        hexSpan.textContent = hexColor.toUpperCase();
    });
}

document.getElementById('generateBtn').addEventListener('click', generatePalette);

generatePalette();
