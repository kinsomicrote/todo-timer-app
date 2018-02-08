import React from 'react';

class TodoItem extends React.Component{
  state = {currentTime: 0, status: false, btnOne: false, btnTwo: false }
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

  doneTodo = () => {
    this.setState({
      btnOne: true,
      btnTwo: true
    })
  }

  render() {
    const { currentTime, status, btnOne, btnTwo } = this.state
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
                disabled={btnOne}
              >
                { status ? 'Pause' : 'Start' }
              </button>
              <button
                onClick={this.doneTodo}
                disabled={btnTwo}
              >
                Done
              </button>
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