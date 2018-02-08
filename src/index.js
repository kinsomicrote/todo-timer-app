import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/todo_item'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { todoList: [] }
    this.handleDoneTodo = this.handleDoneTodo.bind(this)
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const value = (event.target.elements.todoitem.value)
    this.state.todoList.push(value)
    this.setState(({todoList}) => ({
      todoList: todoList
    }))
  }

  //TODO: Clear form input box after submission
  clearFormInput = () => {
    
  }

  handleDoneTodo = () => {
    console.log('...handle todo')
  }

render() {
  //const { todoList } = this.props

    return (
      <div>
        <div className="todo-form">
          <h2>Create a Todo</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Todo Item</label>
              <input
                type="text"
                name="todoitem"
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <TodoItem
          action={this.handleDoneTodo}
          item={this.state.todoList}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
