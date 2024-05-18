document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.task-input');
    const addButton = document.querySelector('.add-button');
    const todoList = document.querySelector('.todo-list');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskName = taskInput.value.trim();
        if (taskName === '') {
            alert('Please enter a task name');
            return;
        }

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        checkbox.addEventListener('click', () => {
            checkbox.classList.toggle('completed');
        });

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task');
        taskSpan.textContent = taskName;

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        timeSpan.textContent = currentTime;

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa', 'fa-trash', 'delete-icon');
        deleteIcon.addEventListener('click', () => {
            todoItem.remove();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(taskSpan);
        todoItem.appendChild(timeSpan);
        todoItem.appendChild(deleteIcon);

        todoList.appendChild(todoItem);
        taskInput.value = '';
    }
});
