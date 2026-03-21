function Counter() {
  let ref = React.useRef( 0 );

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You have clicked the button ' + ref.current + ' times.');	
  }
  return (
		<>
			<button onClick= { handleClick }>Click Me</button><br />
			You clicked the button { ref.current } times.
		</>
  );
}
const test = ReactDOM.createRoot ( document.getElementById('root') );
test.render ( <Counter /> );