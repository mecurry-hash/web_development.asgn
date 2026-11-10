const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskListContainer = document.getElementById("task-list");
const errorDisplay = document.getElementById("error-message");
const themeButton = document.getElementById("theme-toggle");

function createTaskElement(taskName, priority) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.classList.add("priority-" + priority);

    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    const priorityBadge = document.createElement("span");
    priorityBadge.classList.add("badge");
    priorityBadge.textContent =
        priority.charAt(0).toUpperCase() + priority.slice(1);

    taskItem.appendChild(taskText);
    taskItem.appendChild(priorityBadge);

    return taskItem;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const taskName = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value.trim();

    errorDisplay.textContent = "";

    if (taskName === "") {
        errorDisplay.textContent = "Please enter a task name.";
        return;
    }

    const newTask = createTaskElement(taskName, priority);

    taskListContainer.appendChild(newTask);

    taskForm.reset();
}

taskForm.addEventListener("submit", handleFormSubmit);

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});