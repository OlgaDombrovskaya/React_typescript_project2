import Button from "components/Button/Button";
import { type CounterProps } from "./types";
import {CounterWrapper, ButtonControl, Count} from "./styles.ts"

function Counter({ onMinus, onPlus, count }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
