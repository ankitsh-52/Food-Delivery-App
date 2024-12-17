import { useEffect, useState } from "react";
import { CountryDetails } from "./CountryCard";
import CountryCards from "./CountryCard";
import '../public/swiggyApi.css'

export default function SwiggyApiCall() {
    const [countryData, setCountryData] = useState<CountryDetails[]>([]);
    if(countryData.length === 0){
        <h1>Loading....</h1>
    }

    const fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        data = await data.json();
        console.log("All Country data",data);
        // setCountryData(data.all_country_code)
    }

    useEffect(() => {
        fetchData();
    });

    return(
        <div className="country-container">
            {
                countryData.map((data) => <CountryCards key={data.countryId}{...data} />)
            }
        </div>
    );
}