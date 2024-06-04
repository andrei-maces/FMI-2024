document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const messages = [
        "Felicitări pentru această realizare deosebită!",
        "Suntem mândri de voi!",
        "Succes în toate proiectele viitoare!",
        "Continuați să străluciți în tot ceea ce faceți!",
        "Fie ca toate visele voastre să devină realitate!"
    ];
    
    let messageIndex = 0;

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            messageElement.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1, callback), 100);
        } else {
            setTimeout(callback, 2000);  // Wait for 2 seconds before calling the callback
        }
    }

    function startTyping() {
        messageElement.innerHTML = '';
        const currentMessage = messages[messageIndex];
        typeWriter(currentMessage, 0, () => {
            messageIndex = (messageIndex + 1) % messages.length;
            startTyping();
        });
    }

    startTyping();
});
