import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function Othersdetails() {

    const params = useParams();

    const [othersdetails, setOthersDetails] = useState(null);

    async function getCategory(id) {
        let {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setOthersDetails(data);
    };

    useEffect(()=>{
        getCategory(params.id);
    },[params.id]);

  return (
    <>
     <section className='py-5 bg-light other-details'>
        <div className='container'>
            {othersdetails?
            <div className="row">
                <div className="col-md-4">
                    <img src={othersdetails?.image} className='w-100' alt="" />
                </div>
                <div className="col-md-8">
                    <div className='py-5 d-flex py-5 justify-content-center align-items-center'>
                        <div className='py-1 px-4'>
                            <h6 className='mb-4'>{othersdetails.title}</h6>
                            <p className='mb-4'>Description: {othersdetails.description}</p>
                            <h3 className='mb-3'>Price: ${othersdetails.price}</h3>
                            <h5 className='mb-3'>Rate: {othersdetails.rating.rate}</h5>
                            <h4 className='mb-3'>Category is : {othersdetails.category}</h4>
                        </div>
                    </div>
                </div>
            </div>: <div className='d-flex justify-content-center align-items-center'>
                <i className='fas fa-spin fa-spinner fs-1 text-info'></i>
            </div>
            }
        </div>
    </section> 
    </>
  )
}
