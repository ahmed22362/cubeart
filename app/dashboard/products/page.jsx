import Image from "next/image";
import Link from "next/link";
import styles from "@/components/adminDashboard/products/products.module.css";
import Pagination from "@/components/adminDashboard/pagination/pagination";
import SearchSuspenseWrapper from "@/components/adminDashboard/search/SearchSuspenseWrapper";

const ProductsPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchSuspenseWrapper placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                IPhone
              </div>
            </td>
            <td>Desc</td>
            <td>99$</td>
            <td>10.21.2018</td>
            <td>75</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    view
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
