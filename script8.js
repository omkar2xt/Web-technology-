// Show task based on button click
function showTask(taskNumber) {
    const tasks = document.querySelectorAll('.task-section');
    tasks.forEach(task => task.style.display = 'none');
    document.getElementById(`task${taskNumber}`).style.display = 'block';
}

// Dark mode toggle
document.getElementById('darkModeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('darkModeBtn');
    btn.textContent = document.body.classList.contains('dark') ? "☀ Light Mode" : "🌙 Dark Mode";
});

// Task 1
function showGreeting() {
    alert("Hello! You completed Task 1!");
}

// Task 2 - Form handling
document.getElementById("userForm").addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Hello ${name}! Your email ${email} is registered.`);
});

// Task 3 - Calculator
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    switch(operation) {
        case 'add': result = num1 + num2; break;
        case 'sub': result = num1 - num2; break;
        case 'mul': result = num1 * num2; break;
        case 'div': result = num2 !== 0 ? num1 / num2 : 'Infinity'; break;
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}

// Show Task 1 by default
showTask(1);
