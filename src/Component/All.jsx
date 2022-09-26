import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import '../Component/Style/Style.css'
import { Link } from 'react-router-dom'
import { AllContext } from './Allothers'

export default function Home() {

  const [users, setUsers] = useState([]);
  const {shops} = useContext(AllContext)
  

  async function getProducts(cate , callback) {
    let {data} = await axios.get(`https://api.escuelajs.co/api/v1/${cate}`);
    callback(data.slice(0,3))
  }

  useEffect(()=>{
    getProducts('users' , setUsers);
  },[]);

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
    <section className='store bg-light py-5'>
      <div className='container'>
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className='pb-1 px-4 d-flex justify-content-center align-items-center'>
              <div className='py-3'>
                <h2 className='text-uppercase fw-bold'>Users</h2>
              </div>
            </div>
          </div>
          {users.map((user , i)=>
            <div className="col-lg-4 col-md-6" key={i}>
              <div className='boxs'>
                <img src={user.avatar} className='w-100' alt="" />
                <div className='d-flex box text-center justify-content-center align-items-center'>
                  <div className='title p-4'>
                    <h6>{user.name}</h6>
                    <p>{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )} 
        </div>
      </div>
    </section>
    </>
  )
}
