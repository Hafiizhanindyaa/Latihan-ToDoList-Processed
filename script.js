function addTask() {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('todo-modal').classList.add('active');
    document.getElementById('input-tugas').focus();
}

function closeTask() {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('todo-modal').classList.remove('active');

}

function saveTask() {
    let inputField = document.getElementById('input-tugas');
    let text = inputField.value;

    if (text == '') {
        alert("Tulis dulu tugasnya yaa!");
        return;
    }

    let container = document.querySelector('.area');

    let newTask = document.createElement('div');
    newTask.classList.add('todo-item');

    newTask.innerHTML = `
        <span>${text}</span>
        <i class="ri-delete-bin-line" onclick="this.parentElement.remove()"></i>`;

    container.appendChild(newTask);

    inputField.value = '';
    closeTask();
}

document.getElementById('overlay').addEventListener('click', closeTask);