const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('#todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click', () => {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const todoItem = document.createElement('li');
  todoItem.innerText = todoInput.value;
  todoItem.classList.add('todo-item');
  todoDiv.appendChild(todoItem);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);

  todoInput.value = '';

  todoList.addEventListener('click', (e) => {
    const item = e.target;
    //delete
    if (item.classList[0] === 'delete-btn') {
      const todo = item.parentElement;
      todo.classList.add('fall');
      todo.addEventListener('transitionend', () => {
        todo.remove();
      });
    }
    //check todo
    if (item.classList[0] === 'complete-btn') {
      const todo = item.parentElement;
      todo.classList.toggle('completed');
    }
  });

  filterOption.addEventListener('click', (e) => {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
      switch (e.target.value) {
        case 'all':
          todo.style.display = 'flex';
          break;
        case 'completed':
          if (todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
        case 'uncompleted':
          if (!todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
      }
    });
  });
});
