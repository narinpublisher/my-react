const Gate = () => {
  const korea = {
    attention: '성문 앞 ',
    communism: '우물 곁에 ',
    eradicate: '서 있는 보리수'
  };

  return (
    <section>
      <h1 className="aqua">빌헬름 뮐러_ 보리수</h1>
      <p>
        {korea.attention}
        {korea.communism}
        {korea.eradicate}<br />
        나는 그 그늘 아래 단 꿈을 보았네<br />
        가지에 희망의 말 새기어 놓고서<br />
        기쁘나 슬플 때나 찾아온 나무 밑
      </p>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gate />);