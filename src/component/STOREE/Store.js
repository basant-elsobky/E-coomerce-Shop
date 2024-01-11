import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './store.css'
import Storecard from './Storecard'
import Filter from './Filter';
 const Store = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setloading(true);
    axios({
      method: "Get",
      url: "https://fakestoreapi.com/products"

    }).then(res => {
      console.log("Data : ", res.data)
      setdata(res.data)
    }).catch(e=>console.log(e))
    .finally(() => {setloading(false)})
  }, [])

  return (

    <div className='container latestproduct'>
    {loading &&(
      <div>
        <h1>loading ....</h1>
      </div>
    )}
      <div className='row text-center '>
        <div className='col-12'>
        <Filter/>
          <h1>latest products </h1>
        </div>
      </div>


      <div className='storecontainer'>
        <div className='row'>
        {data.map((products)=>(
          <Storecard 
          key={products.id} products={products} />
          

        ))}
        
        </div>
      </div>
    </div>

  )
}

export default Store
