'use client'

import ProductCard from "../ProductCard/ProductCard";

export default function Recommendations() {
    return(
        <>
            <div className="px-5">
                <h2>Recommendations</h2>
                <div className="d-flex flex-wrap justify-content-center py-5">
                    <ProductCard title="Hunting Cat 3D Printable" currentPrice="80" image="/Items/item.png" category="3D Model" />
                    <ProductCard title="Hunting Cat 3D Printable" currentPrice="80" image="/Items/item2.png" category="3D Model" />
                    <ProductCard title="Hunting Cat 3D Printable" currentPrice="80" image="/Items/item3.png" category="3D Model" />
                    <ProductCard title="Hunting Cat 3D Printable" currentPrice="80" image="/Items/item4.png" category="3D Model" />
                </div>
            </div>
        </>
    )
};
