const CreateObject  = () => {
	const blueStyle = {
			color: 'white' ,
			backgroundColor: 'skyblue' ,
			padding: '20px' ,
			fontFamily: 'cursive' ,
			textShadow: '1px 1px 10px blue' ,
			borderRadius: '20px'
	}
	return (
	    <>
		<h1 style= { blueStyle }>Inline Style Referencing a JavaScript Object</h1>
		<p>You can create a style object using CSS properties and
		reference that object inside the inline style attribute.</p>
	    </>
	);
}

const addStyle = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
addStyle.render ( <CreateObject /> );