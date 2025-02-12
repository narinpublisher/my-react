function BabyGoat() {
  const [goat, setGoat] = React.useState({
    t1: ' 드리운 푸른 언덕에',
    t2: '?? 신나는 아기 염소들 ??',
    t3: '잔뜩 찡그린 얼굴로 ',
    t4: '엄마찾아 음메 아빠찾아 음메',
    t5: '울상을 짓다가'
  });

  return (
    <section
      style={{
        backgroundColor: 'skyblue',
        padding: '30pt',
        maxWidth: '400px',
        margin: 'auto'
      }}
    >
      <h1>동요_ 아기염소</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>파란하늘 파란하늘 꿈이</li>
        <li>{goat.t1}</li>
        <li>{goat.t2}</li>
        <li>해처럼 밝은 얼굴로</li>
        <li>빗방울이 뚝뚝뚝 떨어지는 날에는</li>
        <li>{goat.t3}</li>
        <li>{goat.t4}</li>
        <li>{goat.t5}</li>
      </ul>
      <button
        type="button"
        onClick={() =>
          setGoat({
            ...goat, // 기존 상태를 유지하고
            t2: '아기염소 여럿이 풀을 뜯고 놀아요' // t2를 업데이트
          })
        }
      >
        틀린 구절 수정
      </button>
    </section>
  );
}

const myApp = ReactDOM.createRoot(document.getElementById('root'));
myApp.render(<BabyGoat />);
