import './style.css';
import ToDoList from './modules/todolist.js';
import Factory from './modules/factory.js'

const listItemsContainer = document.querySelector('.todo-list');
const addinput = document.getElementById('add-input');


document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.getElementById('add-input').value;
  const todolist = JSON.parse(localStorage.getItem('ToDoList'));
  let toDoListItem;
  if(todolist==null){
    toDoListItem = new ToDoList(0,description,false);  
  }else{
    toDoListItem = new ToDoList(todolist.length,description,false);
  }
  Factory.createToDoListItem(toDoListItem);
  addEventListenerToButton();
});
const addEventListenerToButton = () => {
  const menuButtons = document.querySelectorAll('.menubutton');
  menuButtons.forEach((item) => {
    item.addEventListener('click', () => {
      
      const index = item.id.slice(-item.id.length + 2);
      
      Factory.AppendDeleteButton(index);
      addEventListenerToButton();
      
    });
  });
  addEventListenerToDeleteButton();
};

const addEventListenerToDeleteButton = () => {
  const deleteButton = document.querySelector('.deleteButton');
  console.log('entro a deletebutton');
  if(deleteButton!==null){
    deleteButton.addEventListener('click', () => {
      
      const index = deleteButton.id.slice(-deleteButton.id.length + 14);
      
      Factory.removeToDoLIstItem(index);
      addEventListenerToDeleteButton();
      addEventListenerToButton();
      
    });
  }
  
  
};

window.onload = () => {
  addEventListenerToButton();
};


Factory.retrieveToDoList();
addEventListenerToButton();

