import Image from "next/image";
import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.container__list}>
        <div className={styles.container__list__title}>개발 기간</div>
        <div className={styles.container__list__content}>
          2024.10.14 ~ 2024.11.12
        </div>
      </div>

      <div className={styles.container__list}>
        <div className={styles.container__list__title}>플랫폼</div>
        <div className={styles.container__list__content}>Web</div>
      </div>

      <div className={styles.container__list}>
        <div className={styles.container__list__title}>개발 인원</div>
        <div className={styles.container__list__content}>
          6명(프론트 3 백엔드 3)
        </div>
      </div>

      <div className={styles.container__list}>
        <div className={styles.container__list__title}>담당 역할</div>
        <div className={styles.container__list__content}>
          게시판, 모임 상세 페이지 & 글쓰기 기능 구현, 카카오 API를 활용한 지도
          기능 구현, 채팅 화면 (FE로 참여)
        </div>
      </div>

      <div
        className={styles.container__list}
        style={{ flexDirection: "column" }}
      >
        <div className={styles.container__list__title}>개발 환경</div>
        <Image
          src="/images/Architecture.png"
          alt="architecture"
          width={500}
          height={500}
          layout="intrinsic"
        />
      </div>

      <div className={styles.container__imageBox}>
        <div className={styles.container__imageBox__title}>프로젝트 영상</div>
        <video controls width={1000}>
          <source src="/images/union/union.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Content;
