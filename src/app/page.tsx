import Image from "next/image";
import styles from "./page.module.css";
import Login from "./login/page";
import Register from "./register/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Register/>
     
    </div>
  );
}
