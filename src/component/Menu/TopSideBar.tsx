"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./TopSideBar.module.scss";

export const TopSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);

  return (
    <div className={styles.container}>
      <div className={styles.container__menues}>
        <div
          className={
            pathname === "/"
              ? styles.container__menues__mainTitle
              : styles.container__menues__title
          }
          onClick={() => router.push("/")}
        >
          <span> Overview</span>
        </div>

        <div
          className={
            pathname === "/projects"
              ? styles.container__menues__mainTitle
              : styles.container__menues__title
          }
          onClick={() => router.push("/projects")}
        >
          <span>Projects</span>
        </div>

        <div
          className={
            pathname === "/post"
              ? styles.container__menues__mainTitle
              : styles.container__menues__title
          }
          onClick={() => router.push("/post")}
        >
          <span>Post</span>
        </div>
      </div>
    </div>
  );
};
