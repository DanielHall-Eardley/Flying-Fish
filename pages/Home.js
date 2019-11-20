import React from 'react';
import { View } from "react-native"
import Search from "./Search.js"
import User from "./User.js"

class Home extends React.Component {    
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam("title", "Sign up")
    }
  }

  renderHome = () => {
    const { 
      user, restaurants 
      } = this.props.screenProps.data
    if (user.id) {
      return <Search
        restaurants={restaurants}
        user={user}
        navigation={this.props.navigation}
      />
    } else {
      return <User 
        saveUserFunction={this.props.screenProps.saveUser}
        navigation={this.props.navigation}
      />
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderHome()}
      </View>
    )
  }
}

export default Home