import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "pi pi-chart-line",
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: "pi pi-users",
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: "pi pi-shopping-cart",
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: "pi pi-money-bill",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: "pi pi-briefcase",
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: "pi pi-file",
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: "pi pi-users",
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: "pi pi-cog",
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: "pi pi-question-circle",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/cubuild-logo.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Ahmed Makhlouf</span>
          <span className={styles.userTitle}>Administrative</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.category}>{cat.title}</span>
            {cat.list.map((link) => (
              <MenuLink item={link} key={link.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <i className="pi pi-sign-out"></i>
        Logout
      </button>
    </div>
  );
};
export default Sidebar;
