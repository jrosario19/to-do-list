/*
 * @jest-environment jsdom
 */
import ToDoList from '../src/modules/todolist.js';
import Factory from '../src/modules/factory.js';

let initial;
let instantiate;
const intialHtml = `<main class="wrapper">
<div class="headline wrapper">
    <h1>Today's To Do</h1>
    <button class="restart" type="button"><i class="fas fa-sync-alt"></i></button>
</div>
<form class="form wrapper" id="form">
    <input type="text" id="add-input" placeholder="Add to your list..." required>
    <button type="submit" class="btn-add"><i class="fas fa-level-down-alt"></i></button>
</form>
<div class="todo-list" id="todo-list"></div>
<div class="button-clear-container">
    <button class="btn-clear" id="deleteAllComplete" type="button">Clear all complete</button>
</div>

</main>`;
describe('Add to-do list item', () => {
  beforeAll(() => {
    document.body.innerHTML = intialHtml;
    initial = document.querySelectorAll('#todo-list div');
    const toDoListItem = new ToDoList(0, 'Mock Test', false);
    Factory.createToDoListItem(toDoListItem);
  });
  test('Add one new item to the list', () => {
    instantiate = document.querySelectorAll('#todo-list > div');
    expect(instantiate).toHaveLength((initial.length + 1));
  });
  test('Add one new item into Local Storage', () => {
    const arr = JSON.parse(localStorage.ToDoList);
    expect(arr.length).toBe((initial.length + 1));
  });
});

describe('delete a to-do list item', () => {
  beforeAll(() => {
    document.body.innerHTML = intialHtml;
  });

  beforeEach(() => {
    const toDoListItem = new ToDoList(0, 'Mock Test', false);
    Factory.createToDoListItem(toDoListItem);
    initial = document.querySelectorAll('#todo-list > div');
    Factory.removeToDoLIstItem(0);
  });

  test('delete one new item to the list', () => {
    instantiate = document.querySelectorAll('#todo-list > div');
    expect(instantiate).toHaveLength((initial.length - 1));
  });
  test('Remove one item from Local Storage', () => {
    const arr = JSON.parse(localStorage.ToDoList);
    expect(arr).toHaveLength((initial.length - 1));
  });

});
