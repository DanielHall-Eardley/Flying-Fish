import * as React from 'react';
import { View } from "react-native"
import UserSummary from "../components/shared/UserSummary.js"
import OrderSummary from "../components/order/OrderSummary.js"
import List from "../components/shared/List.js"

class Meals extends React.Component {

  static navigationOptions = {
    title: "Menu" 
  }

  state = {
    mealList: []
  }

  componentDidMount() {
    this.getMealList()
  }
  
  getMealList = () => {
    
    let mealList = this.props.screenProps.data.meals.filter(el => {
      if (el.restaurantId === this.props.navigation.state.params.restaurantId) {
        return true
      }
    })

    if (mealList.length < 1) {
      alert("Data for this restauarant was not able to be retrieved")
      return this.props.navigation.navigate("Home", {title: "Search for Restaurants"})
    }
  
    this.setState({
      mealList: mealList
    })
  }

  render() {
    return (
      <View style={{backgroundColor: "#f7e7c8"}}>
        <UserSummary user={this.props.screenProps.data.user}/>
        <OrderSummary
          order={this.props.screenProps.data.currentOrder}
          orderDetails={this.props.navigation}
        />
        <List 
          data={this.state.mealList}
          addToOrder={this.props.screenProps.addToOrder}
          navigation={this.props.navigation}
          currentOrder={this.props.screenProps.data.currentOrder}
          type="meals"
        />
      </View>
    ) 
  }
}

export default Meals