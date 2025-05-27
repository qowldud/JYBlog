import { ProjectThumbnail } from "./_components/projectThumbnail/ProjectThumbnail";
import styles from "./Project.module.scss";
import InpeakImg from "../../../assets/images/인픽 2.png";

export const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Project</div>
      <div className={styles.container__projects}>
        <ProjectThumbnail
          photo="/images/union.png"
          name="UNION"
          route="/union"
        />
        <ProjectThumbnail photo={InpeakImg} name="INPEAK" route="/inpeak" />
      </div>
    </div>
  );
};
