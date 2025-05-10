    const todoList = [{
        name : 'Learn a Language',
        date : '5-5-2025'},{
        name:'Read Books',
        date:'5-5-2025'}];

renderTodoList()

function renderTodoList(){

let todoListHTML = '';

todoList.forEach(function(todoObject,index){
    const { name , date} = todoObject;
    const html = `
        <div>${name}</div>
        <div>${date}</div>
         
        <button 
        class='js-delete delete-button'
        >Delete</button> 
        `;
    todoListHTML += html

})
//Adding event listeners
document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML
    document.querySelectorAll('.delete-button').forEach((deleteButton , index)=>{
        deleteButton.addEventListener('click',()=>{
             todoList.splice(index,1)
             renderTodoList()
        })
    })

}
    document.querySelector('.add-todo-button').addEventListener('click',()=>{
        addTodo()
    })
    const Addbutton = document.querySelector('.js-input')
    Addbutton.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter'){
            addTodo()
        }        
    })

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
