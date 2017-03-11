import {
  Dimensions,
  StyleSheet
} from 'react-native';

// @todo - Update dimensions in render, to catch screen rotations
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    marginTop: 20
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#2ecc71'
  },
  listItem: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    height: 50,
    flexBasis: 50,
    width: width,
    paddingLeft: 15
  },
  listItemText: {
    fontSize: 20,
    color: '#333'
  },
  inputContainer: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    backgroundColor: '#fff'
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 1
  }
});

export default styles;