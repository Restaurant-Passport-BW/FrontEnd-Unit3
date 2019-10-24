import React from 'react';


const CityCard = ({city}) => {
    const {name, state}= city;


  return (

    <div>
        <h2>{name}</h2>
        <h4>{state}</h4>
    </div>
  )

}
export default CityCard;