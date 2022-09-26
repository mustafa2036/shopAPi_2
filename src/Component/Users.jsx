import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../Component/Style/Style.css'

export default function Store() {

  const [users, setUsers] = useState([]);

  async function getUser() {
    let {data} = await axios.get(`https://api.escuelajs.co/api/v1/users`);
    setUsers(data.slice(0,3));
  }

  useEffect(()=>{
    getUser();
  },[]);

  return (
    <>
    <section className='store py-5'>
      <div className='container'>
        <div className='row gy-4'>
        <div className="col-lg-12">
          <div className='pt-5 pb-1 px-4 d-flex justify-content-center align-items-center'>
            <div className='py-5'>
              <h2>User Shop</h2>
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
                    <p>{user.email}</p>
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
