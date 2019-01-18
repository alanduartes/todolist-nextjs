const Task = (props) => (
    <div className="todo-task">
        <span><input id={props.task_id} 
                     type="checkbox" 
                     name="cbo-task" 
                     onChange={props.onChange}
                     defaultChecked={props.done}/></span>
        <span className={props.done ? 'task-done' : ''}>{ props.task_description }</span>
    </div>
)

export default Task