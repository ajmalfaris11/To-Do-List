document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.taskInput');
    const timeInput = document.querySelector('.timeInput');
    const addButton = document.querySelector('.addButton');
    const toDoList = document.querySelector('.toDoList');
    const completedList = document.querySelector('.completedList');
    const urgencySelect = document.querySelector('.urgencySelect');
    const unCompletedTask = document.querySelector('.unCompletedTask');
    const completedTask = document.querySelector('.completedTask')
    const selectedMenu = document.querySelector('.selectedMenu');
    const error = document.querySelector('.error');


    // change the task section and completed task sections 

    unCompletedTask.addEventListener('click',()=>{
        unCompletedTask.classList.add('selectedMenu');
        completedTask.classList.remove('selectedMenu')
        completedList.style.display = 'none';
        toDoList.style.display = 'block';

    })

    completedTask.addEventListener('click',()=>{
        completedTask.classList.add('selectedMenu');
        unCompletedTask.classList.remove('selectedMenu')
        completedList.style.display = 'block';
        toDoList.style.display = 'none';
    })


    // Initialize flatpickr for the time input
    flatpickr(timeInput, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        onOpen: function(selectedDates, dateStr, instance) {
            instance.setDate(new Date());
        }
    });

    // Add button action
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Functions after click the add button
    function addTask() {
        const taskName = taskInput.value.trim();
        const completionTime = timeInput.value.trim();
        if (taskName === '') {
            taskInput.placeholder = '⚠ Enter Your Task Before Add';
            taskInput.classList.add ('error');
            return;
        }

        taskInput.addEventListener('input', () => {
            taskInput.placeholder = 'Task Name';
            taskInput.classList.remove('error');
        });

        // Task Box
        const toDoItem = document.createElement('li');
        toDoItem.classList.add('toDoItem');

        // Check Box created with div and set Actions
        const checkBox = document.createElement('div');
        checkBox.classList.add('checkBox');
        checkBox.addEventListener('click', () => {
        checkBox.classList.toggle('completed');

        // Time of when completed task
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let completedTimeSpan = toDoItem.querySelector('.time.completed-time');

        if (checkBox.classList.contains('completed')) {
            if (!completedTimeSpan) {
                completedTimeSpan = document.createElement('span');
                completedTimeSpan.classList.add('time', 'completed-time');
                completedTimeSpan.textContent = currentTime;
                toDoItem.appendChild(completedTimeSpan);
            }
            completedList.appendChild(toDoItem);
        } else {
            if (completedTimeSpan) {
                toDoItem.removeChild(completedTimeSpan);
            }
            toDoList.appendChild(toDoItem);
        }
    });


    // Task text showing 
    const taskSpan = document.createElement('p');
    taskSpan.classList.add('task');
    taskSpan.textContent = taskName;

    // Time showing 
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('time');
    timeSpan.textContent = completionTime;



    } 

});