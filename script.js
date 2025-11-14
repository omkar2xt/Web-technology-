// SHOW MESSAGES
function showHTMLMessage() {
    alert("HTML builds the structure of your webpage!");
}

function showCSSMessage() {
    alert("CSS adds design and beauty to your webpage!");
}

function showJSMessage() {
    alert("JavaScript adds interactivity and logic!");
}

function task1() {
    alert("Task 1: Create a simple HTML button!");
}

function task2() {
    alert("Task 2: Apply 3 CSS styles to your webpage!");
}

function task3() {
    alert("Task 3: Build a form with name, email & submit.");
}

// NEXT PAGE
function goToNextTask() {
    window.location.href = "index2.html";
}

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("darkModeBtn");
    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
}
