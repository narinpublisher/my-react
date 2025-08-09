    const { useState } = React;

    function Autumn() {
      const [txt, setTxt] = useState('에머럴드빛 하늘');

      const changeTxt = ㅁ() => {
        setTxt('색동옷 갈아입은 ');
      };

      return (
        <p>
          가을바람 머물다간 들판에<br />
          모락모락 피어나는 저녁연기<br />
          <b className="orange">{txt}</b>
          가을 언덕에<br />
          붉게 물들어 타는 저녁놀<br /><br />
          <button type="button" onClick={changeTxt}>
            텍스트 변경하기
          </button>
        </p>
      );
    }

    const leaves = ReactDOM.createRoot(document.getElementById('root'));
    leaves.render(<Autumn />);