"use client";
import React, { Suspense, useState } from "react";
import "./personalInfoStyle.css";
import { MainButton } from "@/components";

function page() {
  const name = "mangood";

  return (
    <>
      <div className="col-lg-7  col-sm-9 ">
        <div className="shadow p-5 mb-5 bg-white rounded ">
          <h5 className=" mb-4 ">Full Name</h5>

          <div className="full_name d-flex justify-content-between gap-5 ">
            <div className="first_name basis-1">
              <input
                className="input-group form-control"
                type="text"
                placeholder={name}
                name="first_name"
              />
              <label className="d-block">First name</label>
            </div>
            <div className="last_name">
              <input
                className="input-group form-control"
                type="text"
                placeholder="Mostafa"
                name="last_name"
              />
              <label className="d-block">Last name</label>
            </div>
          </div>
          <label className="mt-4 d-block" htmlFor="emai">
            Email Address
          </label>
          <input
            className="input-group form-control"
            type="email"
            placeholder="ahmed@codegate.com"
            name="email"
            id="email"
          />

          <label className="d-block mt-4" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="input-group form-control"
            type="number"
            name="phone"
            placeholder="01123456789"
            id="phone"
          />

          <label className="d-block mt-4" htmlFor="address">
            Phone Number
          </label>
          <input
            className="input-group form-control"
            type="text"
            name="phone"
            placeholder="15 Elmohamdia street"
            id="address"
          />

          <div className="address d-flex justify-content-between mt-4 gap-4">
            <div className="country">
              <label className="d-block">Country</label>
              <input
                className="input-group form-control"
                type="text"
                placeholder="Egypt"
                name="country"
              />
            </div>

            <div className="city">
              <label className="d-block">City</label>
              <input
                className="input-group form-control"
                type="text"
                placeholder="Fayoum"
                name="city"
              />
            </div>
          </div>
          <div className="form-button mt-5 d-flex">
            <MainButton className="" text={"Discard"} />
            <MainButton text={"Save"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
