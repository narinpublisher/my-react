function MyHair() {
	const [ color, changeColor ]= React.useState("다크브라운");
	
	return (
		<section style={{ textAlign : 'center' }}>
			<h1>나의 헤어는 { color }색 입니다.</h1>
		</section>
	);
}

const myApp = ReactDOM.createRoot ( document.getElementById ( 'root' ));
myApp.render ( <MyHair /> );