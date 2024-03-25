"use client";

import PaymentMethods from "@/components/Cart/Cart";
import React from "react";
import "./cart.css";

function page() {
  return (
    <>
      <div className="control">
        <PaymentMethods />
      </div>
    </>
  );
}

export default page;
