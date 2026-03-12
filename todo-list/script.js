const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const pendingCount = document.getElementById('pendingCount');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        taskList.appendChild(li);
    });

}

function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push(text);
        renderTasks();
        taskInput.value = '';
    }
}

addBtn.addEventListener('click', addTask);

renderTasks();
