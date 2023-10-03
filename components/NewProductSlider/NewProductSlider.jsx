'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {useState, useEffect } from 'react';
import { ProductCard } from '..';

const ProductCarousel = () => {
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          setItemsToShow(2);
        } else if (screenWidth < 992) {
          setItemsToShow(3);
        } else {
          setItemsToShow(5);
        }
      };
  
      handleResize(); // Initial calculation
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const renderProducts = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = process.env.API_URL;


  useEffect(() => {
      fetch(`${url}/product?limit=10`)
          .then(response => response.json())
          .then(data => {
              setIsLoading(false);
              setProducts(data.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []); 

    const productChunks = [];
    for (let i = 0; i < products.length; i += itemsToShow) {
      productChunks.push(products.slice(i, i + itemsToShow));
    }

    return productChunks.map((chunk, index) => (
      <div key={index} style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
        {chunk.map((product) => (
          <ProductCard 
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.coverImage}
          />
        ))}
      </div>
    ));
  };

  return (
    <Carousel
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
    swipeable
    emulateTouch
    infiniteLoop
    autoPlay
    interval={5000}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <>
          <button
            type="button"
            aria-label={label}
            className="carousel-arrow arrow-prev"
            onClick={onClickHandler}
          ><i className='bi bi-caret-left-fill'></i></button>
          </>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
            <>
            <button
            type="button"
            aria-label={label}
            className={ "carousel-arrow arrow-next"}
            onClick={onClickHandler}
            ><i className='bi bi-caret-right-fill'></i></button>
            </>
        )
      }
    >
      {renderProducts()}
    </Carousel>
  );
};

export default ProductCarousel;