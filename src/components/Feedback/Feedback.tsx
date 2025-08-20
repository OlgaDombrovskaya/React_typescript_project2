import Button from "components/Button/Button";
import { type FeedbackProps } from "./types";
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithcountContainer,
  Count,
} from "./styles.ts";

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  onReset,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithcountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithcountContainer>
        <ButtonWithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={onReset} />
    </FeedbackWrapper>
  );
}

export default Feedback;
