import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
} from "react-native"
import OrderOptions from "./OrderOptions.js"

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10 
  },
  text: { 
    fontSize: 18
  },
})

const OrderDetails  = ({meal, updateOrder, mealId}) => {

  const renderOrderOptions = (options) => {
    const orderArray = options.map((option, i) => {
      return ( 
        <OrderOptions 
          option={option}
          mealId={mealId}
          key={i}
          updateOrder={updateOrder}
        />
      )
    })
    return orderArray
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Meal: {meal.name}
        </Text>  
        <Text style={styles.text}>
          $ {meal.price}
        </Text>  
        <Text style={styles.text}>
          Quantity: {meal.quantity}
        </Text>
      </View>   
      {renderOrderOptions(meal.options)}
    </View>
  )
}

export default OrderDetails