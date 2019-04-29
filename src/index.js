document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();

  // const listContainer = document.getElementById("list");
  // const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
  document.getElementById('create-task-form').addEventListener('submit', handleSubmit)
  // renderApp()
});

let taskList = new TaskList();


function handleSubmit(e){
  e.preventDefault()
  let description = document.querySelector("#new-task-description").value

  let newTask = new TaskListItem(description)
  console.log(newTask)

  taskList.tasks.push(newTask)

  taskList.render()

  e.target.reset()
}
