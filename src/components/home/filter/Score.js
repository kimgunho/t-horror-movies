import { useState } from "react";
import { useRecoilState } from "recoil";
import classNames from "classnames/bind";

import styles from "./Score.module.scss";
import { scoreState } from "../../../recoil/homeState";
import { scoreData } from "../../../assets/data/score";

const cx = classNames.bind(styles);

function Score() {
  const [currentScore, setCurrentScore] = useRecoilState(scoreState);
  const [scoreList, setScoreList] = useState(scoreData);

  const handleCurrentScore = (event) => {
    const { score } = event.target.dataset;
    if (score !== undefined) {
      setCurrentScore(score);

      let newScoreData = [...scoreList];
      for (let newScore of newScoreData) {
        newScore.score === Number(score)
          ? (newScore.active = true)
          : (newScore.active = false);
      }
      setScoreList(newScoreData);
    }
  };

  return (
    <div className={cx("score")}>
      <h3 className={cx("title")}>
        <span className={cx("activeScore")}>{currentScore}</span>점 이상 영화
        표기
      </h3>
      <ul onClick={handleCurrentScore}>
        {scoreList.map(({ score, active }) => (
          <li className={cx({ active })} data-score={score} key={score}>
            {score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Score;
