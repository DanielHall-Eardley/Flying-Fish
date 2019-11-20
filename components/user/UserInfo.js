import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userForm: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    fontSize: 20,
    height: 50,
    marginBottom: 20,
    backgroundColor: "#edf7f0",
    color: "black",
    paddingLeft: 20
  },
  textHighlight: {
    borderBottomColor: "green",
    borderBottomWidth: 2,
    fontSize: 20,
    height: 50,
    marginBottom: 20,
    color: "black",
    paddingLeft: 20
  }
})

class UserInfo extends React.Component {
  state = {
    name: false,
    address: false,
    email: false
  }

  renderTextInput = (fieldType) => {
    return(
      <TextInput
      style={this.state[fieldType] ?
        styles.textHighlight :
        styles.textInput
      }
      onFocus={() => {
        this.setState({
          [fieldType]: true
        })
      }}
      onEndEditing={() => {
        this.setState({
          [fieldType]: false
        })
      }}
      value={this.props.data[fieldType]}
      onChangeText={
        (e) => this.props.updateUserFunction(e, fieldType)
      }
      placeholder={"Enter " + fieldType }
    />
    )
  }

  render() {
    return (
      <View style={styles.userForm}>
        {this.renderTextInput("name")}
        {this.renderTextInput("address")}
        {this.renderTextInput("email")} 
      </View>
    );
  }
};

export default UserInfo