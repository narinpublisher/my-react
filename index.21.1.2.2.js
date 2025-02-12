const MyCoat = () => {
  const [color, setColor] = React.useState("black");
  const [activeIndex, setActiveIndex] = React.useState(0); // 선택된 버튼의 인덱스 상태

  const change = (index, newColor) => {
    setColor(newColor); // 코트 색상 변경
    setActiveIndex(index); // 선택된 버튼 인덱스 업데이트
  };

  return (
    <section>
      <h1>
        나의 코트 색상은{" "}
        <strong style={{ color: color }}>{color}</strong>입니다.
      </h1>
      <button
        type="button"
        onClick={() => change(0, "black")}
        style={{
          background: activeIndex === 0 ? "black" : "none",
          color: activeIndex === 0 ? "white" : "black",
        }}
      >
        black
      </button>
      &nbsp;
      <button
        type="button"
        onClick={() => change(1, "brown")}
        style={{
          background: activeIndex === 1 ? "brown" : "none",
          color: activeIndex === 1 ? "white" : "black",
        }}
      >
        brown
      </button>
      &nbsp;
      <button
        type="button"
        onClick={() => change(2, "blue")}
        style={{
          background: activeIndex === 2 ? "blue" : "none",
          color: activeIndex === 2 ? "white" : "black",
        }}
      >
        blue
      </button>
      &nbsp;
      <button
        type="button"
        onClick={() => change(3, "green")}
        style={{
          background: activeIndex === 3 ? "green" : "none",
          color: activeIndex === 3 ? "white" : "black",
        }}
      >
        green
      </button>
    </section>
  );
};

const myApp = ReactDOM.createRoot(document.getElementById("root"));
myApp.render(<MyCoat />);
