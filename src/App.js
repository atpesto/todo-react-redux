import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addTodo } from './redux/actions';
import TodoList from './TodoList';

class App extends Component {
  state = {
    inputID: 0,
    inputText: '',
  };

  onChangeHandlerID = (e) => {
    this.setState({
      inputID: e.target.value,
    });
  }

  onChangeHandlerText = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  }

  onClickHandler = () => {
    const { inputID, inputText } = this.state;
    this.props.addTodo(inputID, inputText);
  }

  render() {
    return (
      <div>
        <TodoList todos={this.props.todos} />
        <div>
          <input type="number" value={this.state.inputID} onChange={this.onChangeHandlerID} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
