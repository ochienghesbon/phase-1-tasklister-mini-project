document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector('form');
    submit.addEventListener("submit", (e) => {
        e.preventDefault()
        createToDo()
        submit.reset()
    })

    function createToDo() {
        const input = document.getElementById("new-task-description");
        const newTask = document.createElement('li');
        const deleteBtn = document.createElement('button');

        newTask.textContent = `${input.value}       `;
        document.getElementById('tasks').appendChild(newTask);


        deleteBtn.textContent = "DONE";
        newTask.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => newTask.remove());

    }
});
