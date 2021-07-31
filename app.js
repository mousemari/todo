//selectors

let input = document.querySelector('.addItem__input');
let submit = document.querySelector('.addItem__submit');
let todoList = document.querySelector('.todo');

//eventListener
submit.addEventListener('click', addTodo);

function addTodo() {
  let value = input.value;
  if (value === '') return;
  createItem(value);
  input.value = '';
}

function createItem(value) {
  //let item = document.createElement();
  const item = document.createElement('div');
  item.className = 'todo__item';
  todoList.appendChild(item);

  //btn "done"
  const done = document.createElement('button');
  done.className = 'todo__done';
  done.innerHTML = '<i class="material-icons">done</i>';
  item.appendChild(done);

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
}