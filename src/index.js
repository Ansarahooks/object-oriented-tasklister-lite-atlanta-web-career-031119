document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
  document.getElementById('create-task-form').addEventListener('submit', handleSubmit)
  renderApp()
});

function handleSubmit(e){
  // debugger
  e.preventDefault()
  let newTask = {task: e.target.taskName.value}
}
