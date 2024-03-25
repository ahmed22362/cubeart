"use client";
import styles from "@/components/adminDashboard/products/add/add.module.css";

const AddPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="title" placeholder="title" required />
        <select name="cat" id="cat" defaultValue={""}>
          <option value="" disabled>
            Choose Category
          </option>
          <option value="mobile">Mobile</option>
          <option value="computer">Computer</option>
          <option value="food">Food</option>
        </select>
        <input type="number" name="price" placeholder="Price in EG Pound" />
        <input type="number" name="stock" placeholder="Stock number" />
        <input type="text" name="color" placeholder="color" />
        <input type="text" name="size" placeholder="size" />
        <div className={styles.upload}>
          <label htmlFor="Images">
            Choose multiple images at once
            <strong> the first one will be the cover image</strong>
          </label>
          <input
            type="file"
            name="image"
            className={styles.uploadImages}
            multiple
          />
        </div>
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddPage;
