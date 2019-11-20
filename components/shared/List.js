import React from 'react';
import { Text, View, FlatList } from "react-native"
import RestaurantItem from "../search/RestaurantItem.js"
import MealItem from "../meals/MealItem.js"

const List = props => {

  const toggleList = (item, listType, addToOrder) => {
    if (listType === "restaurant") {
      return(
        <RestaurantItem 
          name={item.name}
          desc={item.desc}
          image={item.image}
          id={item.id}
          navigation={props.navigation}
        />
      )  
    } 
    
    if (listType === "meals") {
      return (
        <MealItem 
          restaurantId={item.restaurantId}
          id={item.id}
          name={item.name}
          desc={item.desc}
          image={item.image}
          price={item.price}
          options={item.options}
          addToOrder={addToOrder}
        />
      )
    } 
  }

  const renderGap = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: "#f7e7c8",
        }}
      />
    )
  }

  const renderListFooter = (type) => {
    if (type === "restaurant") {
      return <View style={{height: 250, width: "100%"}}></View>
    } else {
      return <View style={{height: 185, width: "100%"}}></View>
    }
  }
  
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({item}) => toggleList(item, props.type, props.addToOrder)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => renderGap()}
        ListEmptyComponent={() => 
        <Text style={{margin: 10, backgroundColor: "white", borderRadius: 5, fontSize: 22}}>
          No Items found
        </Text>}
        ListFooterComponent={() => renderListFooter(props.type)}
      />  
    </View>
  )
}

export default List