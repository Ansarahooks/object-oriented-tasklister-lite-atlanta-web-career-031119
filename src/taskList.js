class TaskList {
    constructor (tasks = []) {
        this.tasks = tasks
    }

    render () {
        const taskList = document.querySelector("#list")
            this.tasks.forEach(task => {
                console.log("task view", task.getTaskView())
                taskList.appendChild(task.getTaskView())
            })

    }
}
