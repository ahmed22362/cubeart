import { SideBar, ComboBox, ProductsList, Footer } from "@/components";

export default function Products() {
    return (
        <div>
        <main className="d-flex">
            <SideBar />
            <section style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center"
            }}>
                <ComboBox />
                <ProductsList />
            </section>
        </main>
        <Footer />
    </div>
    )
};
