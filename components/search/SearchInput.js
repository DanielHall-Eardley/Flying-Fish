import React from 'react';
import { View, TextInput } from "react-native"

const SearchInput = (props) => {
    return (
      <View>
        <TextInput 
          onChangeText={(e) => props.getSearchInput(e)}
          style={{
            backgroundColor: "white",
            height: 50,
            fontSize: 20,
            marginHorizontal: 10,
            marginBottom: 10,
            paddingLeft: 20,
            borderRadius: 5
          }}
          placeholder="Search for Restaurants..."
        />
      </View>
    )
}

export default SearchInput