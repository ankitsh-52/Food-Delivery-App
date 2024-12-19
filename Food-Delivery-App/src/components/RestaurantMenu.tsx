import { useEffect, useState } from "react"
import Shimmer from "./ShimmerUi";
import CloudinaryImageId from "../utils/constant";

type restaurantMenuProp = {
    name : string,
    areaName : string,
    avgRatingString : string,
    cloudinaryImgId : string,
    city : string,
    cuisines : string[],
    id : string,
    totalRatings : string,
};

export default function RestaurantMenu() {
    const [restInfo, setRestInfo] = useState();
    // console.log("Rest Props",restInfo);
    // setRestInfo(restInfo?.)

    useEffect(() =>{
        const fetchMenu = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=42581&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            // console.log(json.cards?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info);
            // console.log(json.data)
            setRestInfo(json.data)
            console.log("SetRestInfo", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card);
            console.log("Restinfo ....", restInfo);
        }
        fetchMenu();
    }, []);

    if(restInfo === null) return (<Shimmer />)
    
    // const {name, areaName, city} = restInfo;
    // console.log("Restinfo ....", restInfo);
    return (
        <div className="menu">
            {/* <h1>{restInfo?.info?.name}</h1> */}
            {/* <img src={`${CloudinaryImageId}+${restInfo?.cloudinaryImgId}`} alt="" /> */}
            {/* <h2>{`Cuisines: ${restInfo.cuisines}`}</h2> */}
            <ul>
                {/* <li>{restInfo?.areaName}</li>
                <li>{restInfo?.city}</li> */}
                {/* <li>{restInfo?.avgRatingString}</li>
                <li>{restInfo?.totalRatings}</li> */}
            </ul>
        </div>
    )
}