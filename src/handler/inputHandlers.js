import { Console } from "@woowacourse/mission-utils";
import PROMPTS from "../constants.js";
import { printError } from "./printHandlers.js";

const handlePurchaseInput = async () => {
  const purchaseInput = await Console.readLineAsync(PROMPTS.PURCHASE_PROMPT);

  //유저가 입력한 천원단위의 값을 쉽게 비교 하기 위해서 뒤에 "000"의 위치인 -3과
  //유저가 산 로또의 장수를 쉽게 구하기 위해 0을 담음
  const [INPUT_SLICE_RANGE_START, INPUT_SLICE_RANGE_END] = [0, -3];
  const ZERO_AMOUNT_TO_COMPARE = "000";

  if (purchaseInput.slice(INPUT_SLICE_RANGE_END) !== ZERO_AMOUNT_TO_COMPARE) {
    return printError(PROMPTS.PURCHASE_ERROR_STRING);
  }

  return purchaseInput.slice(INPUT_SLICE_RANGE_START, INPUT_SLICE_RANGE_END);
};

export { handlePurchaseInput };
