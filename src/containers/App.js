import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#333',
    marginTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
    fontSize: 10
  },
  list: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 500
  },
  listItem: {
    padding: 20,
    borderBottomColor: '#111',
    borderBottomWidth: 2
  },
  input: {
    height: 50,
    backgroundColor: '#fff'
  },
  button: {
    height: 50,
    marginTop: 20
  }
});

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      todos: [],
      newTodo: ''
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }
  handleChangeText(newTodo) {
    this.setState({
      newTodo
    })
  }
  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: ''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TODO List
        </Text>
        <Text style={styles.instructions}>
          To get started, add an item below
        </Text>
        <TextInput style={styles.input}
          value={this.state.newTodo}
          onChangeText={this.handleChangeText}
        />
        <TouchableOpacity style={styles.button}
          onPress={this.handlePress}>
          <Text>
            Add
          </Text>
        </TouchableOpacity>
        <View style={styles.list}>
          {this.state.todos.map((todo, i) => <Text style={styles.listItem} key={i}>{todo}</Text>)}
        </View>
      </View>
    )
  }
}