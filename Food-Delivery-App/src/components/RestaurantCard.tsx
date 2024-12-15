export type RestaurantDataProps = {
    restName: string
    foodName: string
    rating: string
    areaName: string
    price : number
    imageUrl : string
    rest_id : string
};

export const RestaurantCard = (props : RestaurantDataProps) => {
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