    const todoList = [{
        name : 'Learn a Language',
        date : '5-5-2025'},{
        name:'Read Books',
        date:'5-5-2025'}];

renderTodoList()

function renderTodoList(){

let todoListHTML = '';

for(let i=0; i<todoList.length ; i++){
    const todoObject = todoList[i]
    const { name , date} = todoObject;
    // const html = `<p>${todo}</p>`
    const html = `
        <div>${name}</div>
        <div>${date}</div>
         
        <button onClick="
        todoList.splice(${i},1)
        renderTodoList()
        " 
        class='js-delete'
        >Delete</button> 
        `;
    todoListHTML += html
}
 console.log(todoListHTML)

 document.querySelector('.js-todo-list')
 .innerHTML = todoListHTML

}

function addTodo(){

   const inputEle = document.querySelector('.js-input')
   const name = inputEle.value

    const inputDate = document.querySelector('.js-date-input')
    const date = inputDate.value

   todoList.push({
    name,
    date 
   })
   console.log(todoList)

   inputEle.value=" ";

   renderTodoList()
}
