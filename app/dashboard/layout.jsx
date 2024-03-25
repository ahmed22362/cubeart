import Navbar from "@/components/adminDashboard/navbar/navbar";
import Sidebar from "@/components/adminDashboard/sidebar/sidebar";
import "./admin.css";
import styles from "../../components/adminDashboard/dashboard.module.css";
import Footer from "@/components/adminDashboard/footer/footer";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Layout;
