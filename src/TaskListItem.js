class TaskListItem {
  constructor(taskName, id){
    this.taskName = taskName;
    this.id = id
  }
  getListItem =()=>{
    let li = document.createElement('li')
    li.innerText = this.taskName
    let deleteButton = document.createElement('button')
    deleteButton.innerText = "X"
    deleteButton.id = "delete-button"
    deleteButton.addEventListener('click', (e)=>{
        e.target.parentElement.remove()
    })
    li.appendChild(deleteButton)
    return li
  }
}
