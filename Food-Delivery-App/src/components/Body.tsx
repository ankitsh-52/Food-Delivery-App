import { RestaurantCard, RestaurantDataProps } from "./RestaurantCard";
import { RestaurantData } from "../utils/dummyData";
import React, { useState } from "react";
// import Shimmer from "./ShimmerUi";

export const Body = () => {
//!STATE VARIABLE 
//? Local state variable
    const [filterRestData, setFilteredRestData] = useState<RestaurantDataProps[]>(RestaurantData);
    const [searchText, setSearchText] = useState<string>("");
    const [originalRestList] = useState<RestaurantDataProps[]>(RestaurantData);

    //Top Rest list based on rating
    const filterTopRests = () => {
        setFilteredRestData(() => {
            return filterRestData.filter((rest) => {
                return parseFloat(rest.rating) > 4.5
            })
        })
    }

    const searchTextValue = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchText (e.target.value);
    };

    //search rest list
    const filterSearchRests = () => {
        setFilteredRestData(() => {
            return originalRestList.filter((rest) => {
                return rest.restName.toLowerCase().includes(searchText.toLowerCase())
            })
        })
    }

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search-btn">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={searchTextValue}
                    />
                    <button onClick={filterSearchRests}>Search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={filterTopRests}>
                    Top rated restaurant
                </button>
            </div>
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