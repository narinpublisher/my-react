// 무설치 Babel 방식에서는 import 제거하고 React.useState, React.useEffect 사용
const BarleyTree = () => {
  const [show, setShow] = React.useState(true);

  const delText = () => {
    setShow(false);
  };

  return (
    <main>
      가지에 희망의 말 새기어 넣고서<br />
      {show && <Child />}
      <br />
      <button type="button" onClick={delText}>
        마운트 해제하기
      </button>
    </main>
  );
};

const Child = () => {
  React.useEffect(() => {
    // cleanup 함수: 컴포넌트가 사라질 때 실행
    return () => {
      alert("BarleyTree 컴포넌트는 마운트 해제됩니다.");
    };
  }, []); // 최초 마운트/언마운트 시만 실행

  return <p>기쁘나 슬플 때나 찾아온 나무 밑</p>;
};