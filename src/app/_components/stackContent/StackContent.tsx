import IconButton from "@/component/icon/IconButton";
import styles from "./StackContent.module.scss";
import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaSlack,
} from "react-icons/fa";
import { RiNextjsFill, RiNotionFill } from "react-icons/ri";
import {
  SiNestjs,
  SiRecoil,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

function StackContent() {
  return (
    <div className={styles.container}>
      <div className={styles.container__tech}>
        <div className={styles.stackTitle}>Tech Stack</div>
        <div className={styles.stackIcons}>
          <div className={styles.stackIcons__icon}>
            <IconButton name="REACT" icon={FaReact} />
            <IconButton name="NEXT.JS" icon={RiNextjsFill} />
            <IconButton name="NESTJS" icon={SiNestjs} />
            <IconButton name="JAVASCRIPT" icon={FaJs} iconSize={17} />
          </div>
          <div className={styles.stackIcons__icon}>
            <IconButton name="TYPESCRIPT" icon={SiTypescript} iconSize={16} />
            <IconButton name="HTML5" icon={FaHtml5} />
            <IconButton name="CSS" icon={IoLogoCss3} />
            <IconButton name="TAILWINDCSS" icon={SiTailwindcss} />
          </div>
          <div className={styles.stackIcons__icon}>
            <IconButton name="STYLED-COMPONENTS" icon={SiStyledcomponents} />
            <IconButton name="C++" icon={TbBrandCpp} />
            <IconButton name="RECOIL" icon={SiRecoil} />
          </div>
        </div>
      </div>

      <div className={styles.container__tool}>
        <div className={styles.stackTitle}>Tools</div>
        <div className={styles.stackIcons}>
          <div className={styles.stackIcons__icon}>
            <IconButton name="GIT" icon={FaGitAlt} />
            <IconButton name="GITHUB" icon={FaGithub} />
            <IconButton name="NOTION" icon={RiNotionFill} />
            <IconButton name="VSCODE" icon={VscVscode} />
          </div>
          <div className={styles.stackIcons__icon}>
            <IconButton name="SLACK" icon={FaSlack} />
            <IconButton name="FIGMA" icon={FaFigma} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackContent;
