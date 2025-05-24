// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert("Please enter a valid email address.");
        return;
    }
    alert("Form submitted successfully!");
});

// To-Do List
function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task === '') return;

    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => li.remove();
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}
