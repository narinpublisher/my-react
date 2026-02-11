const { useState, useEffect } = React;

function Election() {
  const [votes , setVotes] = useState('Fair elections are held. ❌');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVotes('Election fraud occurs! ⭕');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p>
      What problems arise when using electronic devices in election voting systems?<br />
      <b className="red">{votes}</b>
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Election />);