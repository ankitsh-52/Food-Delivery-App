export type CountryDetails = {
    countryId: number;
    name: string;
    isdCode: string;
    alpha2Code: string;
    alpha3Code: string;
    isoCurrencyCode: string;
    flagImgUrl: string;
}

export  default function CountryCards(props : CountryDetails) {
    const {countryId, name, isdCode, isoCurrencyCode, flagImgUrl} = props;

    return (
        <div className="country-cards">
            <img src={flagImgUrl} alt={`${name}'s flag`} className="flag-image"/>
            <h4>{countryId}</h4>
            <h4>{name}</h4>
            <h4>{isdCode}</h4>
            <h4>{isoCurrencyCode}</h4>
        </div>
    )
}

