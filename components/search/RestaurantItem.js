import React from 'react';
import { View, Text, Image, StyleSheet} from "react-native"
import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 10
  },
  header: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
  }, 
  text: {    
    fontSize: 25,
    fontWeight: "100",
  },
  imageContainer: {
    alignItems: "center"
  },
  image: {
    height: 300,
    width: 350,
    resizeMode: "cover",
  },
  desc: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  }
})

const RestaurantItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <TouchableHighlight style={styles.imageContainer}
        onPress={() => props.navigation.navigate("Meals", {
        restaurantId: props.id
      })}>
      <Image style={styles.image}
        source={{uri: props.image}}
      /> 
      </TouchableHighlight>
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  )
}

export default RestaurantItem

