// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');

// Add Task Function
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';

  // Task Text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Complete Button
  const completeBtn = document.createElement('button');
  completeBtn.className = 'btn btn-sm btn-success me-2';
  completeBtn.innerHTML = '<i class="bi bi-check-circle"></i>';

  // Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-sm btn-danger';
  deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';

  // Complete Task Functionality
  completeBtn.addEventListener('click', () => {
    // Remove from current list
    listItem.remove();

    // Move to completed tasks list
    taskSpan.classList.add('completed');
    const completedListItem = document.createElement('li');
    completedListItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    completedListItem.appendChild(taskSpan);
    completedListItem.appendChild(deleteBtn);
    completedTaskList.appendChild(completedListItem);
  });

  // Delete Task Functionality
  deleteBtn.addEventListener('click', () => {
    listItem.remove();
  });

  // Append elements
  listItem.appendChild(taskSpan);
  listItem.appendChild(completeBtn);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  // Clear input
  taskInput.value = '';
});
