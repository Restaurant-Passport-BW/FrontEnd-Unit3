import React, { useEffect, useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import RestaurantDetails from './RestaurantDetails';
import {Link} from 'react-router-dom';
import axios from 'axios'
const Restaurants = (props) => {
   const [rest, setRest] = useState();
   useEffect(() =>{
    const id = props.match.params.id;
    axios
            .get(`https://foodie-passport.herokuapp.com/rpp/restaurants/city/${id}`)
            .then(response => {
              setRest(response.data);
             console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            })
      },[props.id])

        
  if (!rest) {
    return( <div>Loading movie information...</div>);
  }
  const { name, address } = rest;
  console.log("propNewww", name)
    return (
      
        <div className='restCard'>
      <h1>naaaammmeeee{name}</h1>
   


            </div>
           
    )
}
export default Restaurants;