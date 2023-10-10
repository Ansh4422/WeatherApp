import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./style.css"

const Temp = () => {
  const [icon, setIcon] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState("Bareilly");

  useEffect(()=>{
    const fetchApi= async() => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63776322d8e1df248067ca9dbc0dacf5`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
      setCountry(resJson.sys);
      
      
    }

    fetchApi();
  },[search])

  return (
    <div className="box">
      <div className="search">
        <input className='datatosearch' 
        type="search" 
        onChange={(event) => {
            setSearch(event.target.value)
        }}
        />
      </div>

      {!city ? (<h4>No Data Found!!!</h4> )
      :
      (<div>
        <div className="data">
       
        <h2 id='location'>
        <i className="fa-sharp fa-solid fa-location-dot"></i>
        {search}, {country.country}</h2>

        <h1 id='temperature'>{city.temp}°C</h1>
        <h4 id='mix_max'>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h4>
      </div>
        



      </div>
      )}

     
    </div>
  )
}

export default Temp