"use client";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useState, useEffect } from "react";
import { ListBox } from "primereact/listbox";
import styles from "@/components/ProductsList/productsPage.module.css";

const Categories = ({ setData }) => {
  const [selectedTags, setSelectedTags] = useState("");

  const tags = ["3D", "Cat", "Decor", "Animal", "Design"];

  const filterByCategory = (value) => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/product?tags=${value}`)
      .then((response) => response.json())
      .then((fetchData) => {
        setData(fetchData);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="card flex justify-content-center">
      <ListBox
        multiple
        value={selectedTags}
        onChange={(e) => {
          setSelectedTags(e.value);
          filterByCategory(e.value);
        }}
        options={tags}
        className={"w-full md:w-14rem " + styles.tagsBox}
        style={{ border: "0px" }}
      />
    </div>
  );
};
export default Categories;
