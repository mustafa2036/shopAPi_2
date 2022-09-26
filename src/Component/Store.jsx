import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Component/Style/Style.css'
import { ShopApi } from './Global'


export default function Store() {

  const {shops} = useContext(ShopApi)

  return (
    <>
    <section className='store py-5'>
      <div className='container'>
        <div className='row gy-4'>
          <div className="col-lg-4">
            <div className='py-5 px-4 d-flex justify-content-center align-items-center'>
              <div className='py-5'>
                <h2>Store Shop</h2>
              </div>
            </div>
          </div>
          {shops.map((shop , i)=>
          <div className="col-lg-4 col-md-6" key={i}>
            <Link to={`/shopdetalis/${shop.id}`}>
              <div className='boxs'>
                <img src={shop.images[0]} className='w-100' alt="" />
                <div className='d-flex box text-center justify-content-center align-items-center'>
                  <div className='title p-4'>
                    <p>{shop.title}</p>
                    <h4>{shop.category.name}</h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
        </div>  
      </div>
    </section>
    </>
  )
}
