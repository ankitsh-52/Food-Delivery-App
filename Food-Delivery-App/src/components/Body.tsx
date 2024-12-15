import { RestaurantCard, RestaurantDataProps } from "./RestaurantCard";
import { RestaurantData } from "../utils/dummyData";
import { useState } from "react";

export const Body = () => {
//!STATE VARIABLE 
//? Local state variable
    // eslint-disable-next-line prefer-const
    let [filterRestData, setFilteredRestData] = useState<RestaurantDataProps[]>(RestaurantData);
    // eslint-disable-next-line prefer-const
    let filterTopRests = () => {
        setFilteredRestData(() => {
            return filterRestData.filter((rest) => {
                return parseFloat(rest.rating) > 4.5
            })
        })
    }
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <button 
                className="filter-btn" 
                onClick={filterTopRests}>
                Top rated restaurant
            </button>
            <div className="restaurant-container">
            {
                //! Here we have given key to all the restaurant card because, react uses the key to uniquely identify each card. If new card comes in the list react will not have to render all the cards it will only render the new card. 
                //! If the keys are not available as soon as a new card comes in, react will have to render all  the cards, this is not optimized.
                filterRestData.map((restaurant) => <RestaurantCard key = {restaurant.rest_id}{...restaurant}/>)
            }
            </div>
        </div>
    );
};