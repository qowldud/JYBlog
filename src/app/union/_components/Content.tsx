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

      <div
        className={styles.container__list}
        style={{ flexDirection: "column", gap: "10px" }}
      >
        <div className={styles.container__list__title}>프로젝트 소개</div>
        <div className={styles.container__list__content}>
          유니온은 대학을 의미하는 University에서 Uni를 따오고, online에서 on을
          따와 합쳐서 만들었습니다. <br /> 대학생들이 온라인에서 모인다는 의미가
          있으며 그 단어 자체로도 결합이라는 의미가 있어 대학생들 간의 결합을
          뜻하기도 합니다.
          <br /> 이 앱은 대학 인증을 마친 대학생들끼리 소통할 수 있는
          커뮤니티이며, 모임기능도 제공합니다.
        </div>
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
