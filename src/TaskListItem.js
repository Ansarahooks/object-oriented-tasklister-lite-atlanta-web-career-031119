class TaskListItem {
    constructor (description) {
        this.description = description
    }

    getTaskView () {
        
        let ul = document.createElement("ul")

        let li = document.createElement("li")

        li.innerText = this.description

        ul.appendChild(li)

        return ul
    }
}
