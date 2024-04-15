const taskContainer = document.querySelector('#taskContainer');
const input = document.querySelector('#input');
const addTaskButton = document.querySelector('#button');
addTaskButton.addEventListener('click', addTaskButtonClicked);
let tasks = [];

window.onload = () => {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
};

function addTaskButtonClicked() {
    if (input.value === '') {
        return false;
    } else {
        const taskText = input.value.trim();
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        addTask(taskText);
        input.value = '';
    }
}

function addTask(task) {

    const para = document.createElement('p');
    para.id = 'list';
    taskContainer.appendChild(para);
   

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id='inner';
    para.appendChild(checkbox);

    para.appendChild(document.createTextNode(task));
    
    const button = document.createElement('button');
    button.id='lose';

    const img = document.createElement("img");
    img.src="src/pngegg (4).png"
    button.appendChild(img);
    
    button.onclick = () => {
        para.style.textDecoration = 'line-through';
        checkbox.checked = true; 
        removeTask(task);
        taskContainer.removeChild(para);
        // para.removeChild(checkbox);
        // para.removeChild(button);
    };
    para.appendChild(button);

    taskContainer.appendChild(para);

     

    

     

    // para.innerText = task;

    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        checkbox.checked = true;
        // removeTask(task);
    });

    checkbox.addEventListener('change', () => {
        para.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    button.addEventListener('click', () => {
        taskContainer.removeChild(para);
        // para.removeChild(checkbox);
        removeTask(task);
    });
}

function removeTask(task) {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




       

