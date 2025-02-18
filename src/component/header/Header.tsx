"use client";

import { useRouter } from "next/navigation";
import styles from "./Header.module.scss";

export const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.container__title} onClick={() => router.push("/")}>
        JYBlog
      </div>
    </div>
  );
};
