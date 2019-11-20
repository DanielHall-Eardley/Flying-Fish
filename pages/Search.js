import React from 'react';
import { View, Text } from "react-native"
import SearchInput from "../components/search/SearchInput.js"
import List from "../components/shared/List.js"
import UserSummary from "../components/shared/UserSummary.js"

class Search extends React.Component {
  state = {
    filteredArray: null
  }

  getSearchInput = (event) => {
    let filteredArray = this.props.restaurants.filter(el => {
      if (el.name.match(event)) {
        return true
      }
    })

    this.setState({
      filteredArray: filteredArray
    })
  }

  render() {
    return (
      <View style={{backgroundColor: "#f7e7c8"}}>
        <UserSummary user={this.props.user}/>
        <SearchInput getSearchInput={this.getSearchInput}/>
        <List data={this.state.filteredArray ? 
          this.state.filteredArray : 
          this.props.restaurants}
          type="restaurant"
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

export default Search