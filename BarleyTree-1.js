const Barley= ()=>  {
  const [mun , setMun] = React.useState('후문 뒤  ');
  const [communism] = React.useState('우물 곁에 ');
  const [eradicate] = React.useState('서 있는 보리수');

  const change = () => {
    setMun('성문 앞  ');
  };

  return (
    <section>
      <h1 className="orange">빌헬름 뮐러_ 보리수</h1>
      <p>
        <b className="aqua">{mun}</b>
        {communism}
        {eradicate}
        <br />
        나는 그 그늘 아래 단 꿈을 보았네
        <br />
        가지에 희망의 말 새기어 놓고서
        <br />
        기쁘나 슬플 때나 찾아온 나무 밑
      </p>
      <button type="button" onClick={change}>
        텍스트 변경하기
      </button>
    </section>
  );
}

const myApp = ReactDOM.createRoot(document.getElementById('root'));
myApp.render(<Barley />);