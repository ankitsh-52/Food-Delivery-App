export type SwiggyRestCardProp = {
    id:                     string
    name :                  string 
    cloudinaryImageId :     string
    locality :              string
    areaName :              string
    costForTwo :            string
    cuisines :              string[]
    avgRating :             string
    totalRatingsString :    string
}

export default function SwiggyRestCard(props : SwiggyRestCardProp){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id, name, cloudinaryImageId, totalRatingsString, avgRating, locality, areaName, costForTwo, cuisines} = props;

    return (
        <div className="restaurant-card">
            <img src={cloudinaryImageId} alt={`${name} restaurant`} />
            <h4>{name}</h4>
            <h4>{avgRating}</h4>
            <h4>{totalRatingsString}</h4>
            <h4>{areaName}</h4>
            <h4>{locality}</h4>
            <h4>{...cuisines}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}