import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Others() {

    const [others, setOthers] = useState([]);

    async function getCategory() {
        let {data} = await axios.get(`https://fakestoreapi.com/products`);
        setOthers(data.slice(12,20));
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
                <h2>Others Shop</h2>
              </div>
            </div>
          </div>
          {others.map((other , i)=>
          <div className="col-lg-4 col-md-6" key={i}>
            <Link to={`/othersdetails/${other.id}`}>
              <div className='boxs'>
                <img src={other.image} className='w-100' alt="" />
                <div className='d-flex box text-center justify-content-center align-items-center'>
                  <div className='title p-4'>
                    <p>{other.title}</p>
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
