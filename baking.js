import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

function Baking() {
  // 3을 value 저장
  // 위에 선언했던 값을 변경하는 reducer 함수를 넣어주기!
  // reducer속 로직들을 실행시킬 명령어가 담겨있는 dispatch 선언
  const [value, dispatch] = useReducer(reducer, 3);

  const onPlus = () => {
    dispatch({ type: 'PLUS' });
  };

  const onMinus = () => {
    dispatch({ type: 'MINUS' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </div>
  );
}

export default Baking;