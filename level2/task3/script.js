function getCurrentTime() {
    let now = new Date();
    return now.toLocaleString();
}

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let li = createTaskElement(taskText, getCurrentTime());
    document.getElementById("pendingList").appendChild(li);

    input.value = "";
}

function createTaskElement(text, time) {
    let li = document.createElement("li");

    let content = document.createElement("span");
    content.innerText = text + " (" + time + ")";

    let actions = document.createElement("div");
    actions.className = "task-actions";

    // Complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = () => {
        document.getElementById("completedList").appendChild(li);
    };

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => {
        let newTask = prompt("Edit task:", text);
        if (newTask) {
            content.innerText = newTask + " (" + getCurrentTime() + ")";
        }
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(content);
    li.appendChild(actions);

    return li;
}