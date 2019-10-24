import React, {useEffect, useState} from 'react';
import axios from "axios";
import CityCard from './CityCard'
const City = () => {

   const [city, setCity] = useState([]);
    
    useEffect(() => {
        
        axios
        .get('https://foodie-passport.herokuapp.com/rpp/cities')
        .then(res => { console.log("respponseqqqq", res.data)
            setCity(res.data);
        })
    
        .catch(error => ('server error', error));

    
        
    },[]);

return (

    <div>
        {city.map(cit => (
            <CityCard key={cit.id} city={cit} />
        ))}
    </div>
)
}

export default City;