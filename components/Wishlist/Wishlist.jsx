
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from "primereact/checkbox";


export default function TemplateDemo() {
    const [checked, setChecked] = useState(false);

       const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { number:1  },
        { number:2 },
        { number:3  },
        { number:4  },
        { number:5 }
    ];
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Product A',
            quantity: 2,
           Added: '25-Aug-2023',
            price: 35.0,
            image: '/images/image6.png',
            inventoryStatus: 'INSTOCK',
        },
        {
            id: 2,
            name: 'Product B',
            quantity: 2,
           Added: '2-Jul-2023',
            price: 29.0,
            image: '/images/image6.png',
            inventoryStatus: 'LOWSTOCK',
        },
        {
            id: 3,
            name: 'Product C',
            quantity: 2,
           Added: '12-May-2023',
            price: 42.0,
            image: '/images/image6.png',
            inventoryStatus: 'OUTOFSTOCK',
        },
        // Add more product objects as needed
    ]);
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return(
            <>
             <img src={`${product.image}`} alt={product.image} className="w-6rem shadow-2 border-round" />
             <span>Hunting Cat 3DPrintable</span>
            </>
        ) ;
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Dropdown value={product.quantity} onChange={(e) => setSelectedCity(product.quantity)} options={cities} optionLabel="number" 
         className="" />
    };

    const nameTemplate = (product) => {
        return <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        ;
    };
    const statusBodyTemplate = (product) => {
        return <Tag icon={<i class="bi bi-trash"></i>} ></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button style={{float:'right', margin: '0 0 10px 0'}} icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card">
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="name" header="" body={nameTemplate}></Column>
                <Column className='w-25' header="Product" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="Added" header="Added on"></Column>
                <Column field="quantity" header="quantity" body={ratingBodyTemplate}></Column>
                <Column header="remove" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        