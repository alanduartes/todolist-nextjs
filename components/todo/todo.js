import React from 'react'
import Task from './task'

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
        

        console.log(t)
        this.setState({
            tasks: t
        })
    }

    render() {

        let elemRender = []
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