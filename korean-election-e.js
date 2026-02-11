const { useState, useEffect } = React;

function Election() {
  const [votes , setVotes] = useState('넉넉한 사전투표 기간?');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVotes(' 사전투표 즉시 폐기!');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p>
      소중한 투표 권리행사만큼 중요한 것은<br />
      <b className="red">{votes}</b>
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Election />);