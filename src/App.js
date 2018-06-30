import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addTodo, toggleTodo } from './redux/actions';
import TodoList from './TodoList';
import { VisibilityFilters } from './redux/constants/ActionTypes';

class App extends Component {
  state = {
    inputText: '',
  };

  onChangeHandlerText = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  }

  onClickHandler = () => {
    const { inputText } = this.state;
    this.props.addTodo(inputText);
    this.setState({
      inputText: '',
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputText} onChange={this.onChangeHandlerText} />
          <input type="button" value="Add" onClick={this.onClickHandler} />
        </div>
        <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo}/>
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

// const mapDispatchToProps = {
//   addTodo,
//   toggleTodo,
// }

const mapDispatchToProps = (dispatch) => ({
  addTodo: text => {
    dispatch(addTodo(text))
  },
  toggleTodo: id => {
    dispatch(toggleTodo(id))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
