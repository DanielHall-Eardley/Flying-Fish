import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    Button, 
    StyleSheet } 
    from "react-native"

    const styles = StyleSheet.create({
        container: {
          borderRadius: 5,
          marginHorizontal: 10,
          backgroundColor: "white",
          padding: 10
        },
        textContainer: {
          flexDirection: "row",
          justifyContent: "space-between"  
        },
        text: {    
          fontSize: 25,
          fontWeight: "100",
          paddingBottom: 10
        },
        imageContainer: {
          alignItems: "center",
        },
        image: {
          height: 175,
          width: 300,
          resizeMode: "cover",
        },
        desc: {
          textAlign: "center",
          fontSize: 20,
          marginTop: 10,
          marginBottom: 10
        },
        button: {

        }
      })      

const MealItem = props => { 

return (
  <View 
    style={styles.container} 
  >
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        {props.name}
      </Text>
      <Text style={styles.text}>
        $ {props.price}
      </Text>
    </View>
    <View style={styles.imageContainer}>
      <Image 
        style={styles.image}
        source={{uri: props.image}}
      />
    </View>  
    <View>
      <Text style={styles.desc}>{props.desc}</Text>
      <Button
        onPress={() => props.addToOrder(props.id, props.restaurantId)}
        title="Add to Order"
        style={styles.button}
      /> 
    </View>  
  </View>
  )
}

export default MealItem