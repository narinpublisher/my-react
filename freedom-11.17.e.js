// Babel standalone version: React and ReactDOM are loaded globally from CDN
const Freedom = () => {
  // Declare state variables (using React.useState)
  const [compare, setCompare] = React.useState('애매하다. '); // initial value
  const [beforeText, setBeforeText] = React.useState('');          // message before change
  const [afterText, setAfterText] = React.useState('');                 // message after change

  // Change state 3 seconds after the component first appears
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setBeforeText(compare + ' will change in 3 seconds. ');
      setCompare('Different! ');
    }, 3000);

    // Cleanup function: remove timer when component unmounts
    return () => clearTimeout(timer);
  }, []); // Run only once

  // Runs when compare state changes
  React.useEffect(() => {
    if (compare === 'Different!  ') {
      setAfterText(compare + ' It has been changed.');
    }
  }, [compare]);

  // Return JSX
  return (
    <p>
      Liberal democracy and<br />
      People’s democracy are<br />
      <b className="red">{compare}</b><br />
      <span className="yellowgreen">{beforeText}</span>
      <span className="yellowgreen">{afterText}</span>
    </p>
  );
};

// Render Freedom component into root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Freedom />);