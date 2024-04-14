"use client";
import styles from "@/components/adminDashboard/users/add/add.module.css";
import { addUser } from "@/lib/action";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "@/components/adminDashboard/spinner/spinner";

const AddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    phoneNumber: "",
    isAdmin: false,
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if password and password confirmation match
    if (formData.passwordConfirmation !== formData.password) {
      toast.error("make sure password and password confirmation match");
    }
    setLoading(true);
    try {
      const res = await addUser(formData);
      if (res.status === "success") {
        toast.success("User added successfully");
        window.location.href = "/dashboard/users";
      } else {
        toast.error(`Error adding user: ${res.message}`);
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error(`Error adding user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="user's name"
          name="name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password Confirmation"
          name="passwordConfirmation"
          required
          onChange={handleChange}
        />
        <input
          type="phone"
          placeholder="phone"
          name="phoneNumber"
          onChange={handleChange}
        />
        <select name="role" id="role" onChange={handleChange}>
          <option value={"user"}>Is Admin?</option>
          <option value={"admin"}>Yes</option>
          <option value={"user"}>No</option>
        </select>
        <input
          type="text"
          placeholder="address ex: county, city, street"
          name="address"
          className={styles.address}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? <Spinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddPage;
