function encryptText() {
    const inputText = document.getElementById('textInput').value;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 10; // Genera un número aleatorio entre 10 y 109
        encryptedText += inputText[i] + randomNum;
    }

    document.getElementById('result').innerText = encryptedText;
}