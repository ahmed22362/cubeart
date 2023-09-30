
"use client"
import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBStepper, CDBStep, CDBContainer } from "cdbreact";
import { MainButton } from "@/components";
import './tes.css'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { FormControl } from "@mui/base";

const Stepper = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = a => setActive(a);

  return (
    <CDBContainer>
    <CDBStepper direction="horizontal" activeColor="#666666" completeColor="#505050" incompleteColor="#666666">
      <CDBStep
        id={1}
        name="Technology"
        handleClick={() => handleNextPrevClick(1)}
        active={active}
        component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
      />
      <CDBStep
        id={2}
        name="Color"
        handleClick={() => handleNextPrevClick(2)}
        active={active}
        component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
      />
      <CDBStep
        id={3}
        name="Delivery & Payment"
        handleClick={() => handleNextPrevClick(3)}
        active={active}
        component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
      />
      <CDBStep
        id={4}
        name="Confirm"
        handleClick={() => handleNextPrevClick(4)}
        active={active}
        component={<Step4 handleNextPrevClick={handleNextPrevClick} />}
      />
    </CDBStepper>
  </CDBContainer>
  );
};

export default Stepper;

const Step4 = ({ handleNextPrevClick }) => {
  const router = useRouter()

  return (
    <StepContainer md="12">
      <div className="mt-4 d-flex justify-content-center align-items-center flex-column">
        <div className="circle d-flex justify-content-center align-items-center">
          <img src="images/Done.png" className="w-75 " alt="" />
        </div>
        <div className="mt-5 caption d-flex justify-content-center align-items-center flex-column">
          <p className="h5">Your ID : 34567</p>
          <h3 className="h4">Your Order is Confirmed</h3>
          <p>Thanks for your order </p>
        </div>
        <div className="mb-4 mt-3">
        {/* <MainButton  style={{width:'311px' ,display: 'flex',
            padding: '14px 0px',
            justifyContent: 'center',
            alignItems: 'center'}} text={'Done'} /> */}
            <button onClick={() => router.replace('/')}>Go To Home</button>
        </div>
      </div>
       <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
              <MainButton className={'discardButton'} onclick={() => handleNextPrevClick(3)} text={'Back'}/>
       </div>
    </StepContainer>
  );
};

const Step3 = ({ handleNextPrevClick }) => {
  return (
    <>
      <div style={{ width: '100%',  padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',

          }}
        >
          <div style={{minHeight: '50vh'}}>
            <h3 className="h5">Delivery</h3>
            <FormControlLabel value="" label="Egy Post" control={<Radio />} />
            <div className="payment  my-4">
            <div className="material w-100 d-flex gap-4 align-items-center ">
              <img src="./images/wallet.png" alt="" />
              <div className="caption mt-2">
                <h3 className="h6">Cash on delivery </h3>
              </div>
            </div>
            <div className="material d-flex gap-4 align-items-center ">
              <img src="./images/card-pos.png" alt="" />
              <div className="caption mt-2">
                <h3 className="h6">Visa </h3>
              </div>
            </div>
            </div>
          </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
             <MainButton className={'discardButton'} text={'Back'} onclick={() => handleNextPrevClick(2)} />
           <MainButton className={'me-3 '} text={'Next'} onclick={() => handleNextPrevClick(4)}/>
              </div>
        </div>
      </div>
    </>
  );
};
import { SelectButton } from 'primereact/selectbutton';
import { useRouter } from "next/navigation";
const Step2 = ({ handleNextPrevClick }) => {
  const [Postvalue, setPostValue] = useState(null);
  const items = [
      { name: 'Basic ', value: 'Basic ' },
      { name: 'Polishing', value: 'Polishing' },
      { name: 'Snoozing', value: 'Snoozing' }
  ];
  return (
    <StepContainer md="12">

             <div>
               <h4>Color</h4>
                <div className="color">
                  <span className="red"></span>
                  <span className="green"></span>
                  <span className="yellow"></span>
                </div>
                <div className="post_services mt-4">
                  <h6>Post Processing Services </h6>
                <div className="dropdown d-flex justify-content-center my-3">
                <div className="">
            <SelectButton value={Postvalue} onChange={(e) => setPostValue(e.value)} optionLabel="name" options={items}  />
                 </div>
                </div>
                <h6>Note</h6>
                <textarea name="" id="" placeholder="Do you have any notes ?" cols="30" rows="10"></textarea>
                </div>
            </div>

              <div className="mx-3 " style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <MainButton className='discardButton ' onclick={() => handleNextPrevClick(1)} text={'Back'}/>
                <MainButton className={'me-3'} text={'Next'}  onclick={() => handleNextPrevClick(3)}/>

              </div>
    </StepContainer>
  );
};

const Step1 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer>
      <div style={{ width: '100%',  padding: ' 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
          }}
        >
          <h3>Technelogy</h3>
          <div className="radio_Group d-flex my-2 ms-1">
          <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="SLA"
        name="radio-buttons-group"
      >
       <div className="d-flex">
       <FormControlLabel value="SLA" control={<Radio />} label="SLA" />
        <FormControlLabel value="FDM" control={<Radio />} label="FDM" />
       </div>
      </RadioGroup>
    </FormControl>
          </div>
            </div>
           <div className="box mt-5">
            <h3 className="h5">Material</h3>
            <div className="material d-flex gap-4 align-items-center ">
              <img src="./images/Rectangle12.png" alt="" />
              <div className="caption mt-2">
                <h3 className="h6">Resin</h3>
                <p>LFor Different uses</p>
              </div>
            </div>
            <div className=" material d-flex gap-4 align-items-center ">
              <img src="./images/Rectangle13.png" alt="" />
              <div className="caption mt-2">
                <h3 className="h6">PPMA</h3>
                <p>LFor Dental Uses</p>
              </div>
            </div>
            <div className="layer mt-4 ">
              <h5>Layer Thickness</h5>
              <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="SLA"
        name="radio-buttons-group"
      >
       <div className="d-flex w-100">
       <FormControlLabel value="0.05 " control={<Radio />} label="0.05 mm" />
        <FormControlLabel value="0.1" control={<Radio />} label="0.1mm" />
        <FormControlLabel value="0.2" control={<Radio />} label="0.2mm" />
        <FormControlLabel value="0.3" control={<Radio />} label="0.3mm" />

       </div>
      </RadioGroup>
    </FormControl>
            </div>
            <div className="density mt-5 w-100 ">
              <h4 className="h5">Infill Density</h4>
              <input type="text" placeholder="ex:10 %" className="px-3 py-2 density_value w-100" />
             <div className="quantity mt-3">
             <h4 className="h5">Quantity</h4>
              <input type="text" placeholder="ex:2" className="px-3 py-2 density_value w-100" />
             </div>
            </div>
            <MainButton className={'mt-3'} text={"next"} onclick={() => handleNextPrevClick(2)} />
           </div>
      </div>
    </StepContainer>
  );
};

const FlexColumnContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  box-sizing: border-box;
`;

const StepContainer = styled('div')`
  width: 100%;
  height: 100%;
`;