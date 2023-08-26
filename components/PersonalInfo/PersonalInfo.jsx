import React, { useState } from 'react';
import './PersonalInfo.css';
import BadeMap from '../BadeMap/BadeMap';



      

function PersonalInfo() {
  const name='mangood';
 
  return (
    <>
      
  <div className="col-lg-6 mt-5 col-sm-9 ms-lg-4">
       <div >
       <h5 className=' mb-4 '>Full Name</h5>

<div className="full_name d-flex justify-content- gap-5 ">
 <div className="first_name basis-1">
 <input className='input-group form-control' type="text" placeholder={name} name="first_name" />
<label className='d-block'>First name</label>
 </div>
 <div className="last_name">
 <input className='input-group form-control' type="text" placeholder='Mostafa' name="last_name" />
<label className='d-block'>Last name</label>
 </div>
</div>
<label className='mt-4 d-block' htmlFor="emai">Email Address</label>
<input className='input-group form-control' type="email" placeholder='ahmed@codegate.com' name="email" id="email" />

<label className='d-block mt-4' htmlFor="phone">Phone Number</label>
<input className='input-group form-control' type="number" name="phone" placeholder='01123456789' id="phone" />

<label className='d-block mt-4' htmlFor="address">Phone Number</label>
<input className='input-group form-control' type="text" name="phone" placeholder='15 Elmohamdia street' id="address" />

<div className="address d-flex mt-4 gap-4">
 <div className="country">
<label className='d-block'>Country</label>
 <input className='input-group form-control' type="text" placeholder='Egypt' name="country" />
 </div>

 <div className="city">
<label className='d-block'>City</label>
 <input className='input-group form-control' type="text" placeholder='Fayoum' name="city" />
 </div>
</div>
      </div>
     </div>
     <div className="col-md-5">
      <div className='mt-5'>
        <BadeMap/>
      </div>
     </div>
    
         
    </>
  )
}

export default PersonalInfo