import Search from "@/components/adminDashboard/search/search";
import styles from "@/components/adminDashboard/users/users.module.css";
import Pagination from "@/components/adminDashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "@/lib/data";

function checkAddress(user) {
  if (
    user.address &&
    user.address.street &&
    user.address.city &&
    user.address.country
  ) {
    return `${user.address.street}-${user.address.city}-${user.address.country}`;
  } else {
    return false;
  }
}
const UserPage = async ({ searchParams }) => {
  const query = searchParams || "";
  const users = await fetchUsers(query);
  return (
    <div className={styles.container}>
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
                  <td>{checkAddress(user) || "N/A"}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link href={`/dashboard/users/${user.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          View
                        </button>
                      </Link>
                      <form action="">
                        <input type="hidden" name="id" value={user.id} />
                        <button className={`${styles.button} ${styles.delete}`}>
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      )}
    </div>
  );
};
export default UserPage;
