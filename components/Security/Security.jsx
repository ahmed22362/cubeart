import React, { useState } from 'react';
import '../PersonalInfo/PersonalInfo.css';
import { Password } from 'primereact/password';


function Security() {
  const [value, setValue] = useState('');

  return (
    <div className="col-md-7">
    <div>
 
 <label className='ms-3 mt-4 d-block' htmlFor="password">Current Password</label>
 <Password inputClassName='input-group form-control' style={{outline:'none', border:'none'}} className=' form-control' value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
<label className='ms-3 mt-4 d-block' htmlFor='password'>New password</label>
<Password inputClassName='input-group form-control' style={{outline:'none', border:'none'}} className=' form-control' value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
<label className='ms-3 mt-4 d-block' htmlFor='password'>Confrim New password</label>
<Password inputClassName='input-group form-control' style={{outline:'none', border:'none'}} className=' form-control' value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
</div>
    </div>

  )
}

export default Security