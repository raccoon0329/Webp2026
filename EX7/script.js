const container = document.getElementById('container');
let counter = 0;

// Function to generate random characters (Page 12 pattern)
function add_new_chars(x, b = true) {
    let n = x;
    if (b) {
        n = Math.floor(Math.random() * x) + 1;
    }
    let str = '';
    for (let i = 0; i < n; i++) {
        // Generate a-z (97-122)
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}

// Initial setup on window load
window.onload = function() {
    // Generate initial random characters
    container.textContent = add_new_chars(3);
    // Focus for easy input
    container.focus();
};

// Keyup event handler (Modified for EX7)
window.addEventListener("keyup", function(e) {
    // Get the first character in the container
    let firstone = container.textContent.substring(0, 1);
    
    // Check if the pressed key matches the first character
    if (e.key === firstone) {
        // Correct match: remove the first character and reset counter
        container.textContent = container.textContent.substring(1, container.textContent.length);
        counter = 0;
        console.log("Matched! Counter reset.");
    } else {
        // Mismatch: increment counter and append the wrong key
        container.textContent += e.key;
        console.log("Mismatch! Counter:", counter + 1);
        
        // If 3 consecutive errors (counter++ >= 2 means 0, 1, 2 hits)
        if (counter++ >= 2) {
            // Add extra 6 characters penalty as shown in PDF Page 12 code
            // (Page 9 says 3 extra, but Page 12 code shows 6. I'll use 6 as per sample code)
            container.textContent += add_new_chars(6, false);
            counter = 0; // Reset after penalty
            console.log("3 errors! Penalty added.");
        }
    }
    
    // Always add 1 to 3 random characters as per requirement
    container.textContent += add_new_chars(3);
});
