    // React 객체에서 useState 훅을 사용할 수 있게 함.
    const { useState } = React;

// Autumn 컴포넌트 (화살표 함수형 컴포넌트)
const Autumn = () => {
  // txt: 상태 변수, setTxt: 상태를 변경하는 함수, 초기 상태값은 '에머럴드빛 하늘 '
  const [txt, setTxt] = useState('미역들로 반찬 무쳐 ');

  // 버튼 클릭 시 상태 값을 변경하는 함수
  const changeTxt = () => {
    // 상태(State) 가 변경되면서 UI가 자동으로 새로 렌더링됨
    setTxt('조약돌로 소반 지어 ');
  };

  // JSX 반환 (화면에 표시되는 구조)
  return (
    <p>
      햇볕은 쨍쨍 모래알은 반짝<br />
      모래알로 떡 해 놓고<br />
      {/* txt 상태값을 화면에 표시 */}
      <b className="orange">{txt}</b>
        언니 누나 모셔다가<br />
      맛있게도 냠냠<br /><br />
      {/* 버튼 클릭 시 changeTxt 함수 실행 */}
      <button type="button" onClick={changeTxt}>
        텍스트 변경하기
      </button>
    </p>
  );
};

// ReactDOM.createRoot()로 root 요소를 선택하고 Autumn 컴포넌트를 렌더링
const leaves = ReactDOM.createRoot(document.getElementById('root'));

leaves.render(<Autumn />);
