//selectors

let input = document.querySelector('.addItem__input');
let submit = document.querySelector('.addItem__submit');
let todoList = document.querySelector('.todo');

//eventListeners
submit.addEventListener('click', addTodo);

function addTodo() {
  let value = input.value;
  if (value === '') return;
  createItem(value);
  input.value = '';
}

function createItem(value) {
  //let item = document.createElement();
  const newLi = document.createElement('li');
  todoList.appendChild(newLi);

  const item = document.createElement('ul');
  item.className = 'todo__item';
  newLi.appendChild(item);

  //btn "done"
  const done = document.createElement('button');
  done.className = 'todo__done';
  done.innerHTML = '<i class="material-icons">done</i>';
  item.appendChild(done);

  done.addEventListener('click', doneItem);

  function doneItem() {
    done.className = 'todo__done_checked';
    li.classList.add('todo__value_checked');

    todoList.appendChild(newLi); //if done then move to the end of list
  }

  //value
  const li = document.createElement('li');
  li.className = 'todo__value';
  li.textContent = value;
  item.appendChild(li);

  //btn "delete"
  const remove = document.createElement('button');
  remove.className = 'todo__remove';
  remove.innerHTML = '<i class="material-icons">delete</i>';
  item.appendChild(remove);

  remove.addEventListener('click', removeItem);

  function removeItem() {
    const todoItem = item.parentElement;
    todoItem.remove();
  }
}
