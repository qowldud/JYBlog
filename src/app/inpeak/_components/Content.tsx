import styles from "./Content.module.scss";
import Image from "next/image";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.container__list}>
        <div className={styles.container__list__title}>개발 기간</div>
        <div className={styles.container__list__content}>2025.02 ~ 현재</div>
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
          면접 진행 전 테스트 페이지(화면, 마이크 테스트), 면접 진행 페이지(면접
          녹화 기능), 마이 페이지 구현 (FE로 참여)
        </div>
      </div>

      <div className={styles.container__list}>
        <div className={styles.container__list__title}>기술 스택</div>
        <div className={styles.container__list__content}>
          React, TypeScript, Styled-Components, SpringBoot, MySQL, AWS
        </div>
      </div>

      <div
        className={styles.container__list}
        style={{ flexDirection: "column" }}
      ></div>

      <div
        className={styles.container__list}
        style={{ flexDirection: "column", gap: "10px" }}
      >
        <div className={styles.container__list__title}>프로젝트 소개</div>
        <div className={styles.container__list__content}>
          Inpeak은 개발자들이 원하는 기술 스택을 기반으로 실제 면접처럼 연습할
          수 있도록 설계된 AI 기반 모의면접 서비스입니다. <br />
          사용자는 React, Spring, Database 등 다양한 스택 중 하나를 선택하고,
          그에 맞는 면접 질문을 받아 답변을 직접 녹음 또는 영상 녹화할 수
          있습니다. <br /> 면접이 끝난 후에는 AI가 사용자의 답변 내용을 분석하여
          논리성, 키워드 포함 여부 등 다양한 피드백을 제공해 면접 역량을
          향상시키도록 돕습니다.
        </div>
      </div>

      <div className={styles.container__imageBox}>
        <div className={styles.container__imageBox__title}>
          프로젝트 주요 화면
        </div>
        <div className={styles.container__imageBox__images}>
          <Image
            src="/images/inpeak/home.png"
            alt="home"
            width={1000}
            height={600}
          />
          <Image
            src="/images/inpeak/statics.png"
            alt="통계"
            width={1000}
            height={600}
          />
          <Image
            src="/images/inpeak/intro.png"
            alt="intro"
            width={1000}
            height={600}
          />
          <Image
            src="/images/inpeak/session.png"
            alt="session"
            width={1000}
            height={600}
          />
          <Image
            src="/images/inpeak/mypage.png"
            alt="mypage"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
