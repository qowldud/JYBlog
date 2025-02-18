import Education from "../education/Education";
import StackContent from "../stackContent/StackContent";
import styles from "./Introduction.module.scss";

function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.container__introduction}>
        <div className={styles.container__title}>
          👋🏻 안녕하세요, 저는 배지영입니다.
        </div>
        <div className={styles.container__content}>
          저는 언제나 열정을 가지고 성장하는 개발자입니다. 좋은 프로젝트를 통해
          사람들에게 편리함과 행복을 주며, 의미 있는 변화를 만들어가는 것이 저의
          목표입니다. 또한, 새로운 환경에서도 빠르게 적응하며 최선을 다하는 것이
          저의 강점입니다.
        </div>
      </div>

      <Education />

      <StackContent />
    </div>
  );
}

export default Introduction;
