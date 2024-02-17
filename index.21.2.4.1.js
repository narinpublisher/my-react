function MyHair() {
	const [ hair , change ] = React.useState('옐로우골드');
	
	return (
		<section style={{ border:'2px dashed gold', padding: '10pt', textAlign: 'center' }}>
			<h1>나의 헤어는 { hair }색 입니다.</h1>
			<button onClick= { () =>  change("레드와인") }>색상 변경하기</button>
		</section>
	);
}

const myApp = ReactDOM.createRoot ( document.getElementById ( 'root' ));
myApp.render ( <MyHair /> );