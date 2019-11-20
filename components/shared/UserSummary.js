import React from 'react';
import { View, Text, StyleSheet} from "react-native"

const styles = StyleSheet.create({
  container: {  
    alignItems: "center",
    backgroundColor: "#eba910",
    marginBottom: 10
  },
  text: {
    fontSize: 20, 
    fontWeight: "100",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white"
  }
})

const Meals = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.user.address} | {props.user.name}
      </Text>
    </View>
  )
}

export default Meals