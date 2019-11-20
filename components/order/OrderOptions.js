import React from 'react';
import { View, StyleSheet, Text, Button} from "react-native"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  text: { 
    fontSize: 18
  }, 
  textRight: {
    marginLeft: "auto",
    marginRight: 20
  }
})

const OrderOptions = ({option, mealId, updateOrder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Extra: {option.name}
      </Text>  
      <Text style={styles.textRight}>
        $ {option.price}
      </Text> 
      <Button   
        onPress={() => updateOrder(option.name, mealId)}
        title={option.added ? "Added" : "Add"}
      /> 
    </View>  
  )  
} 

  export default OrderOptions