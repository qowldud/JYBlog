import styles from "./Education.module.scss";

function Education() {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Education</div>
      <div className={styles.container__content}>
        <div className={styles.container__content__education}>
          <ul>
            <li>
              숭실대 소프트웨어학부 (2022.03~ )
              <ul>
                <li>
                  숭실대학교 소프트웨어학부 7대 기획국원(2022.03 - 2022.12)
                </li>
                <li>
                  숭실대학교 소프트웨어학부 8대 기획국장(2023.01 - 2023.12)
                </li>
              </ul>
            </li>

            <li>구름톤 DEEP DIVE 풀스택 8기 수료(2024.05 - 2024.11)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
