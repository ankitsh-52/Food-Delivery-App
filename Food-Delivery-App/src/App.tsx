// import React from "react";
import "./app.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="App-logo" />
      </div>
      <div className="nav-itmes">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const cardStyle = {
//   backgroundColor : "aquamarine",
// }

type RestaurantCardProps = {
  restName: string
  foodName: string
  rating: string
  areaName: string
  price : number
  imageUrl : string
  rest_id : string
};

const RestaurantCard = (props : RestaurantCardProps) => {
  const {
    restName, 
    foodName, 
    rating, 
    areaName, 
    price,
    imageUrl
  } = props;
  return (
    // <div className="restaurant-card" style={cardStyle}> inline style syntax in .tsx
    <div className="restaurant-card">
      <img
        src={imageUrl} alt=""
        className="food-item-card"
      />
      <h4>{restName}</h4>
      <h4>{foodName}</h4>
      <h4>{rating}</h4>
      <h4>{areaName}</h4>
      <h4>{price}</h4>
    </div>
  );
};

const RestaurantCardPropsData: RestaurantCardProps[] = [
  {
    rest_id: "1",
    restName: "The Green Fork",
    foodName: "Vegan Salad",
    rating: "4.5",
    areaName: "Downtown",
    price: 12,
    imageUrl: "https://via.placeholder.com/400x300?text=Vegan+Salad"
  },
  {
    rest_id: "2",
    restName: "Ocean's Delight",
    foodName: "Grilled Salmon",
    rating: "4.8",
    areaName: "Seaside",
    price: 25,
    imageUrl: "https://via.placeholder.com/400x300?text=Grilled+Salmon"
  },
  {
    rest_id: "3",
    restName: "Pasta Palace",
    foodName: "Spaghetti Carbonara",
    rating: "4.3",
    areaName: "Uptown",
    price: 18,
    imageUrl: "https://via.placeholder.com/400x300?text=Spaghetti+Carbonara"
  },
  {
    rest_id: "4",
    restName: "Burger Haven",
    foodName: "Cheeseburger",
    rating: "4.6",
    areaName: "Midtown",
    price: 14,
    imageUrl: "https://via.placeholder.com/400x300?text=Cheeseburger"
  },
  {
    rest_id: "5",
    restName: "Spicy Fiesta",
    foodName: "Tacos Al Pastor",
    rating: "4.7",
    areaName: "Eastside",
    price: 10,
    imageUrl: "https://via.placeholder.com/400x300?text=Tacos+Al+Pastor"
  },
  {
    rest_id: "6",
    restName: "Sushi Zen",
    foodName: "California Roll",
    rating: "4.9",
    areaName: "West End",
    price: 20,
    imageUrl: "https://via.placeholder.com/400x300?text=California+Roll"
  },
  {
    rest_id: "7",
    restName: "The Breakfast Spot",
    foodName: "Pancakes with Maple Syrup",
    rating: "4.2",
    areaName: "Suburbia",
    price: 8,
    imageUrl: "https://via.placeholder.com/400x300?text=Pancakes+with+Maple+Syrup"
  },
  {
    rest_id: "8",
    restName: "Steakhouse Supreme",
    foodName: "Ribeye Steak",
    rating: "4.8",
    areaName: "Downtown",
    price: 30,
    imageUrl: "https://via.placeholder.com/400x300?text=Ribeye+Steak"
  },
  {
    rest_id: "9",
    restName: "Noodle Nirvana",
    foodName: "Pad Thai",
    rating: "4.4",
    areaName: "City Center",
    price: 15,
    imageUrl: "https://via.placeholder.com/400x300?text=Pad+Thai"
  },
  {
    rest_id: "10",
    restName: "The Pizza Place",
    foodName: "Margherita Pizza",
    rating: "4.7",
    areaName: "North End",
    price: 13,
    imageUrl: "https://via.placeholder.com/400x300?text=Margherita+Pizza"
  }
];


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {
          //! Here we have given key to all the restaurant card because, react uses the key to uniquely identify each card. If new card comes in the list react will not have to render all the cards it will only render the new card. 
          //! If the keys are not available as soon as a new card comes in, react will have to render all  the cards, this is not optimized.
          RestaurantCardPropsData.map((restaurant) => <RestaurantCard key = {restaurant.rest_id}{...restaurant}/>)
        }
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
