
import ProductCard from './../ProductCard/ProductCard';

export default function AllProducts({ allProducts }) {

    return(
        <>
            {allProducts.map((product, index) => {
                return (
                    <div className="col" style={{width: "300px"}} key={index}>
                        <ProductCard 
                            title={product.title} 
                            currentPrice={product.price}
                            discount={"20"}
                            category={"3D Model"}
                            id={index}
                            />
                    </div>
                )
            })}
        </>
    )
};
