class TaskList {
  constructor(tasks = []){
    this.tasks = tasks
  }
// THIS(BELOW) ONE IS WORKING
  // render =()=>{
  //   let div = document.querySelector('#list')
  //   let ul = document.querySelector("#ul")
  //   ul.innerHTML = ""
  //   this.tasks.forEach(task => {
  //     ul.appendChild(task.getListItem())
  //   })
  //   div.appendChild(ul)

  render =()=>{
    let div = document.querySelector('#list')

    if (div.hasChildNodes()) {
      let ul = div.querySelector("ul")
      ul.innerHTML = ''
      this.tasks.forEach(task =>{
        ul.appendChild(task.getListItem())
      })
      div.appendChild(ul)
    } else {
      let ul = document.createElement('ul')
      ul.innerHTML = ''
      this.tasks.forEach(task =>{
        ul.appendChild(task.getListItem())
      })
      div.appendChild(ul)
    }
  }
}
