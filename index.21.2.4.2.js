function MyHair() {
  const [ hair , setHair ] = React.useState("옐로우골드"); // 헤어색상 
  const [ borderColor , setBorderColor ] = React.useState("gold"); // 테두리 색상 상태 추가

  const changeColor = ( newHairColor , newBorderColor ) => {
    setHair(newHairColor); // 헤어 색상 변경
    setBorderColor(newBorderColor); // 테두리 색상 변경
  };

  return (
    <section style={{
        	border: `2px dashed ${borderColor}`, // 상태 기반 테두리 색상
        	padding: "10pt", textAlign: "center",
      }}
    >
      <h1>나의 헤어는 { hair }색 입니다.</h1>
      <button onClick={() => changeColor( "레드와인" , "red" )}  >  /* 상태 업데이트 함수 호출 */
        색상 변경하기
      </button>
    </section>
  );
}

const myApp = ReactDOM.createRoot(document.getElementById( "root" ));
myApp.render( <MyHair /> );
