// 앞으로 숫자 operator 도 같이 나오게끔...
// 괄호들어있는 숫자 계산(우선순위)

const $total = document.querySelector("#total");
const $modifier = document.querySelector("#modifier");
const $keys = document.querySelector(".keys");
const initialState = {
  acc: 0,
  current: 0,
  operator: "",
};

const calculatorState = JSON.parse(JSON.stringify(initialState));

const operators = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  x: (x, y) => x * y,
  "/": Math.round((x, y) => x / y),
};

const resetCalculator = () => {
  $total.innerText = 0;
  calculatorState.acc = initialState.acc;
  calculatorState.current = initialState.current;
  calculatorState.operator = initialState.operator;
  return;
};

$keys.addEventListener("click", (e) => {
  if (e.target.classList.contains("digit")) {
    $total.innerText = e.target.innerText;

    if (calculatorState.acc === 0) {
      calculatorState.acc = Number(e.target.innerText);
      return;
    }

    calculatorState.current = Number(e.target.innerText);

    console.log(calculatorState);
  } else {
    if (["/", "x", "-", "+"].includes(e.target.innerText)) {
      if (!calculatorState.acc) {
        alert("숫자를 먼저 입력해 주세요!!!");
      }
      calculatorState.operator = e.target.innerText;
    }

    if (
      e.target.innerText === "=" &&
      calculatorState.current &&
      calculatorState.operator
    ) {
      calculatorState.acc = operators[calculatorState.operator](
        calculatorState.acc,
        calculatorState.current
      );
      $total.innerText = calculatorState.acc;
    }
    console.log(calculatorState);
  }
});
$modifier.addEventListener("click", resetCalculator);
