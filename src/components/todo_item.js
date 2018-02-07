import React from 'react';

class TodoItem extends React.Component{
  state = {currentTime: 0, status: false }
  handleStartTodo = () => {
    this.setState(({status}) => {
      if (status) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.currentTime
        this.timer = setInterval(() => {
          this.setState({ currentTime: Date.now() - startTime })
        })
      }
      return { status: !status }
    })
  }

  handleDoneTodo = () => {

  }

  render() {
    const { currentTime, status } = this.state
    const { item } = this.props
    return (
      <div className="todo-list">
        <h2>Your todo lists include:</h2>
        <div>
          {item.map(i => (
            <div key={i.toString()}>
              {i}
              <button 
                onClick={this.handleStartTodo}
              >
                { status ? 'Pause' : 'Start' }
              </button>
              <button>Done</button>
              <div>
                { currentTime }
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}


export default TodoItem