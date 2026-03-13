function MyHair() {
	const [ color, changeColor ]= React.useState("Dark Brown");
	
	return (
		<section style={{ textAlign : 'center' }}>
			<h1>My hair color is {color}.</h1>
		</section>
	);
}

const myApp = ReactDOM.createRoot ( document.getElementById ( 'root' ));
myApp.render ( <MyHair /> );