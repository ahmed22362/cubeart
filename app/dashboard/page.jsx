import Card from "@/components/adminDashboard/card/card";
import styles from "../../components/adminDashboard/dashboard.module.css";
import Transaction from "@/components/adminDashboard/transactions/transactions";
import Chart from "@/components/adminDashboard/chart/chart";
const Admin = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
      <Transaction />
      <Chart />
    </div>
  );
};
export default Admin;
