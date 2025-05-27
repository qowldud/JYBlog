import Image from "next/image";
import styles from "./page.module.scss";
import Content from "./_components/Content";
import InpeakImg from "../../assets/images/인픽 2.png";

function Inpeak() {
  return (
    <div className={styles.container}>
      <div className={styles.container__thumbnail}>
        <div className={styles.container__thumbnail__photo}>
          <Image
            src={InpeakImg}
            alt="png"
            width={120}
            height={120}
            layout="intrinsic"
          />
        </div>

        <div className={styles.container__info}>
          <div className={styles.container__info__title}>INPEAK</div>
          <div className={styles.container__info__subTitle}>
            개발자 기술면접을 대비하기 위한 서비스
          </div>
        </div>
      </div>

      <Content />
    </div>
  );
}

export default Inpeak;
