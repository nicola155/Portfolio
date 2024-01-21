function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        const chatDisplay = document.getElementById('chat-display');
        const newMessage = document.createElement('div');
        newMessage.textContent = `You: ${message}`;
        chatDisplay.appendChild(newMessage);

        // You can add code here to send the message to a server or another user

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat display
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
}
