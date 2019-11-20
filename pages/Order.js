import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  ScrollView,
  TextInput,
  KeyboardAvoidingView
} from "react-native"
import OrderDetails from "../components/order/OrderDetails.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7e7c8"
  },
  textContainer: {
    backgroundColor: "#eba910",
    marginBottom: 10
  },
  textTop: { 
    fontSize: 22,
    paddingTop: 10,
    color: "white",
    textAlign: "center"
  },
  textBottom: { 
    fontSize: 22,
    paddingVertical: 10,
    color: "white",
    textAlign: "center"
  },
  textTotal:{
    fontSize: 20,
    color: "white"
  },
  submitOrderContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  textInput: {
    height: 120,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    fontSize: 20
  }  
})

class Order extends React.Component {

  static navigationOptions = {
    title: "Order" 
  }

  state = {
    finalizedOrder: {},
  }

  renderOrderDetails = (meals) => {
    const orderArray = []
    const keyArray = Object.keys(meals)
    for (let key of keyArray) {
      orderArray.push(
        <OrderDetails 
          meal={meals[key]}
          updateOrder={this.updateOrder}
          key={key}
          mealId={key}
        />
      )
    }
    return orderArray
  }

  updateOrder = (name, mealId) => {
    const prevOrder = this.props.screenProps.data.currentOrder
    
    for(let option of prevOrder.meals[mealId].options) { 
      if (option.name === name) {
        if (option.added) {
          return alert("You have already added this optional extra to your order")
        }
        option.added = true
        prevOrder.total = prevOrder.total + option.price
      }
    }

    this.setState((prevState) => {
      let order = Object.assign(prevState.finalizedOrder, {
        ...prevOrder
      })
      return {
        finalizedOrder: order
      }
    })
  }

  addSpecialInstructions = (text) => {
    this.setState((prevState) => {
      let instructions = Object.assign(prevState.finalizedOrder, {
        specialInstructions: text
      })
      return {
        finalizedOrder: instructions
      }
    })
  }

  render() {

    const { 
      total, 
      restaurant
    } = this.props.screenProps.data.currentOrder
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>
            Ordering from: {restaurant}
          </Text>
          <Text style={styles.textBottom}>
            To: {this.props.screenProps.data.user.address}
          </Text>
        </View>
        {this.renderOrderDetails(this.props.screenProps.data.currentOrder.meals)}
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="30">
        <TextInput 
          style={styles.textInput}
          placeholder="Special instructions"
          multiline={true}
          onChangeText={(e) => this.addSpecialInstructions(e)}
        />
        </KeyboardAvoidingView>
        <View style={styles.submitOrderContainer}>
          <Text style={styles.textTotal}>
            Total: $ {total}
          </Text>
          <Button
            title="Buy"
            onPress={() => this.props.screenProps.submitOrder(this.state, this.props.navigation)}
          />
        </View>
      </ScrollView>
    )
  }
}

export default Order