import React from 'react'

class AddTask extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    render()
    {
        return (
            <form>
                <div onClick={this.props.archive} className="todo-archive">Archive</div>
                <input type="text" value={this.state.inputValue} onChange={e => this.updateInput(e)}/>
                <button onClick={e => {
                        e.preventDefault()
                        this.props.onClick(this.state.inputValue)
                        this.setState({
                            inputValue: ''
                        })
                    }}>
                    Add Task
                </button>
                <style jsx>
                {`
                    .todo-archive {
                        color: blue;
                        font-size: 1.1em;
                    }

                    .todo-archive:hover {
                        cursor: pointer;
                    }
                `}
                </style>
            </form>
        )
    }

    updateInput(e)
    {
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default AddTask