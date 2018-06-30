import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addTodo, toggleTodo } from './redux/actions';
import TodoList from './TodoList';

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
        <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo}/>
        <div>
          <input type="text" value={this.state.inputText} onChange={this.onChangeHandlerText} />
          <input type="button" value="Add" onClick={this.onClickHandler} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
