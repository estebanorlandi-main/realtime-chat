import { MouseEvent } from "react";

import styles from "./User.module.css";

interface Props {
  username: string;
  avatar?: string;

  onClick: (event: MouseEvent<HTMLElement>) => void;

  toLeft?: boolean;
  toRight?: boolean;
}

function User({ username, avatar, onClick, toRight, toLeft }: Props) {
  return (
    <button className={styles.container} onClick={onClick}>
      {toLeft && avatar && <img className={styles.avatar} src={avatar} />}
      {username && <h3 className={styles.username}>{username}</h3>}
      {toRight && avatar && <img className={styles.avatar} src={avatar} />}
    </button>
  );
}

export default User;
