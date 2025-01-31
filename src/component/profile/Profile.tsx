"use client";

import Image from "next/image";
import styles from "./Profile.module.scss";
import { SiGithub, SiVelog } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

export const Profile = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <Image
          src="/images/profile.jpeg"
          alt="profile image"
          width={250}
          height={250}
        />
      </div>

      <div className={styles.container__name}>
        <span>배지영</span>
      </div>

      <div className={styles.container__contact}>
        <span className={styles.container__contact__title}>CONTACT</span>
        <div className={styles.container__contact__icons}>
          <div
            className={styles.icon}
            onClick={() => router.push("https://github.com/qowldud")}
          >
            <SiGithub size={20} color="#ffffff" />
          </div>
          <div className={styles.icon}>
            <MdEmail size={20} color="#ffffff" />
          </div>
          <div
            className={styles.velog}
            onClick={() => router.push("https://velog.io/@bjy6631/posts")}
          >
            <SiVelog size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
