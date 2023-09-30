"use client"
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { MainButton } from '..';
import './whishlist.css'

export default function TemplateDemo() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product A',
      quantity: 2,
      Added: '25-Aug-2023',
      price: 35.0,
      image: '/items/item.png',
      inventoryStatus: 'INSTOCK',
      selected: false,
      value: 'pA',
    },
    {
      id: 2,
      name: 'Product B',
      quantity: 2,
      Added: '2-Jul-2023',
      price: 29.0,
      image: '/items/item.png',
      inventoryStatus: 'LOWSTOCK',
      selected: false,
      value: 'pB',
    },
    {
      id: 3,
      name: 'Product C',
      quantity: 2,
      Added: '12-May-2023',
      price: 42.0,
      image: '/items/item.png',
      inventoryStatus: 'OUTOFSTOCK',
      selected: false,
      value: 'pC',
    },
    // Add more product objects as needed
  ]);

 
  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const toggleSelect = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, selected: !product.selected } : product
      )
    );
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Products</span>
      <Button style={{ float: 'right', margin: '0 0 10px 0' }} icon="pi pi-refresh" rounded raised />
    </div>
  );

  const footer = `In total there are ${products ? products.length : 0} products.`;

  const nameTemplate = (product) => {
    return (
      <Checkbox
        checked={product.selected}
        onChange={() => toggleSelect(product.id)}
      />
    );
  };

  const imageBodyTemplate = (product) => {
    return (
      <>
        <img src={product.image} alt={product.name} className="w-6rem shadow-2 border-round" />
        <span>{product.name}</span>
      </>
    );
  };
 

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const buttons=()=>{

    return(
        <>
        <MainButton className={'special_butto'} text={'Add to Cart '} />
        </>
    )
  }

  const statusBodyTemplate = () => {
    return <i className="bi bi-trash"></i>;
  };
  return (
            <div className="">
              <div className="">
                {products.length === 0 ? (
                  <div className='container mt-5'>
                    <div className=" d-flex justify-content-center  align-items-center flex-column">
                        <div className='w-50 text-center'>
                            <img className='w-' src="images/empty_wishlist.png" alt="no products" />
                            <p className="pt-5 ms- text-center empty_text">Your Wishlist  is empty</p>
                            <p className='text-center ' style={{color: '#292D32',
            fontFamily: 'Poppins',
            fontSize:' 17px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',}}>View more Products</p>
                        </div>
                        <div>
                        <MainButton text={'Shop Now'} />
                        </div>
                    </div>
                  </div>
                ) : (
                  <DataTable
                    responsiveLayout="scroll"
                    value={products}
                        
                    footer={footer}
                    tableStyle={{ maxWidth: 'rem' }}
                  >
                    <Column field="name" header="" body={nameTemplate}></Column>
                    <Column
                      className="w-25"
                      header="Product"
                      field="image"
                      body={imageBodyTemplate}
                    ></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="Added" header="Added on"></Column>
                  
                    <Column
                      header=""
                      bodyClassName={'special_button'}
                      body={buttons}
                    ></Column> 
                    <Column header="Remove" body={statusBodyTemplate}></Column>
                  </DataTable>
                )}
              </div>
            </div>
          );
        }  