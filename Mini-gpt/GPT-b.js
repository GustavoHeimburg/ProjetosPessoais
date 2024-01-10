async function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    var systemResponse = await getGpt3Response(userInput);

    setTimeout(function() {
        appendMessage('system', systemResponse);
    }, 500);
}

async function getGpt3Response(userInput) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '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'
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 60
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}

function appendMessage(sender, message) {
    var chatMessages = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.className = sender;
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}
