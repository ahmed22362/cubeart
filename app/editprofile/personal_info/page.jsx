"use client";
import React, { useState, useEffect } from "react";
import "./personalInfoStyle.css";
import { MainButton } from "@/components";
import Cookies from "universal-cookie";

function Page() {
  const url = process.env.NEXT_PUBLIC_URL;
  const token = new Cookies().get("user-access-token");

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    fetch(`${url}/user/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Log the data received from the API
        console.log("User Data:", data);
        // Set the user data received from the API to the state
        setUserData(data.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [url, token]);

  // Function to handle saving the data to the API
  const handleSave = () => {
    const formattedData = {
      name: `${userData?.billing?.first_name || userData.first_name} ${
        userData?.billing?.last_name || userData.last_name
      }`,
      email: userData.email,
      address: {
        location: {
          type: "Point",
          coordinates: [40, 70], // Replace with actual coordinates
        },
        street: userData?.billing?.street || userData?.address?.street || "NA",
        city: userData?.billing?.city || userData?.address?.city || "NA",
        country:
          userData?.billing?.country || userData?.address?.country || "NA",
      },
      billing: {
        apartment: "NA", // Replace with actual value
        email: userData?.billing?.email || userData.email,
        floor: "NA", // Replace with actual value
        first_name: userData?.billing?.first_name || userData.first_name,
        street: "NA", // Replace with actual value
        building: "NA", // Replace with actual value
        phone_number: userData?.billing?.phone_number || userData.phone_number,
        shipping_method: "PKG", // Replace with actual value
        postal_code: "NA", // Replace with actual value
        city: userData?.billing?.country || "NA", // Replace with actual value
        country:
          userData?.billing?.country || userData?.address?.country || "NA",
        last_name: userData?.billing?.last_name || userData.last_name,
        state: "NA", // Replace with actual value
      },
    };

    // Log the data to be sent in the request
    console.log("Formatted Data:", formattedData);

    // Make a PATCH request to update the user data with 'formattedData'
    fetch(`${url}/user/updateMe`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    })
      .then((response) => {
        console.log({
          text: response.text,
          status: response.status,
          body: response.body,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Log the response data
        console.log("Update Response:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

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
                placeholder={userData?.billing?.first_name}
                name="first_name"
                onChange={(e) =>
                  setUserData({ ...userData, first_name: e.target.value })
                }
              />
              <label className="d-block">First name</label>
            </div>
            <div className="last_name">
              <input
                className="input-group form-control"
                type="text"
                placeholder={userData?.billing?.last_name}
                name="last_name"
                value={userData.last_name}
                onChange={(e) =>
                  setUserData({ ...userData, last_name: e.target.value })
                }
              />
              <label className="d-block">Last name</label>
            </div>
          </div>
          <label className="mt-4 d-block" htmlFor="email">
            Email Address
          </label>
          <input
            className="input-group form-control"
            type="email"
            placeholder={userData?.billing?.email}
            name="email"
            id="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <label className="d-block mt-4" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="input-group form-control"
            type="text"
            name="phone"
            placeholder={userData?.billing?.phone_number}
            id="phone"
            value={userData.phone_number}
            onChange={(e) =>
              setUserData({ ...userData, phone_number: e.target.value })
            }
          />

          <label className="d-block mt-4" htmlFor="address">
            Address
          </label>
          <input
            className="input-group form-control"
            type="text"
            name="address"
            placeholder={userData?.billing?.street}
            id="address"
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
          />

          <div className="address d-flex justify-content-between mt-4 gap-4">
            <div className="country">
              <label className="d-block">Country</label>
              <input
                className="input-group form-control"
                type="text"
                placeholder={userData?.billing?.country}
                name="country"
                onChange={(e) =>
                  setUserData({ ...userData, country: e.target.value })
                }
              />
            </div>

            <div className="city">
              <label className="d-block">City</label>
              <input
                className="input-group form-control"
                type="text"
                placeholder={userData.billing?.city}
                name="city"
                onChange={(e) =>
                  setUserData({ ...userData, city: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-button mt-5 d-flex">
            <MainButton className="" text={"Discard"} />
            <MainButton text={"Save"} onclick={handleSave} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
