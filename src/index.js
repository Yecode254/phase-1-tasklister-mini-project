document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTask = document.createElement("li");
    const newTaskDescription = document.querySelector("#new-task-description");
    newTask.innerText = newTaskDescription.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", function () {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    form.reset();
  });
});
