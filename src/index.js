import './style.css';

const listItemsContainer = document.querySelector('.todo-list');

const TaskList = [{
  Index: 0,
  Description: 'Task 1',
  Complete: false,
}, {
  Index: 1,
  Description: 'Task 3',
  Complete: false,
}, {
  Index: 2,
  Description: 'Task 3',
  Complete: false,
}, {
  Index: 3,
  Description: 'Task 4',
  Complete: false,
}, {
  Index: 4,
  Description: 'Task 5',
  Complete: false,
}, {
  Index: 5,
  Description: 'Task 6',
  Complete: false,
}];

function itemList(item) {
  return `
  <div class="list-item-container">
    <div>
        <p class="checkbox-description-item"><input type="checkbox" class="checkbox"><input type="text" readonly class="input-descrption" value="${item.Description}"></p>
    </div>
    <span><i class="fas fa-ellipsis-v"></i></span>
  </div>
      
    `;
}

listItemsContainer.innerHTML = `${TaskList.map(itemList).join('')}`;