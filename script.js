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

    newTask.setAttribute('onclick', 'toggleStatus(this)');

    newTask.innerHTML = `
        <span>${text}</span>
        <i class="ri-delete-bin-line" onclick="hapusTugas(this, event)"></i>`;

    container.appendChild(newTask);

    inputField.value = '';
    closeTask();
}

function hapusTugas(elementIcon, event) {
    event.stopPropagation();
    if (confirm("Yakin mau hapus tugas ini?")) {
        elementIcon.parentElement.remove();
    }
}

function toggleStatus(elemenTeks) {
    elemenTeks.classList.toggle('completed');
}

// Kita bungkus pakai DOMContentLoaded
// Artinya: "Tunggu sampai semua HTML jadi, baru jalankan kode di dalamnya"
document.addEventListener("DOMContentLoaded", function() {
    
    let inputField = document.getElementById('input-tugas');
    
    // Aku ganti 'keypress' jadi 'keydown' (lebih responsif dan standar baru)
    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // Panggil saveTask, dia sudah punya pengecekan teks kosong di dalamnya
            saveTask();
        }
    });

});

document.getElementById('overlay').addEventListener('click', closeTask);