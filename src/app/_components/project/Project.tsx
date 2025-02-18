import { ProjectThumbnail } from "./_components/projectThumbnail/ProjectThumbnail";
import styles from "./Project.module.scss";

export const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Project</div>
      <div className={styles.container__projects}>
        <ProjectThumbnail photo="/images/union.png" name="UNION" />
      </div>
    </div>
  );
};
