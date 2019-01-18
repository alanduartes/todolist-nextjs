import React from 'react'
import Task from './task'
import AddTask from './add-task'

class Todo extends React.Component 
{
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        let tasks = localStorage.getItem('nexttodo')
        if (tasks !== '') {
            tasks = JSON.parse(tasks)
            this.setState({
                tasks
            })
        }
    }
    

    toggleTask(id) {
        const t = this.state.tasks.filter((task) => {
            if (task.task_id === id) {
                if (task.done) task.done = false
                else task.done = true
            }
            return this        
        })
        
        this.setState({
            tasks: t
        })

        this.saveLocalStorage(this.state.tasks)
    }

    addTask(description) {
        let newTask = {}
        let largest = 0
        this.state.tasks.filter((task) => {
            if (task.task_id > largest) {
                largest = task.task_id
            }
        })
        
        newTask = {
            task_id: (largest+1),
            task_description: description,
            done: false
        }

        this.setState({
            tasks: this.state.tasks.concat(newTask)
        })

        this.saveLocalStorage(this.state.tasks.concat(newTask))
    }

    saveLocalStorage(list)
    {
        localStorage.setItem('nexttodo', JSON.stringify(list))
    }

    render() {
        let elemRender = [<AddTask key="0" onClick={desc => this.addTask(desc)} />]
        
        this.state.tasks.map((task) => {
            elemRender.push(
                <Task
                    key={task.task_id}
                    task_id={task.task_id}
                    task_description={task.task_description}
                    done={task.done}
                    onChange={ () => this.toggleTask(task.task_id) }/>
            )
        })
        return elemRender
    }
}

export default Todo