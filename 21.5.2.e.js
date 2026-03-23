function Counter() {
  let ref = React.useRef( 0 );
  const [ count, change ] = React.useState(0);

  function handleClick() {
    change(count+1);
    ref.current = ref.current + 1;
    alert('You have clicked the button ' + ref.current + ' times.');
  }

  return (
		<>
			<button onClick= { handleClick }>Click Me</button><br />
			You have clicked the button {count} times.
		</>
  );
}
const test = ReactDOM.createRoot ( document.getElementById('root') );
test.render ( <Counter /> );