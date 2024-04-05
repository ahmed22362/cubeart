import Image from "next/image";
import React from "react";
import "./fileCart.css";

function page() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Added on</th>
            <th>Price</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Remove</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
              {/* <Image
               alt="product"
               className="me-2"
               src={'./images/image 12.png'}
               style={{ borderRadius: "10px" }}
               width={60}
               height={60}
             /> */}
              title
            </td>
            <td className="add_on">fdfr</td>
            <td>108 EGP</td>
            <td>
              {" "}
              <i
                style={{ fontSize: "12px" }}
                className="text-success  bi bi-circle-fill"
              ></i>{" "}
              completed
            </td>
            <td>
              <Image src="../images/edit.png" alt="" />
            </td>
            <td>
              <i className="ms-3 bi bi-trash"></i>
            </td>
            <td>
              <button className="cart_button">Add To Cart</button>
              {/* <Button label="Success" className="p-button-success"></Button> */}
              {/* <i className="bi bi-cart-dash" 
                ></i> */}
            </td>
          </tr>
          {/* <tr>
         <td colSpan="5">No items in your wishlist</td>
       </tr> */}
        </tbody>
      </table>
    </>
  );
}

export default page;
