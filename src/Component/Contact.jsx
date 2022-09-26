import React from 'react'


export default function Contact() {
  return (
    <>
     
      <section className='contact py-5'>
        <div className="container">
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="username" className='mb-2'>Name :</label>
                <input type="text" className='form-control py-2 px-1 mb-3' placeholder='Name' />
              </div>

              <div className="col-md-6">
                <label htmlFor="useremail" className='mb-2'>Email :</label>
                <input type="email" className='form-control py-2 px-1 mb-3' placeholder='Email' />
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className='mb-2'>PhoneNumber :</label>
                <input type="number" className='form-control py-2 px-1 mb-3' placeholder='Phone' />
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className='mb-2'>Brithday :</label>
                <input type='date' className='form-control py-2 px-1 mb-3' placeholder='Brithday' />
              </div>

              <div className="col-md-12">
                <label htmlFor="message" className='mb-2'>Message :</label>
                <textarea className='form-control py-2 px-1 mb-3'></textarea>
              </div>

              <div className="col-md-12">
                <label htmlFor="password" className='mb-2'>Password :</label>
                <input type="password" className='form-control py-2 px-1 mb-3' placeholder='Passwrod' />
              </div>
            </div>




          </div>
        </div>
      </section>
    </>
  )
}
