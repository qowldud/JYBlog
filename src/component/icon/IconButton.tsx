import { IconType } from "react-icons";
import styles from "./IconButton.module.scss";

interface Props {
  name: string;
  icon: IconType;
  iconSize?: number;
  color?: string;
}

function IconButton({ name, icon: Icon, color, iconSize }: Props) {
  return (
    <div
      className={styles.container}
      style={{ "--background-color": color } as React.CSSProperties}
    >
      {Icon && <Icon size={iconSize ? iconSize : 18} />}
      <div className={styles.container__name}>{name}</div>
    </div>
  );
}

export default IconButton;
