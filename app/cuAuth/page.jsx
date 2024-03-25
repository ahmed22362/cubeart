import styles from "@/components/cuAuth/cuAuth.module.css";

function page() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="userName" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default page;
