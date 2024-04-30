document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    
    function addMessage(message, className) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", className);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; 
    }

    
    function getCurrentDateTime() {
        const now = new Date();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
        return now.toLocaleDateString("en-US", options);
    }

    
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message === "") return; 
        addMessage("You: " + message, "user-message");
        userInput.value = ""; 
        
        addMessage("Jamie: " + message, "bot-message");
    }

    
    sendBtn.addEventListener("click", handleUserInput);

    
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });

    
    addMessage("Jamie: Welcome! How can I help you?", "bot-message");
    addMessage("Current date and time: " + getCurrentDateTime(), "bot-message");
});
