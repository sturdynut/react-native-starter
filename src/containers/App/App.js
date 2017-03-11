import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {
  addTodo,
  addTodos,
  getTodos
} from '../../actions';

import styles from './styles';

class _App extends Component {
  constructor() {
    super();
    
    this.state = {
      newTodo: ''
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handlePress = this.handlePress.bind(this);

    // console.warn(`OS: ${Platform.OS}, VERSION: ${Platform.Version}`)
  }
  componentDidMount() {
    this.props.getTodos();
  }
  handleChangeText(newTodo) {
    this.setState({
      newTodo
    })
  }
  handlePress() {
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChangeText}
            placeholder='Enter new todo...'
          />
        </View>
        <TouchableOpacity style={styles.button}
          onPress={this.handlePress}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <View style={styles.list}>
          {this.props.todos.map(todo => 
            <View style={styles.listItem} key={todo.id}>
              <Text style={styles.listItemText}>{todo.name}</Text>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapActionsToProps = (dispatch) => ({
  addTodo(todo) {
    dispatch(addTodo({name: todo}));
  },
  getTodos() {
    dispatch(getTodos());
  }
});

export default App = connect(mapStateToProps, mapActionsToProps)(_App);