import { Profile } from "@/component";
import styles from "./page.module.scss";
import Introduction from "./_components/Introduction/Introduction";
import { Project } from "./_components/project/Project";

export default function Home() {
  return (
    <div className={styles.container}>
      <Profile />
      <div className={styles.container__contents}>
        <Introduction />
        <Project />
      </div>
    </div>
  );
}
