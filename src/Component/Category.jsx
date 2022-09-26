import React, { useEffect , useState } from 'react'
import axios from 'axios'
import '../Component/Style/Style.css'
import Users from './Users'

export default function Store() {

  const [categories, setCategories] = useState([]);

  async function getCategory() {
    let {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
    setCategories(data.slice(0,6));
  }

  useEffect(()=>{
    getCategory();
  },[]);

  return (
    <>
    <section className='store py-5'>
      <div className='container'>
        <div className='row gy-4'>
        <div className="col-lg-4">
          <div className='py-5 px-4 d-flex justify-content-center align-items-center'>
            <div className='py-5'>
              <h2>Categories Shop</h2>
            </div>
          </div>
        </div>
        {categories.map((category , i)=>
            <div className="col-lg-4 col-md-6" key={i}>
              <div className='boxs'>
                <img src={category.image} className='w-100' alt="" />
                <div className='d-flex box text-center justify-content-center align-items-center'>
                  <div className='title p-4'>
                    <p className=''>
                      {category.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        )}
        </div>  
      </div>
    </section>
    <Users/>
    </>
  )
}
