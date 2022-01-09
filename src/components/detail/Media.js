import classNames from "classnames/bind";

import styles from "./Media.module.scss";

const cx = classNames.bind(styles);

function Media() {
  return (
    <div className={cx("media")}>
      <div className={cx("vedio")}>
        <iframe
          src="https://www.youtube.com/embed/Jm5v-dZnYCs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className={cx("posters")}></div>
      <div className={cx("snapshot")}></div>
    </div>
  );
}

export default Media;
