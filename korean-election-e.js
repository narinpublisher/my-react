const { useState, useEffect } = React;

function Election() {
  const [votes , setVotes] = useState('Generous early voting period?');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVotes('Abolish early voting immediately!');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p>
      What could be more important than exercising your precious right to vote?<br />
      <b className="red">{votes}</b>
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Election />);