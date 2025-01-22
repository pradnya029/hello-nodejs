// Existing code
console.log("Hello, Node.js!");

// New function to display the current date and time
function displayDateTime() {
    const now = new Date();
    return `Current Date and Time: ${now.toLocaleString()}`;
}

// Example usage of the new function
console.log(displayDateTime());
