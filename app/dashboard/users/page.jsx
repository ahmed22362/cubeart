"use client";
import Search from "@/components/adminDashboard/search/search";
import styles from "@/components/adminDashboard/users/users.module.css";
import Pagination from "@/components/adminDashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "@/lib/data";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "@/lib/action";
import Spinner from "@/components/adminDashboard/spinner/spinner";

const UserPage = ({ searchParams }) => {
  const query = searchParams || "";
  const page = searchParams.page || 1;
  const [users, setUsers] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  const handleDelete = async (userId) => {
    try {
      setDeletingUser(userId);
      const res = await deleteUser(userId);
      if (res.status === "success") {
        toast.success("User deleted successfully");
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      } else {
        toast.error(`Error deleting user: ${res.message}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setDeletingUser(null);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await fetchUsers(query, page);
      setUsers(fetchedUsers);
    };
    fetchData();
  }, [query, page]);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <ToastContainer />

      <div className={styles.top}>
        <Search placeholder="Search by name..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      {users.data.length === 0 ? (
        <p className={styles.noUsersMessage}>No users found. {users.message}</p>
      ) : (
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Created At</td>
                <td>Role</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className={styles.user}>
                      <Image
                        src={user.img || "/noavatar.jpg"}
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}
                      />
                      {user.name}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.createdAt?.toString().split("T")[0]}</td>
                  <td>{user.role}</td>
                  <td>{user.address || "N/A"}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link href={`/dashboard/users/${user.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          View
                        </button>
                      </Link>
                      {/* Conditional rendering based on loading state */}
                      {deletingUser === user.id ? (
                        <button
                          className={`${styles.button} ${styles.delete}`}
                          disabled
                        >
                          <Spinner />
                        </button>
                      ) : (
                        <button
                          className={`${styles.button} ${styles.delete}`}
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination count={users.results} />
        </div>
      )}
    </div>
  );
};
export default UserPage;
