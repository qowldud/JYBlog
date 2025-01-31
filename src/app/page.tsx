import { Profile } from "@/component";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Profile />
      <div className={styles.container__contents}></div>
    </div>
  );
}
