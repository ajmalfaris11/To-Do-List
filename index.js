document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.taskInput');
    const timeInput = document.querySelector('.timeInput');
    const addButton = document.querySelector('.addButton');
    const toDoList = document.querySelector('.toDoList');
    const completedList = document.querySelector('.completedList');
    const urgencySelect = document.querySelector('.urgencySelect');
    const unCompletedTask = document.querySelector('.unCompletedTask');
    const completedTask = document.querySelector('.completedTask')
    const selectedMenu = document.querySelectorAll('.selectedMenu');


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


});