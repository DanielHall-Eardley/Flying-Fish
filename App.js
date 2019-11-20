import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home.js';
import Order from './pages/Order.js';
import Meals from './pages/Meals.js';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Meals: { screen: Meals },
    Order: { screen: Order },
  },
  {
    initialRouteName: 'Home',
    initialRouteParams: {
      title: "Sign up"
    } 
  }
);

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {
  state = {
    user: {
      id: null,
      name: "",
      address: '',
      orders: [],
      email: ""
    },
    currentOrder: {
      restaurant: "",
      meals: {},
      total: 0,
      itemCount: 0
    },
    restaurants: [
      {
        id: '1',
        name: 'Flying Fish',
        desc: 'Drone delivered fish and chips',
        image: 'https://via.placeholder.com/400',
      },
      {
        id: '2',
        name: 'The Keg',
        image: 'https://via.placeholder.com/400',
        desc: 'Get your stake on',
      },
      {
        id: '3',
        name: 'Jack Astors',
        image: 'https://via.placeholder.com/400',
        desc: 'A variety of tasty foods',
      },
      {
        id: '4',
        name: 'State of Main',
        image: 'https://via.placeholder.com/400',
        desc: 'A sports bar serving tasty food',
      },
      {
        id: '5',
        name: 'Shoeless Joes',
        image: 'https://via.placeholder.com/400',
        desc: 'A sports bar serving tasty food',
      },
      {
        id: '6',
        name: 'Osmows',
        image: 'https://via.placeholder.com/400',
        desc: 'Tasty food',
      },
      {
        id: '7',
        name: 'Dave and Busters',
        image: 'https://via.placeholder.com/400',
        desc: 'A sports bar serving tasty food',
      },
      {
        id: '8',
        name: 'State of Main',
        image: 'https://via.placeholder.com/400',
        desc: 'A sports bar serving tasty food',
      },
      {
        id: '9',
        name: 'Celler Door',
        image: 'https://via.placeholder.com/400',
        desc: 'A sports bar serving tasty food',
      },
      {
        id: '10',
        name: 'State of Main',
        image: 'https://via.placeholder.com/400',
        desc: 'A sports bar serving tasty food',
      },
    ],
    meals: [
      {
        id: '1',
        restaurantId: '1',
        name: 'Cod',
        desc: 'Delicious fried fish',
        image: 'https://via.placeholder.com/400',
        price: 25,
        options: [
          {
            added: false,
            name: 'Mushy peas',
            price: 3,
          },
          {           
            added: false,
            name: 'Mashed potatoes',
            price: 3,
          },
        ],
      },
      {
        id: '2',
        restaurantId: '1',
        name: 'Halibut',
        desc: 'Delicious fried fish',
        image: 'https://via.placeholder.com/400',
        price: 25,
        options: [
          {
            name: 'Mushy peas',
            price: 3,
            added: false,
          },
          {
            name: 'Mashed potatoes',
            added: false,
            price: 3,
          },
        ],
      },
    ],
  };

  saveUser = (data, navigation) => {

    if (data.name === "" || data.address === "" || data.email === "") {
      alert("Invalid user input")
      return
    }

    this.setState({
     user: {
       ...data,
       id: Math.random(),
       currentOrder: null,
       orders: []
     }
    }, () => {
      navigation.navigate("Home", {title: "Search for some food..."})
    })
  }

  addToOrder = (mealId, restaurantId) => {

    const meal = this.state.meals.find(meal => meal.id === mealId)
    const restaurant = this.state.restaurants.find(el => el.id === restaurantId)
    const currentOrder = this.state.currentOrder
    
    if (!meal || !restaurant) {
      alert("Your order cannot be processed")
      return
    }

    if (
      restaurant.name !== currentOrder.restaurant && 
      currentOrder.restaurant
    ) {
      alert("You can only select one restaurant per order")
      return
    }

    this.setState((prevState, props) => {
      let quantity = 1

      if (prevState.currentOrder.meals.hasOwnProperty(mealId)) {
        quantity = prevState.currentOrder.meals[mealId].quantity + 1
      } 
      
      const orderObject = {
        [mealId]: { 
          name: meal.name,
          price: meal.price,
          quantity: quantity,
          options: meal.options
        }
      }

      const itemCount = prevState.currentOrder.itemCount + 1
      const total = prevState.currentOrder.total + meal.price

      const currentOrder = {
        restaurant: restaurant.name,
        meals: Object.assign(prevState.currentOrder.meals, orderObject),
        total: total,
        itemCount: itemCount
      }
      return {
        currentOrder: currentOrder
      }
    })
  }

  submitOrder = (order, navigation) => {

    if (order.itemCount < 1) {
      return alert("You cannot submit an empty order")
    }  

    this.setState((prevState) => {
      const user = Object.assign(prevState.user, {
        orders: [...prevState.user.orders, order]
      })

      return {
        user: user,
        currentOrder: {
          restaurant: "",
          meals: {},
          total: 0,
          itemCount: 0
        }
      }
    }, () => {
      console.log(this.state.user.orders)
      navigation.navigate("Home", {title: "Search for Restaurants"})
      alert("Your order has been purchased")
    })
  }

  render() {
    return <AppContainer screenProps={{
      data: this.state,
      saveUser: this.saveUser,
      addToOrder: this.addToOrder,
      submitOrder: this.submitOrder
      }}/>;
  }
}

export default App;
