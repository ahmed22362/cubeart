import { MainButton } from "@/components";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./checkout.css";

function checkout() {
  return (
    <div className="row">
      <div className="col-md-5">
        <div>
          <div
            className="address"
            style={{
              borderRadius: "8px",
              backgroundColor: "#F8FCFD",
              padding: "15px",
            }}
          >
            <h3>Address</h3>
            <h5>Salma Sherif</h5>
            <p>Fayoum - Fayum , Egypt</p>
            <p>+0201123456789</p>
            <MainButton text={"Change"} />
          </div>
          <div
            className="payment mt-3"
            style={{
              borderRadius: "8px",
              backgroundColor: "#F8FCFD",
              padding: "15px",
            }}
          >
            <h3>Payment</h3>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="SLA"
              name="radio-buttons-group"
            >
              <div className="">
                <div className="d-flex gap-3 mt-2">
                  <i className="bi bi-wallet2"></i>
                  <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label={` Cash on delivery `}
                  />
                </div>
                <div className="d-flex gap-3 mt-2">
                  <i className="fa-brands fa-cc-visa mt-2"></i>
                  <FormControlLabel
                    value="visa"
                    control={<Radio />}
                    label="Visa"
                  />
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div>
          <h3>Your Order</h3>
          <div className="  d-flex flex-column ">
            <div
              className="order p-5 pb-0 mb-3 d-flex gap-5"
              style={{ backgroundColor: "#F8FCFD" }}
            >
              <div className="pic d-flex ">
                <Image className="w-100" src="/items/item.png" alt="" />
              </div>
              <div className="caption">
                <h3>Hunting Cat 3D Printable</h3>
                <p>80 EGP </p>
                <p>Delivery within 5 days</p>
                <span className="p-3 bg-white border mb-5 ">2</span>
              </div>
            </div>

            <div className="order p-4 order_summary ">
              <h4>Order Summary</h4>
              <div className="total d-flex align-items-center justify-content-between">
                <p>Sub total </p>
                <span>35 EGP</span>
              </div>
              <div className="delivery d-flex align-items-center justify-content-between mt-3">
                <p>Delivery Charge</p>
                <span>105 EGP </span>
              </div>
              <div className="total mt-3 d-flex align-items-center justify-content-between">
                <p> Total </p>
                <span>135 EGP</span>
              </div>
              <MainButton text={"Confirm"} className="m-auto mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
