async function sendMessage() {
    const userMessage = document.getElementById("userInput").value;
    if (!userMessage) return;

    const responseBox = document.getElementById("response");
    responseBox.textContent = "Thinking...";

    try {
        const response = await fetch("https://your-render-api-url/chat", { //flask api goes here
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();
        responseBox.textContent = data.response;
    } catch (error) {
        responseBox.textContent = "Error connecting to server.";
    }
}
