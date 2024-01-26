const MyEye = () => {	
	const [ color, setColor] = React.useState('black');
	  return (
	     <section>
		<h1>나의 코트 색상은 <strong style= {{ color: color }}>{ color }</strong> 입니다.</h1>
		<button type='button' onClick= { () => setColor('black') }>black</button>&nbsp;
		<button type='button' onClick= { () => setColor('brown') }>brown</button>&nbsp;
		<button type='button' onClick= { () => setColor('blue') }>blue</button>&nbsp;
		<button type='button' onClick= { () => setColor('green') }>green</button>
	     </section>
	);
}

const myApp = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
myApp.render ( <MyEye /> );