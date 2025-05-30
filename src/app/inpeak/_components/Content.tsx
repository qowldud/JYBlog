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
          <strong>Inpeak</strong>은 개발자들이 원하는 기술 스택을 기반으로 실제
          면접처럼 연습할 수 있도록 설계된 <b>AI 기반 모의면접</b> 서비스입니다.{" "}
          <br />
          사용자는 React, Spring, Database 등 다양한 스택 중 하나를 선택해 해당
          분야의 면접 질문을 받고, 음성 또는 영상으로 답변을 녹음할 수 있습니다.{" "}
          <br /> 녹음된 답변은 OpenAI의 Whisper 모델을 활용해 음성을 텍스트로
          전환하고, 전사된 내용은 GPT 기반 자연어 처리 모델을 통해 분석됩니다.
          <br />
          이를 바탕으로 사용자의 답변에 대한 논리성, 핵심 키워드 포함 여부 등에
          대한 상세한 피드백을 제공하여, 실전 면접에서의 역량 향상을 돕습니다.
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
