"use client"
import React, { useState } from 'react';
import '../personal_info/personalInfoStyle.css';
import { Password } from 'primereact/password';
import { MainButton } from '@/components';


function page() {
  const [value, setValue] = useState('');

  return (
    <div className="col-md-7">
      <h5>Security Section</h5>
      <form action="">
        <div className='p-5 mb-5 bg-white rounded'>
          <label className='ms-3 mt-4 d-block' htmlFor="password">Current Password</label>
          <Password inputClassName='input-group form-control' style={{outline:'none', border:'none', position: "relative"}} className=' form-control' value={value} onChange={(e) => setValue(e.target.value)} toggleMask autoComplete='off' />
          <label className='ms-3 mt-4 d-block' htmlFor='password'>New password</label>
          <Password inputClassName='input-group form-control' style={{outline:'none', border:'none', position: "relative"}} className=' form-control' value={value} onChange={(e) => setValue(e.target.value)} toggleMask autoComplete='off' />
          <label className='ms-3 mt-4 d-block' htmlFor='password'>Confirm New password</label>
          <Password inputClassName='input-group form-control' style={{outline:'none', border:'none', position: "relative"}} className=' form-control' value={value} onChange={(e) => setValue(e.target.value)} toggleMask autoComplete='off' />
          <div className="form-button mt-5 d-flex">
          <MainButton className='discardButton' text={'Discard'}/>
          <MainButton text={'Save'}/>
          </div>
      </div>
    </form>
</div>

  )
}

export default page