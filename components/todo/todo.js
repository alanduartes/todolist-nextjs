import React from 'react'
import Task from './task'
import AddTask from './add-task'

class Todo extends React.Component 
{
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    task_id: 1,
                    task_description: "Starting to build a todo list with NextJS",
                    done: true
                },
                {
                    task_id: 2,
                    task_description: "Build a todo list with NextJS",
                    done: false
                },
                {
                    task_id: 3,
                    task_description: "Build a famous game called Hot and Penguins",
                    done: false
                },
                {
                    task_id: 4,
                    task_description: "Become Fucking Rich",
                    done: false
                },
                {
                    task_id: 5,
                    task_description: "Spend a few months in Bahamas"
                }
            ]
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
            tasks: this.state.tasks.concat([newTask])
        })

        this.render()
    }

    render() {
        let elemRender = [<AddTask key="0" onClick={d => this.addTask(d)} />]
        this.state.tasks.map((task) => {

            elemRender.push(
                <Task
                    task_id={task.task_id}
                    task_description={task.task_description}
                    done={task.done}
                    key={task.task_id}
                    onChange={ () => this.toggleTask(task.task_id) }/>
            )

        })
        return elemRender
    }
}

export default Todo