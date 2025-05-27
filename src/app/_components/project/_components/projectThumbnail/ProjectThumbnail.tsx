"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./ProjectThumbnail.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  photo: string | StaticImageData;
  name: string;
  route: string;
}

export const ProjectThumbnail = ({ photo, name, route }: Props) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => router.push(route)}
    >
      <Image
        src={photo}
        alt={name}
        width={150}
        height={120}
        layout="intrinsic"
        className={styles.thumbnail}
      />

      {isHover && <div className={styles.container__blur}>{name}</div>}
    </div>
  );
};
