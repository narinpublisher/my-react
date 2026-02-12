    // Enable useState and useEffect Hooks from the React object
    const { useState , useEffect } = React;

// BarleyTree component (functional component)
const BarleyTree = () => {
  // txt: text state displayed on the screen
  // setTxt: function that updates the state
  // Initial value: 'A fallen leaf by the roadside ''
  const [txt, setTxt] = useState('A fallen leaf by the roadside ');
  // Runs after the component is first rendered
  useEffect(() => {
    // After 3 seconds, change txt state to 'Words of hope on the branch '
    const timer = setTimeout(() => {
      setTxt('Words of hope on the branch ');
    }, 3000);
    // Remove the timer when the component unmounts (prevents memory leaks)
    return () => clearTimeout(timer);
  }, []); // Empty dependency array: runs only once

  // Return JSX:
  // Display the txt state in bold and render the rest of the poem
  return (
    <p>
      By the well in front of the castle gate stands the linden tree<br />
      Beneath its shade, I once dreamed a gentle dream<br />
      <b className="aqua">{txt}</b><br />
      Carved into memory<br />
      Whether in joy or in sorrow, I return beneath this tree<br />
      Return beneath this tree<br /><br />
    </p>
  );
};

// Render the BarleyTree component into the root element
const democracy = ReactDOM.createRoot(document.getElementById('root'));
democracy.render(<BarleyTree />);