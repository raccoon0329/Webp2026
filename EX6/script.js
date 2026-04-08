const container = document.getElementById('container');

// Helper to generate random characters (a-z)
function generate_random_chars(count) {
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < count; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}

// Function to add new characters (Page 46, point 4)
function add_new_chars(min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const newStr = generate_random_chars(count);
    container.textContent += newStr;
}

// Initial setup on window load (Page 45, point 2)
window.onload = function() {
    // Generate 0 to 2 characters (Page 45, point 2)
    add_new_chars(0, 2);
    // Focus for easy input
    container.focus();
    console.log("Page loaded, initial container content:", container.textContent);
};

// Keyup event handler (Page 45-47)
window.addEventListener("keyup", function(e) {
    console.log("User pressed key:", e.key);
    
    // Get the current text
    let currentStr = container.textContent;
    
    if (currentStr.length > 0) {
        // If current input matches the FIRST character (Page 45, point 3)
        if (e.key === currentStr.charAt(0)) {
            // Remove the first character (Page 45, point 3)
            container.textContent = currentStr.substring(1);
            console.log("Matched! First character removed.");
        } else {
            console.log("Mismatch.");
        }
    }
    
    // Randomly generate 1 to 3 characters and append (Page 46, point 4)
    add_new_chars(1, 3);
});
