import Image from "next/image";
import styles from "./page.module.scss";
import Content from "./_components/Content";

function Union() {
  return (
    <div className={styles.container}>
      <div className={styles.container__thumbnail}>
        <div className={styles.container__thumbnail__photo}>
          <Image
            src="/images/union.png"
            alt="png"
            width={120}
            height={120}
            layout="intrinsic"
          />
        </div>

        <div className={styles.container__info}>
          <div className={styles.container__info__title}>UNION</div>
          <div className={styles.container__info__subTitle}>
            대학생들을 위한 커뮤니티
          </div>
        </div>
      </div>

      <Content />
    </div>
  );
}

export default Union;
