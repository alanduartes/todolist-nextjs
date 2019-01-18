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
                <input type="text" value={this.state.inputValue} onChange={e => this.updateInput(e)}/>
                <button onClick={e => {
                    e.preventDefault()
                    this.props.onClick(this.state.inputValue)}
                }>Add Task</button>
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