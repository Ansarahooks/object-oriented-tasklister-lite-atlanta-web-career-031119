class TaskList {
  constructor(tasks = []){
    this.tasks = tasks
  }

  render =()=>{
    let div = document.querySelector('#list')

    let ul = document.createElement('ul')
    
    this.tasks.forEach(task =>{
      ul.appendChild(task.getListItem())
      div.appendChild(ul)
    })
  }
}
