    const { useState, useEffect } = React;

    const Autumn = ({ sunset }) =>  {
      const [txt, setTxt] = useState('가을이라 가을바람');

      // props가 바뀔 때마다 txt 상태에 반영
      useEffect(() => {
        setTxt(sunset);
      }, [sunset]);

      const changeTxt = () => {
        setTxt('색동옷 갈아입은 ');
      };

      return (
        <p>
          가을바람 머물다간 들판에<br />
          모락모락 피어나는 저녁연기<br />
          <b className="red">{txt}</b>
          가을 언덕에<br />
          붉게 물들어 타는 저녁놀<br />
          <button type="button" onClick= {changeTxt}>
            텍스트 변경하기
          </button>
        </p>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Autumn sunset= "낙엽이 흩날리는 " />);