      const { useState } = React;

      const Autumn = () => {
        // 상태 선언: sunset이라는 상태를 useState로 관리
        const [sunset, setSunset] = useState('모락모락 피어나는 저녁 연기');

        return (
          <section>
            <p>가을바람 머물다 간 들판에</p>
            <p>{sunset}</p>
            <p>색동옷 갈아입은 가을 언덕에</p>
            <p>붉게 물들어 타는 저녁놀</p>
          </section>
        );
      };

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Autumn />);