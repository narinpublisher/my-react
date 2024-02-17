function MyHair() {
	const [ hair, change ] = React.useState('옐로우골드');
	
	const color = ( i , j )  => {	
		change( i );	
		document.querySelector('section').style.border= " 2px dashed  " + j ;
	}	
 	return (
		<section style={{border: ' 2px dashed gold ', padding: '10pt', textAlign: 'center'}}>
			<h1>나의 헤어는 { hair }색 입니다.</h1>
			<button onClick= { () =>  color( '레드와인', 'red' ) }>색상 변경하기</button>
		</section>
	);
}

const myApp = ReactDOM.createRoot ( document.getElementById ( 'root' ));
myApp.render ( <MyHair /> );    