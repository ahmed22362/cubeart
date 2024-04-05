import ProductCard from "../ProductCard/ProductCard";

export default function AllProducts({ allProducts }) {
  if (allProducts.length > 0) {
    return (
      <>
        {allProducts.map((product, index) => {
          return (
            <div className="col" style={{ width: "300px" }} key={index}>
              <ProductCard
                title={product.title}
                currentPrice={product.price}
                category={"3D Model"}
                image={product.coverImage || "/items/item.png"}
                id={product.id}
              />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <h2>there is no products</h2>
      </>
    );
  }
}
