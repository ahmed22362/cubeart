'use client';

import AllProducts from '../AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import styles from './productsPage.module.css'


export default function ProductsList() {
  const size = 9;
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`https://cubuild.onrender.com/api/v1/product?page=${pageNumber}&limit=9`);
    
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  return (
    <section className={styles.productsSection}>
        <div className={styles.pagination}>
        <button
          className={styles.previous}
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={isLoading || pageNumber === 1}
        >
          Previous
        </button>
        <button
          className={styles.next}
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={isLoading || !data || data.data.length < size}
        >
          Next
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-100" style={{ gap: '70px', justifyContent: 'center' }}>
        {isLoading ? (
          <Loading />
        ) : (
          data && <AllProducts allProducts={data.data} />
        )}
      </div>
    </section>
  );
}