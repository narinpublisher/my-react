    // Enable useState Hook from the React object.
    const { useState } = React;

// Autumn component (arrow function component)
const Autumn = () => {
  // txt: state variable
  // setTxt: function that updates the state
  // Initial state value: 'Seasoned with seaweed side dish ''
  const [txt, setTxt] = useState('Seasoned with seaweed side dish ');

  // Function that changes the state value when the button is clicked
  const changeTxt = () => {
    // When state changes, the UI automatically re-renders
    setTxt('Setting a small dining table with pebbles ');
  };

  // Return JSX (structure displayed on the screen)
  return (
    <p>
      The sunshine sparkles, the sand grains shimmer<br />
      Making rice cakes out of sand grains<br />
      {/* Display the txt state value on the screen */}
      <b className="orange">{txt}</b><br />
        Inviting older sisters to join<br />
        Yum yum, so delicious<br /><br />
      {/* Execute changeTxt function when button is clicked */}
      <button type="button" onClick={changeTxt}>
        Change Text
      </button>
    </p>
  );
};

// Select the root element and render the Autumn component
const leaves = ReactDOM.createRoot(document.getElementById('root'));
leaves.render(<Autumn />);