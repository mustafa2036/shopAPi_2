import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function ShopDetalis() {
    
    const params = useParams();
    const [shopDetails, setShopDetails] = useState(null);

    async function getShopDetalis(id){
        let {data} = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setShopDetails(data);
    };

    useEffect(()=> {
        getShopDetalis(params.id)
    }, [params.id]);

  return (
    <>
    <section className='py-5 store-details bg-light'>
        <div className='container'>
            {shopDetails?
            <div className="row">
                <div className="col-lg-4">
                    <img src={shopDetails?.images[0]} className='w-100' alt="" />
                </div>
                <div className="col-lg-8">
                    <div className='d-flex py-5 justify-content-center align-items-center'>
                        <div className='py-2 px-4'>
                            <h6 className='mb-4'>{shopDetails.title}</h6>
                            <p className='mb-2'>Description: {shopDetails.description}</p>
                            <h3 className='mb-3'>Price: ${shopDetails.price}</h3>
                            <h4 className='mb-2'>Category is : {shopDetails.category.name}</h4>
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
