import React from 'react';
import { View, Button} from "react-native"
import UserInfo from "../components/user/UserInfo.js"

class User extends React.Component {
  updateUserInfo = (text, key) => {
    this.setState({
      [key]: text
    })
  }

  state = {
    name: "",
    address: "",
    email: ""
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <UserInfo 
          data={this.state}
          updateUserFunction={this.updateUserInfo}
        />
        <Button 
          style={{margin: 10}}
          onPress={()=> this.props.saveUserFunction(this.state, this.props.navigation)}
          title="Sign up"
        />
      </View>
    )
  }
}

export default User