function Counter() {
  let ref = React.useRef( 0 );
  const [ count, change ] = React.useState(0);

  function handleClick() {
    change(count+1);
    ref.current = ref.current + 1;	
    alert('고객님은 버튼을 ' + ref.current + '번 클릭했습니다.');				
  }

  return (
		<>
			<button onClick= { handleClick }>클릭하세요</button><br />
			버튼을 {count}회 클릭했습니다.
		</>
  );
}
const test = ReactDOM.createRoot ( document.getElementById('root') );
test.render ( <Counter /> );