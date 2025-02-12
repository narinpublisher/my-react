function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // 1초마다 count 증가

    return () => clearTimeout(timer); // 메모리 누수 방지
  }, [count]); // count가 변경될 때만 실행

  return (
    <h3 style={{ textAlign: "center" }}>
      이 웹문서가 브라우저에 렌더링 된 후
      <b style={{ color: "red", fontSize: "1.5rem" }}> {count} </b>초가 흘렀습니다.
    </h3>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
