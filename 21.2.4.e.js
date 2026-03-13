const { useState } = React;

function MyHair() {

  const [hair, change] = useState("Yellow Gold");

  return (
    <section
      style={{
        border: "2px dashed gold",
        padding: "10pt",
        textAlign: "center"
      }}
    >

      <h1>My hair color is {hair}.</h1>

      <button onClick={() => change("Red Wine")}>
        Change Color
      </button>

    </section>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<MyHair />);
그림 21.2.4.1.1  렌더링 초기 상태






