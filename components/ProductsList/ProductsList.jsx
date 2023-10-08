"use client";

import AllProducts from "../MapProducts/MapProducts";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import styles from "./productsPage.module.css";
import Form from "react-bootstrap/Form";
import { Offcanvas } from "react-bootstrap";
import Categories from "@/components/ComboBox/CatBox";

export default function ProductsList() {
  const size = 9;
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toPrice, setToPrice] = useState(0);
  const [fromPrice, setfromPrice] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = process.env.NEXT_PUBLIC_URL;
  const [selectedValue, setSelectedValue] = useState("");


  const handleOptionClick = (value) => {
    setSelectedValue(value);
    selectionData(value);
  };

  const selectionData = (value) => {
    fetch(`${url}/product?page=${pageNumber}&limit=${size}&sort=${value}`)
      .then((response) => response.json())
      .then((filterSelectionData) => {
        setData(filterSelectionData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/product?page=${pageNumber}&limit=${size}`);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  const handleToPriceChange = (event) => {
    setToPrice(event.target.value);
  };
  const handleFromPriceChange = (event) => {
    setfromPrice(event.target.value);
  };

  const submitThePriceValuesFromInputs = (event) => {
    event.preventDefault();
    let toPriceValue = toPrice < 0 ? 0 : toPrice;
    let fromPriceValue = fromPrice < 0 ? 0 : fromPrice;
    fetch(
      `${url}/product?page=${pageNumber}&limit=${size}&price[lt]=${toPriceValue}&price[gt]=${fromPriceValue}&sort=price`
    )
      .then((response) => response.json())
      .then((filterData) => {
        setData(filterData);
      })
      .catch((error) => {
        console.error(error);
      });
      handleClose();
  };

  const resetAll = () => {
    fetchData();
  }
  return (
    <>
      <button className={styles.offCanvasButton} onClick={handleShow}>open filter</button>
      <Offcanvas show={show} onHide={handleClose} className={styles.offCanvasSection}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            <h3
              className="text-center"
              style={{ color: "#292D32", fontSize: "32px" }}
            >
              Filter
            </h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "70px",
          }}>
          <div>
          <h4>Price</h4>
          <div className={styles.priceRange}>
            <input
              type="range"
              value={fromPrice}
              onChange={handleFromPriceChange}
            />
            <input
              type="range"
              value={toPrice}
              onChange={handleToPriceChange}
            />
          </div>
        </div>
        <form action="" className={styles.formFilter}>
          <div className={styles.inputBox}>
            <label>From</label>
            <input
              type="number"
              min={"0"}
              onChange={(e) => setfromPrice(e.target.value)}
              value={fromPrice || 0}
              className="priceFrom"
              placeholder={"0"}
              name="from"
            />
          </div>
          <div className={styles.inputBox}>
            <label>To</label>
            <input
              type="number"
              min={"0"}
              onChange={(e) => setToPrice(e.target.value)}
              value={toPrice || 0}
              className="priceTo"
              placeholder={"0"}
              name="to"
            />
          </div>
        </form>
        <div className={styles.btnResult}>
          <button
            className={styles.submitButton}
            onClick={submitThePriceValuesFromInputs}
          >
            Show Result
          </button>
        </div>
          </Offcanvas.Body>
        </Offcanvas>
      <div className={styles.sideBar}>
        <h3
          className="text-center"
          style={{ color: "#292D32", fontSize: "32px" }}
        >
          Filter
        </h3>
        <div>
          <h4>Price</h4>
          <div className={styles.priceRange}>
            <input
              type="range"
              value={fromPrice}
              onChange={handleFromPriceChange}
            />
            <input
              type="range"
              value={toPrice}
              onChange={handleToPriceChange}
            />
          </div>
        </div>
        <form action="" className={styles.formFilter}>
          <div className={styles.inputBox}>
            <label>From</label>
            <input
              type="number"
              min={"0"}
              onChange={(e) => setfromPrice(e.target.value)}
              value={fromPrice || 0}
              className="priceFrom"
              placeholder={"0"}
              name="from"
            />
          </div>
          <div className={styles.inputBox}>
            <label>To</label>
            <input
              type="number"
              min={"0"}
              onChange={(e) => setToPrice(e.target.value)}
              value={toPrice || 0}
              className="priceTo"
              placeholder={"0"}
              name="to"
            />
          </div>
        </form>
        <div className={styles.btnResult}>
          <button
            className={styles.submitButton}
            onClick={submitThePriceValuesFromInputs}
          >
            Show Result
          </button>
        </div>
      </div>
      <section className="comboBoxAndProducts" style={{ flex: "1", marginTop: "55px" }}>
        <section className={styles.comboBox + " my-5"}>
          <div className={styles.categories}>
            <span className={'text-primary'} onClick={() => resetAll()}>Reset All</span>
                <div className={styles.catBox}>
                  <Categories setData={setData} resetAll={resetAll}/>
                </div>
          </div>
          <div className={styles.sort}>
            <label>sort by : </label>
            <Form.Select
              size="lg"
              className={styles.selectComponent}
              value={selectedValue}
              onChange={(e) => handleOptionClick(e.target.value)}

            >
              <option defaultValue>select sorting option</option>
              <option value={"price"}>Price - Low to High</option>
              <option value={"-price"}>Price - High to low</option>
            </Form.Select>
          </div>
        </section>
        <section className={styles.productsSection}>
          <div className={styles.pagination}>
            <button
              className={styles.previous}
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={isLoading || pageNumber === 1}
            >
              <i className="bi bi-arrow-left-circle"></i>
            </button>
            <button
              className={styles.next}
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={isLoading || !data || data.data.length < size}
            >
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
          <div
            className="row row-cols-1 row-cols-md-3 g-4 w-100"
            style={{ gap: "35px", justifyContent: "center" }}
          >
            {isLoading ? (
              <Loading />
            ) : (
              data && <AllProducts allProducts={data.data} />
            )}
          </div>
        </section>
      </section>
    </>
  );
}
