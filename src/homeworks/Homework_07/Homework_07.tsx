import Feedback from "components/Feedback/Feedback";

import "./styles.css";
import { useState } from "react";
import Button from "components/Button/Button";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = () => {
    setLike((prevValue: number) => {
      console.log(prevValue);
      return prevValue + 1;
    });
    setLike((prevValue: number) => {
      console.log(prevValue);
      return prevValue + 1;
    });
    setLike((prevValue: number) => {
      console.log(prevValue);
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="lesson_07_page_wrapper">
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        onReset={resetResults}
      />
    </div>
  );
}

export default Homework_07;
