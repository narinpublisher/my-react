    // React 객체에서 useState 와 useEffect 훅을 사용할 수 있게 함.
    const { useState , useEffect } = React;

// BarleyTree 컴포넌트 (함수형)
const BarleyTree = () => {
  // txt: 화면에 표시할 텍스트 상태, setTxt: 상태를 바꾸는 함수 , 초기값은 '길가에 떨어진 나뭇잎'
  const [txt, setTxt] = useState('길가에 떨어진 나뭇잎 ');

  // 화면이 처음 표시된 후 실행되는 부분
  useEffect(() => {
    // 3초 후에 txt 상태를 '가지에 희망의 말'로 변경
    const timer = setTimeout(() => {
      setTxt('가지에 희망의 말 ');
    }, 3000);

    // 컴포넌트가 사라질 때 타이머 제거 (메모리 낭비 방지)
    return () => clearTimeout(timer);
  }, []); // 빈 배열: 처음 한 번만 실행됨

  // JSX 반환: 상태값 txt를 굵게 표시하고 나머지 시를 출력
  return (
    <p>
      성문앞 우물곁에 서있는 보리수<br />
      나는 그 그늘아래 단꿈을 보았네<br />
      <b className="aqua">{txt}</b><br />
      새기어 놓고서<br />
      기쁘나 슬플때나 찾아온 나무밑<br />
      찾아온 나무밑<br /><br />
    </p>
  );
};

// root 요소에 BarleyTree 컴포넌트를 화면에 표시
const democracy = ReactDOM.createRoot(document.getElementById('root'));
democracy.render(<BarleyTree />);