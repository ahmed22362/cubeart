"use client";
import styles from "@/components/adminDashboard/users/singleUser/singleUser.module.css";
import { updateUser } from "@/lib/action";
import { fetchUser } from "@/lib/data";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "@/components/adminDashboard/spinner/spinner";
import { useCallback, useEffect, useState } from "react";

const SingleUserPage = ({ params }) => {
  const [userData, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataResponse = await fetchUser(params.id);
        setUser(userDataResponse.data);
        setFormData({
          name: userDataResponse.data.name,
          email: userDataResponse.data.email,
          phoneNumber: userDataResponse.data.phoneNumber,
          address: userDataResponse.data.address,
          role: userDataResponse.data.role,
        });
      } catch (error) {
        console.error("Error fetching userData data:", error);
      }
    };
    fetchUserData();
  }, [params.id]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        // Filter out empty and unchanged values
        const updatedData = Object.entries(formData).reduce(
          (acc, [key, value]) => {
            if (value !== "" && value !== userData[key]) {
              acc[key] = value;
            }
            return acc;
          },
          {},
        );

        if (Object.keys(updatedData).length === 0) {
          toast.info(`No changes to update`);
          console.log("No changes to update");
          return;
        }
        const res = await updateUser(params.id, updatedData);
        console.log("User updated:", res);
      } catch (error) {
        console.error("Error updating userData:", error);
      } finally {
        setLoading(false);
      }
    },
    [formData, params.id, userData],
  );
  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={formData.img || "/noavatar.jpg"} alt="" fill />
        </div>
        {userData.name}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" />
          <label>User name</label>
          <input
            type="text"
            name="name"
            placeholder={formData.name}
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={formData.email}
            value={formData.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
          <label>Phone</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder={formData.phoneNumber}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <label>Is Admin?</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value={"admin"}>Yes</option>
            <option value={"user"}>No</option>
          </select>
          <button disabled={loading} onClick={handleUpdate}>
            {loading ? <Spinner /> : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
