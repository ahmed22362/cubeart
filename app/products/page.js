import { SideBar, ComboBox, ProductsList, Footer, NewProducts } from "@/components";

export default function Products() {

    return (
        <>
        <div>
        <main
            style={{
                display: "flex",
                flexDirection: 'row',
                width: "100%",
                padding: "0 15px",
                marginBottom: "20px",
                gap: "10px",
                
            }}
        >
                <ProductsList />
        </main>
        <Footer />
    </div>
    </>
    )
};
