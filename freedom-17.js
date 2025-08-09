// 무설치 Babel 방식: React와 ReactDOM은 CDN에서 전역으로 로드됨
const Freedom = () => {
  // 상태 변수 선언 (React.useState 사용)
  const [compare, setCompare] = React.useState('애매하다. '); // 초기값
  const [beforeText, setBeforeText] = React.useState('');          // 변경 전 메시지
  const [afterText, setAfterText] = React.useState('');                 // 변경 후 메시지

  // 컴포넌트가 처음 화면에 나타난 후 3초 뒤에 상태 변경
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setBeforeText(compare + ' 글자는 3초 후에 ');
      setCompare('다르다! ');
    }, 3000);

    // cleanup 함수: 컴포넌트가 사라질 때 타이머 제거
    return () => clearTimeout(timer);
  }, []); // 최초 1회만 실행

  // compare 상태가 변경될 때 실행되는 부분
  React.useEffect(() => {
    if (compare === '다르다! ') {
      setAfterText(compare + ' 글자로 변경 되었습니다.');
    }
  }, [compare]);

  // JSX 반환
  return (
    <p>
      자유민주주의와<br />
      인민민주주의는<br />
      <b className="red">{compare}</b><br />
      <span className="yellowgreen">{beforeText}</span>
      <span className="yellowgreen">{afterText}</span>
    </p>
  );
};

// root에 Freedom 컴포넌트 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Freedom />);