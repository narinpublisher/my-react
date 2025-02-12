 function Sunset() {
      const [verses, setVerses] = React.useState([
        "바람이 머물다 간 들판에",
        "모락모락 피어나는 저녁연기",
        "색동옷 갈아입은 가을 언덕에",
        "붉게 물들어 타는 저녁놀",
      ]);

      return (
        <section
          style={{
            backgroundColor: "orange",
            padding: "30pt",
            borderRadius: "30pt",
            textAlign: "center",
          }}
        >
          <h1>동요_ 노을 3절</h1>
          <ul>
            {verses.map((verse, index) => (
              <li key={index}>{verse}</li>
            ))}
          </ul>
        </section>
      );
    }

    // ReactDOM을 사용하여 "root" 요소에 렌더링
    ReactDOM.createRoot(document.getElementById("root")).render(<Sunset />);
