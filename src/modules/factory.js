document.querySelector('.todo-list').innerHTML = '';
export default class Factory {
    static retrieveToDoList= () => {
      const todolist = JSON.parse(localStorage.getItem('ToDoList'));
      document.querySelector('.todo-list').innerHTML = '';
      for (let i = 0; i < todolist.length; i += 1) {
        todolist[i].Index = i;
        document.querySelector('.todo-list').innerHTML += `
        <div class="list-item-container">
            <div>
            <p class="checkbox-description-item"><input type="checkbox" class="checkbox"><input type="text" id="idinput${i}" disabled class="input-descrption" value="${todolist[i].Description}"></p>
            </div>
            <span id="id${i}" class="menubutton"><i " class="fas fa-ellipsis-v"></i></span>
        </div>
        `;
      }
    }

      static createToDoListItem = (ToDoListItem) => {
        if (localStorage.getItem('ToDoList') === null) {
          const todolist = [];
          todolist.push(ToDoListItem);
          localStorage.setItem('ToDoList', JSON.stringify(todolist));
        } else {
          const todolist = JSON.parse(localStorage.getItem('ToDoList'));
          todolist.push(ToDoListItem);
          localStorage.setItem('ToDoList', JSON.stringify(todolist));
        }
        Factory.retrieveToDoList();
        document.getElementById('form').reset();
      }

      static removeToDoLIstItem = (i) => {
        const todolist = JSON.parse(localStorage.getItem('ToDoList'));
        todolist.splice(i, 1);
        localStorage.setItem('ToDoList', JSON.stringify(todolist));
        Factory.retrieveToDoList();
      }

      static editToDoListItem = (i, Description) => {
        const todolist = JSON.parse(localStorage.getItem('ToDoList'));
        for (let j = 0; j < todolist.length; j += 1) {
          if (i == j) {
            todolist[j].Description = Description;
          }
        }
        localStorage.setItem('ToDoList', JSON.stringify(todolist));
      }

      static AppendDeleteButton = (index) => {
        document.querySelector('.todo-list').innerHTML = '';
        const todolist = JSON.parse(localStorage.getItem('ToDoList'));
        for (let j = 0; j < todolist.length; j += 1) {
          if (j == index) {
            document.querySelector('.todo-list').innerHTML += `
                <div class="list-item-container selected">
                    <div>
                    <p class="checkbox-description-item"><input type="checkbox" class="checkbox"><input  type="text" id="idinput${j}"  class="input-descrption selected" value="${todolist[j].Description}"><button id="IdDeleteButton${j}" class="deleteButton selected"><i class="fa-solid fa-trash-can"></i></button></p>
                    </div>
                    <span id="id${j}" class="menubutton"><i class="fas fa-ellipsis-v"></i></span>
                </div>
                `;
          } else {
            document.querySelector('.todo-list').innerHTML += `
                <div class="list-item-container">
                    <div>
                    <p class="checkbox-description-item"><input type="checkbox" class="checkbox"><input type="text" id="idinput${j}" disabled class="input-descrption" value="${todolist[j].Description}"></p>
                    </div>
                    <span id="id${j}" class="menubutton"><i class="fas fa-ellipsis-v"></i></span>
                </div>
                `;
          }
        }
        const inputFocus = document.getElementById(`idinput${index}`);
        inputFocus.focus();
      }
}
