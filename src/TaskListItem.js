class TaskListItem {
  constructor(taskName, id){
    this.taskName = taskName
    this.id = id
  }
  getListItem =()=>{
    let li = document.createElement('li')
    li.innerText = this.taskName
    return li
  }
}
