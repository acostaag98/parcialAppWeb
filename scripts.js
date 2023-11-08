let tasks = [];
let taskIdCounter = 1;

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const deadline = document.getElementById('deadline').value;
    const status = document.getElementById('status').value === 'true';

    
    if (title.trim() === '' || deadline.trim() === '') {
        alert('Por favor, ingrese tanto el título como la fecha para agregar una tarea.');
        return;
    }

    const task = {
        id: taskIdCounter++,
        title: title,
        description: description,
        deadline: deadline,
        status: status
    };

    tasks.push(task);
    displayTasks();
    clearForm();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('status').checked = true;
}

function displayTasks() {
    const taskList = document.querySelector('.task-table tbody');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskRow = document.createElement('tr');

        
        taskRow.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td>${task.status ? 'Por realizar' : 'En progreso'}</td>
            <td>
                <button onclick="completeTask(${task.id})">Eliminar</button>
            </td>
        `;

        taskList.appendChild(taskRow);
    });
}


function completeTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        displayTasks();
    }
}
