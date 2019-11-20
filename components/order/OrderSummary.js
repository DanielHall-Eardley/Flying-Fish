import * as React from 'react';
import { View, Text, Button, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
    position: "absolute",
    left: 0,
    bottom: 55,
    zIndex: 10,
    width: "100%"
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  button: {

  }
})

const OrderSummary = props => {

  const checkForItems = (props) => {
    
    if (props.order.itemCount < 1) {
      return alert("You need to add an item to the order")
    }

    props.orderDetails.navigate("Order")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Items: {props.order.itemCount}
      </Text>
      <Text style={styles.text}>
        Total $ {props.order.total}
      </Text>
      <Button 
        onPress={() => checkForItems(props)}
        title="Order"
        style={styles.button}
      />
    </View>  
  )  
}

export default OrderSummary